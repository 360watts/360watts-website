import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import {
  Calculator,
  MessageCircle,
  Share2,
  Copy,
  Gauge,
  PiggyBank,
  Ruler,
  SunMedium,
  Wallet2,
  Zap,
} from "lucide-react";
import { calculateSolarRequirementsFromBill, BillInputs } from "../../../utils/solar-physics";
import { reduceMotion } from "../lib/motion";

export function SolarCalculatorSection() {
  const [billAmount, setBillAmount] = useState<string>("");
  const [estimatedUnits, setEstimatedUnits] = useState<number | undefined>();
  const [calcResult, setCalcResult] = useState<ReturnType<
    typeof calculateSolarRequirementsFromBill
  > | null>(null);
  const [hasAttemptedCalculation, setHasAttemptedCalculation] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isCalcVisible, setIsCalcVisible] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [calcGlow, setCalcGlow] = useState({ x: 50, y: 50 });
  const [isCalcHovering, setIsCalcHovering] = useState(false);

  const calculatorRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const calcRafRef = useRef<number | null>(null);
  const resultRafRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      setCalcResult(calculateSolarRequirementsFromBill({ billingCycle: "Bi-Monthly" }));
    } catch {
      setCalcResult(null);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setIsCalcVisible(true);
      setIsResultVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === calculatorRef.current) setIsCalcVisible(entry.isIntersecting);
          if (entry.target === resultRef.current) setIsResultVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );
    if (calculatorRef.current) observer.observe(calculatorRef.current);
    if (resultRef.current) observer.observe(resultRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (calcRafRef.current !== null) cancelAnimationFrame(calcRafRef.current);
      if (resultRafRef.current !== null) cancelAnimationFrame(resultRafRef.current);
    };
  }, []);

  const handleBillAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (/^\d+$/.test(value) && !/[eE+\-]/.test(value))) {
      if (value === "0" || value === "") setBillAmount("");
      else {
        const numValue = Number(value);
        if (!isNaN(numValue) && numValue > 0) setBillAmount(value);
      }
    }
  };

  const handleEstimatedUnitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (/^\d+$/.test(value) && !/[eE+\-]/.test(value))) {
      setEstimatedUnits(value ? Number(value) : undefined);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "e" || e.key === "E" || e.key === "+" || e.key === "-") e.preventDefault();
  };

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedCalculation(true);
    const billAmountNum = billAmount ? Number(billAmount) : undefined;
    const estimatedUnitsNum = estimatedUnits;
    if (billAmountNum && billAmountNum > 0 && estimatedUnitsNum && estimatedUnitsNum > 0) {
      alert(
        "Please enter either bill amount OR estimated units, not both. Choose the option you're more comfortable with."
      );
      return;
    }
    if (
      (!billAmountNum || billAmountNum <= 0) &&
      (!estimatedUnitsNum || estimatedUnitsNum <= 0)
    ) {
      alert(
        "Please enter either a bill amount (₹) or estimated bi-monthly units (kWh) to calculate your solar requirements."
      );
      return;
    }
    if (billAmountNum !== undefined && billAmountNum <= 0) {
      alert("Bill amount must be greater than 0.");
      return;
    }
    const bill: BillInputs = {
      totalBillAmount: billAmountNum,
      estimatedUnits: estimatedUnitsNum,
      billingCycle: "Bi-Monthly",
    };
    try {
      const result = calculateSolarRequirementsFromBill(bill);
      setCalcResult(result);
      setShowResults(true);
      setIsResultVisible(true);
      setTimeout(() => {
        document.getElementById("solar-calculator-result")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 100);
    } catch (err) {
      console.error("Calculation error:", err);
      alert(
        "There was an error calculating your solar requirements. Please check your inputs and try again."
      );
      setCalcResult(null);
      setShowResults(false);
    }
  };

  const generateShareText = () => {
    if (!calcResult) return "";
    return `360watts is happy to guide your solar journey !!

Your initial solar estimate from our website www.360watts.com is,

System Size: ${calcResult.recommendedCapacityKw.toFixed(1)} kW
Solar Panels: ${calcResult.panelCount} panels
Annual Generation: ${calcResult.annualGenerationKwh.toLocaleString()} kWh
Estimated Cost: ₹${(calcResult.estimatedCost / 100000).toFixed(1)}L
Annual Savings: ₹${(calcResult.annualSavings / 1000).toFixed(0)}k

For a detailed quotation, we recommend you to submit your energy bill for the last 1 to 2 years in the link below (--> https://360watts.com/contact)

Feel free to call us at +91 9087610051, via phone call or WhatsApp.`;
  };

  const shareViaWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(generateShareText())}`, "_blank");
  };

  const shareViaFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out my solar calculator results from 360watts!");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, "_blank");
  };

  const shareViaTwitter = () => {
    const text = encodeURIComponent(generateShareText().substring(0, 200) + "...");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateShareText());
      alert("Results copied to clipboard!");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = generateShareText();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Results copied to clipboard!");
    }
  };

  const handleCalcMouseMove = (e: React.MouseEvent) => {
    if (!calculatorRef.current || typeof requestAnimationFrame === "undefined") return;
    const { clientX, clientY } = e;
    if (calcRafRef.current !== null) cancelAnimationFrame(calcRafRef.current);
    calcRafRef.current = requestAnimationFrame(() => {
      const rect = calculatorRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      setCalcGlow({
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
      });
    });
  };

  const stats = calcResult
    ? [
        {
          label: "System Size",
          value: calcResult.recommendedCapacityKw,
          decimals: 2,
          suffix: "kW",
          helper: "Sized for your roof & bill",
          icon: Gauge,
          accent: "from-[#dcfce7] to-[#f5fff9]",
          prefix: "",
        },
        {
          label: "No. of Panels",
          value: calcResult.panelCount,
          decimals: 0,
          suffix: "panels",
          helper: "TOP CON, 550-600W",
          icon: SunMedium,
          accent: "from-[#e0f2fe] to-[#f7fff9]",
          prefix: "",
        },
        {
          label: "Estimated Annual Generation",
          value: calcResult.annualGenerationKwh,
          decimals: 0,
          suffix: "kWh",
          helper: "Based on 4.5-5 sun hours/day",
          icon: Zap,
          accent: "from-[#fef9c3] to-[#fffaf0]",
          prefix: "",
        },
        {
          label: "Estimated Cost",
          value: calcResult.estimatedCost / 100000,
          decimals: 2,
          prefix: "Rs ",
          suffix: "L",
          helper: "Turnkey incl. installation",
          icon: Wallet2,
          accent: "from-[#f1f5f9] to-[#f7fff9]",
        },
        {
          label: "Savings",
          value: calcResult.annualSavings / 1000,
          decimals: 1,
          prefix: "Rs ",
          suffix: "k/yr",
          helper: "Versus current bill",
          icon: PiggyBank,
          accent: "from-[#e0f2fe] to-[#f7fff9]",
        },
        {
          label: "Net Present Value",
          value: calcResult.npv / 100000,
          decimals: 1,
          prefix: "Rs ",
          suffix: "L",
          helper: "25-year profit potential",
          icon: Calculator,
          accent: "from-[#fef3c7] to-[#fffbeb]",
        },
        {
          label: "Space Required",
          value: calcResult.requiredAreaSqFt,
          decimals: 0,
          suffix: "sq.ft",
          helper: "Shadow-free usable area",
          icon: Ruler,
          accent: "from-[#dcfce7] to-[#f7fff9]",
          prefix: "",
        },
      ]
    : [];

  return (
    <>
      <section id="solar-calculator" className="w-full max-w-7xl mx-auto px-4 py-6 sm:py-16 md:py-20 min-w-0">
        <div
          ref={calculatorRef}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0f2418] via-[#0c1e14] to-[#0f2f1e] text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] border border-white/10"
          style={{ opacity: 1, transform: "none" }}
          onMouseMove={handleCalcMouseMove}
        >
          <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#00a63e]/20 blur-3xl" aria-hidden="true" />
          <div className="absolute right-[-120px] bottom-[-80px] h-64 w-64 rounded-full bg-[#3b82f6]/15 blur-3xl" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isCalcHovering ? 1 : 0,
              background: `radial-gradient(180px circle at ${calcGlow.x}% ${calcGlow.y}%, rgba(255,255,255,0.14), transparent 55%)`,
            }}
            aria-hidden="true"
          />
          <div className="relative grid lg:grid-cols-[1.05fr_1fr] min-w-0">
            <div className="p-4 md:p-10 lg:p-12 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 w-fit px-2 sm:px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-sm font-semibold tracking-[0.12em] uppercase">
                <Calculator className="w-3 h-3 sm:w-4 sm:h-4" />
                Solar Calculator
              </span>
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-['Urbanist'] font-bold text-lg sm:text-3xl md:text-[34px] leading-tight text-white">
                  Curious? Calculate your home's solar potential
                </h2>
                <p className="font-['Poppins'] text-[12px] sm:text-lg text-white/80 max-w-xl">
                  Drop in a few details to preview system size, energy generation, and savings before a site survey.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-base text-white/90">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>We respond with a refined quote within one business day.</span>
              </div>
            </div>
            <form
              onSubmit={handleCalculatorSubmit}
              className="bg-white text-[#0a0a0a] rounded-[20px] sm:rounded-[24px] m-2 sm:m-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-['Poppins'] text-[11px] sm:text-base text-[#0a0a0a]">
                    Bi-Monthly Bill Amount (₹)
                  </label>
                  <div className="bg-[#f7fff9] border border-[#d7eadd] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_6px_20px_rgba(0,0,0,0.03)]">
                    <input
                      type="number"
                      className="w-full bg-transparent outline-none text-[12px] sm:text-[15px]"
                      placeholder="Enter bill amount (e.g., 2500)"
                      value={billAmount}
                      onChange={handleBillAmountChange}
                      onKeyDown={handleKeyDown}
                      min={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </div>
                  <span className="text-[10px] sm:text-[12px] text-[#4a5565]">
                    Enter the total amount on your latest TANGEDCO bill (bottom of the paper). Choose this OR estimated units below.
                  </span>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-['Poppins'] text-[11px] sm:text-base text-[#0a0a0a]">
                    OR Estimated Bi-Monthly Units (kWh)
                  </label>
                  <div className="bg-[#f7fff9] border border-[#d7eadd] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_6px_20px_rgba(0,0,0,0.03)]">
                    <input
                      type="number"
                      className="w-full bg-transparent outline-none text-[12px] sm:text-[15px]"
                      placeholder="Enter Billing Units (e.g., 400)"
                      value={estimatedUnits ?? ""}
                      onChange={handleEstimatedUnitsChange}
                      onKeyDown={handleKeyDown}
                      min={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </div>
                  <span className="text-[10px] sm:text-[12px] text-[#4a5565]">
                    If you know your bi-monthly electricity consumption in kWh. Choose this OR bill amount above.
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#ffd166] via-[#ffb347] to-[#ff6b00] text-white font-semibold text-[12px] sm:text-base px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.25)] hover:opacity-95 active:scale-95 transition"
                  >
                    Calculate
                  </button>
                </div>
                <p className="text-[10px] sm:text-[14px] text-[#4a5565] font-['Poppins']">
                  Instant preview—no OTP or payment needed.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {showResults && (
        <section id="solar-calculator-result" className="w-full max-w-7xl mx-auto px-4 py-4 sm:py-8 min-w-0">
          <div
            ref={resultRef}
            className="relative overflow-hidden rounded-[28px] border border-[#d7eadd] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="absolute -top-10 left-6 h-32 w-32 rounded-full bg-[#dcfce7] blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-[-80px] right-[-40px] h-48 w-48 rounded-full bg-[#e0f2fe] blur-3xl" aria-hidden="true" />
            <div className="relative p-4 sm:p-6 md:p-10 flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <p className="uppercase tracking-[0.18em] text-[10px] sm:text-xs font-semibold text-[#0a0a0a]/70">
                    Results preview
                  </p>
                  <h3 className="font-['Urbanist'] font-bold text-[16px] sm:text-[28px] md:text-[32px] text-[#0a0a0a] leading-tight">
                    Your instant solar estimate
                  </h3>
                  <p className="text-[11px] sm:text-base text-[#4a5565] max-w-2xl">
                    These numbers are calculated based on your inputs. Final proposal is validated after our on-site survey.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-[#f0fdf4] border border-[#d7eadd] text-[10px] sm:text-sm font-semibold text-[#0a0a0a]">
                    Results preview
                  </span>
                  <div className="relative">
                    <button
                      onClick={() => setShowShareOptions(!showShareOptions)}
                      disabled={!calcResult}
                      className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border text-[10px] sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                        calcResult
                          ? "bg-[#eef2ff] border-[#dcdafc] text-[#312e81] hover:bg-[#e0e7ff] cursor-pointer"
                          : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      Share result
                    </button>
                    {showShareOptions && calcResult && (
                      <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 min-w-[200px]">
                        <button
                          onClick={() => {
                            shareViaWhatsApp();
                            setShowShareOptions(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          WhatsApp
                        </button>
                        <button
                          onClick={() => {
                            shareViaFacebook();
                            setShowShareOptions(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                          Facebook
                        </button>
                        <button
                          onClick={() => {
                            shareViaTwitter();
                            setShowShareOptions(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                          Twitter
                        </button>
                        <button
                          onClick={() => {
                            copyToClipboard();
                            setShowShareOptions(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm"
                        >
                          <Copy className="w-4 h-4 text-gray-600" />
                          Copy Link
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {calcResult && stats.length > 0
                  ? stats.map((stat) => {
                      const Icon = stat.icon;
                      const staticValue =
                        typeof stat.value === "number"
                          ? stat.value.toLocaleString(undefined, {
                              maximumFractionDigits: stat.decimals ?? 0,
                            })
                          : String(stat.value);
                      return (
                        <div
                          key={stat.label}
                          className="group relative overflow-hidden rounded-[20px] border border-[#e2efe6] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-5 flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-80 transition-transform duration-300 group-hover:scale-105`}
                            aria-hidden="true"
                          />
                          <div className="relative flex items-start justify-between gap-3">
                            <p className="font-['Poppins'] text-[15px] text-[#0a0a0a] leading-tight">
                              {stat.label}
                            </p>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 border border-[#d7eadd] shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-[1px]">
                              <Icon className="w-5 h-5 text-[#0a0a0a] group-hover:text-[#0f2f1e]" />
                            </span>
                          </div>
                          <div className="relative flex items-baseline gap-1">
                            <span className="font-['Urbanist'] font-bold text-[30px] md:text-[32px] text-[#0a0a0a] leading-none">
                              {isResultVisible && !reduceMotion ? (
                                <CountUp
                                  key={`${stat.label}-${isResultVisible}`}
                                  end={typeof stat.value === "number" ? stat.value : parseFloat(String(stat.value))}
                                  duration={1.25}
                                  decimals={stat.decimals ?? 0}
                                  separator=","
                                  prefix={stat.prefix ?? ""}
                                />
                              ) : (
                                `${stat.prefix ?? ""}${staticValue}`
                              )}
                            </span>
                            {stat.suffix ? (
                              <span className="font-['Poppins'] text-[16px] text-[#4a5565] leading-none">
                                {stat.suffix}
                              </span>
                            ) : null}
                          </div>
                          {stat.helper ? (
                            <p className="relative font-['Poppins'] text-sm text-[#4a5565] leading-relaxed">
                              {stat.helper}
                            </p>
                          ) : null}
                        </div>
                      );
                    })
                  : hasAttemptedCalculation ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-12 px-6 text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <Calculator className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="font-['Urbanist'] font-bold text-[18px] sm:text-[20px] text-[#0a0a0a] mb-2">
                        Enter your details to see results
                      </h3>
                      <p className="text-sm text-[#6b7280] max-w-md">
                        Please enter either your monthly bill amount or estimated electricity consumption to calculate your solar system requirements.
                      </p>
                    </div>
                  ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-12 px-6 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Calculator className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="font-['Urbanist'] font-bold text-[18px] sm:text-[20px] text-[#0a0a0a] mb-2">
                        Ready to calculate
                      </h3>
                      <p className="text-sm text-[#6b7280] max-w-md">
                        Fill in your electricity bill amount or monthly units above, then click Calculate to see your personalized solar system estimate.
                      </p>
                    </div>
                  )}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-[#f0fdf4] to-[#f7fff9] border border-[#d7eadd] rounded-[20px]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h4 className="font-['Urbanist'] font-bold text-[18px] sm:text-[20px] text-[#0a0a0a]">
                      Ready to go solar?
                    </h4>
                    <p className="text-sm text-[#4a5565] max-w-lg">
                      Get a free, detailed consultation with our solar experts. We'll visit your home, assess your roof, and provide a customized proposal.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-gradient-to-r from-[#ffd166] via-[#ffb347] to-[#ff6b00] text-white font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.25)] hover:opacity-95 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
