import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import { APP_IMAGES } from "../../lib/imageRegistry";

const Wrench = ({ 
  property1,
  vector,
  slidersHorizontalVector,
  className = "" 
}: { 
  property1?: string;
  vector?: string; 
  slidersHorizontalVector?: string;
  className?: string 
}) => {
  // Determine icon type: variant-3 uses wrench, variant-2/default use gear
  const isWrench = property1 === "variant-3" || slidersHorizontalVector;
  // Suppress unused variable warning - these are part of the Figma API
  void vector;
  
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {isWrench ? (
        // Wrench icon for variant-3
        <path 
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" 
          stroke="#0A0A0A" 
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      ) : (
        // Gear/Settings icon for variant-2 and default
        <>
          <path 
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" 
            stroke="#0A0A0A" 
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path 
            d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.4C8.38291 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74486 20.1656 6.23582 20.3766 5.705 20.3766C5.17418 20.3766 4.66514 20.1656 4.29 19.79C3.91445 19.4149 3.70343 18.9058 3.70343 18.375C3.70343 17.8442 3.91445 17.3351 4.29 16.96L4.35 16.9C4.82166 16.4178 4.95235 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 9C4.87235 8.38291 4.74166 7.66219 4.27 7.18L4.21 7.12C3.83445 6.74486 3.62343 6.23582 3.62343 5.705C3.62343 5.17418 3.83445 4.66514 4.21 4.29C4.58514 3.91445 5.09418 3.70343 5.625 3.70343C6.15582 3.70343 6.66486 3.91445 7.04 4.29L7.1 4.35C7.58219 4.82166 8.30291 4.95235 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87235 16.3378 4.74166 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58514 20.2966 5.09418 20.2966 5.625C20.2966 6.15582 20.0856 6.66486 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z" 
            stroke="#0A0A0A" 
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      )}
    </svg>
  );
};

export const Solutions = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"solar" | "smart-home" | "app">("solar");

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#f7fff9] min-h-screen text-[#0a0a0a]">
      <Navigation />
      {/* Hero */}
      <section className="relative w-full h-[600px] overflow-hidden bg-[#505050]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={APP_IMAGES.solutionsVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7fff9]/70" />
      </section>

      {/* Solution selector below video */}
      <section className="bg-[#f7fff9] px-6 py-10">
        <div className="max-w-4xl mx-auto flex justify-center gap-4 flex-wrap">
          {[
            { key: "solar", label: "Smart Solar", target: "solar" },
            { key: "smart-home", label: "Smart Home", target: "smart-home" },
            { key: "app", label: "App", target: "app" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key as typeof activeTab);
                scrollToId(tab.target);
              }}
              className={`px-6 py-3 rounded-[10px] font-['Urbanist'] font-bold text-[19px] transition-all border border-black/10 shadow-sm ${
                activeTab === tab.key
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white text-[#0a0a0a] hover:bg-black/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Smart solar solutions */}
      <section id="solar" className="bg-gradient-to-b from-[#f7fff9] via-[#f7fff9] to-white px-6 pt-14 pb-16 border-b border-black/5">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 text-[14px] font-['Poppins'] text-[#0a0a0a]">
            smart solar solutions
          </span>
          <p className="text-[18px] text-[#4a5565] font-['Poppins']">
            We design, install, and maintain high-performance solar systems tailored for your home
          </p>
        </div>
      </section>

      {/* Solar hero image with callouts */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto rounded-[24px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.12)] relative">
          <img
            src={APP_IMAGES.solutionsSolarHouse}
            alt="Solar house"
            className="w-full h-[520px] md:h-[1000px] object-cover object-bottom"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[10%] top-[2%] bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.4)] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 w-[280px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[rgba(157,221,180,0.47)] rounded flex items-center justify-center"><Wrench property1="variant-2" vector="vector-2.svg" /></div>
                <p className="font-['Urbanist'] font-bold text-[16px] text-[#0a0a0a]">End-to-end service</p>
              </div>  
              <p className="font-['Poppins'] text-[14px] text-[rgba(0,0,0,0.7)]">From design to installation to maintenance</p>
            </div>
            <div className="absolute right-[10%] top-[10%] bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.4)] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 w-[280px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[rgba(157,221,180,0.47)] rounded flex items-center justify-center"><Wrench property1="variant-3" slidersHorizontalVector="vector-3.svg" /></div>
                <p className="font-['Urbanist'] font-bold text-[16px] text-[#0a0a0a]">Remote performance monitoring</p>
              </div>
              <p className="font-['Poppins'] text-[14px] text-[rgba(0,0,0,0.7)]">Track your system 24/7</p>
            </div>
            <div className="absolute right-[10%] bottom-[40%] bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.4)] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 w-[280px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[rgba(157,221,180,0.47)] rounded flex items-center justify-center"><Wrench property1="variant-3" slidersHorizontalVector="vector-3.svg" /></div>
                <p className="font-['Urbanist'] font-bold text-[16px] text-[#0a0a0a]">Maintenance & warranty</p>
              </div>
              <p className="font-['Poppins'] text-[14px] text-[rgba(0,0,0,0.7)]">Guaranteed performance and support</p>
            </div>
            <div className="absolute left-[10%] bottom-[60%] bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.4)] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 w-[280px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[rgba(157,221,180,0.47)] rounded flex items-center justify-center"><Wrench property1="default" vector="vector-2.svg" /></div>
                <p className="font-['Urbanist'] font-bold text-[16px] text-[#0a0a0a]">Flexible models</p>
              </div>
              <p className="font-['Poppins'] text-[14px] text-[rgba(0,0,0,0.7)]">Subscription or purchase options</p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-6 flex justify-center">
          <Link
            to="/contact"
            className="bg-[rgba(0,0,0,0.75)] text-white font-['Urbanist'] font-bold text-[19px] px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            View Solar Plans
          </Link>
        </div>
      </section>

      {/* Journey */}
      <section className="px-6 pb-20 bg-gradient-to-b from-white via-[#f2fbff] to-[#e8f5ff]" aria-labelledby="journey-title">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 id="journey-title" className="text-[32px] md:text-[40px] font-['Urbanist'] font-bold tracking-[-1.4px] text-[#0a0a0a]">
            your journey to smarter solar
          </h2>
          <p className="text-[18px] text-[#4a5565] font-['Poppins']">
            From assessment to ongoing support, we’re with you every step of the way
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-5">
          {[
            { title: "Online Proposal", desc: "Upload your bills and location to get your solar proposal with 3D layout." },
            { title: "Site Assessment", desc: "Our team validates your design & finalizes proposal." },
            { title: "Professional Installation", desc: "Our team manages everything, from installation, commissioning & subsidy." },
            { title: "Smart Monitoring", desc: "Control solar generation, savings, and system health - all in one app and from anywhere." },
            { title: "Ongoing Support", desc: "With 360Care, stay worry-free. We cover all maintenance." },
          ].map((item, i) => (
            <div
              key={item.title}
              className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 px-4 py-5 flex flex-col items-center text-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fdc700] to-[#ff6900] flex items-center justify-center text-white font-bold text-xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-['Urbanist'] font-bold text-[16px] text-[#0a0a0a]">{item.title}</p>
              <p className="font-['Poppins'] text-[12px] text-[#4a5565] leading-[1.4]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Smart home solutions */}
      <section id="smart-home" className="px-6 py-16 bg-gradient-to-b from-[#f7fff9] via-[#eef8ff] to-white">
        <div className="max-w-6xl mx-auto text-center space-y-3 mb-10">
          <p className="text-[50px] font-['Urbanist'] text-[#0a0a0a]">Smart home solutions</p>
          <p className="text-[17px] font-['Poppins'] text-[#4a5565]">
            Our intelligent automation connects your home’s devices to your solar flow.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto rounded-[24px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.12)]">
          <img
            src={APP_IMAGES.solutionsSmartHomeScene}
            alt="Smart home"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[10%] top-[15%] bg-white/94 rounded-[12px] px-4 py-3 shadow border border-black/5 max-w-[210px]">
              <p className="font-['Urbanist'] font-bold text-[14px]">Device Scheduling</p>
              <p className="font-['Poppins'] text-[12px] text-[#3f3f3f] leading-tight">Automate based on your routine</p>
            </div>
            <div className="absolute right-[20%] top-[35%] bg-white/94 rounded-[12px] px-4 py-3 shadow border border-black/5 max-w-[230px] text-right">
              <p className="font-['Urbanist'] font-bold text-[14px]">Predictive Energy Routines</p>
              <p className="font-['Poppins'] text-[12px] text-[#3f3f3f] leading-tight">AI learns your patterns</p>
            </div>
            <div className="absolute left-[45%] top-[15%] bg-white/94 rounded-[12px] px-4 py-3 shadow border border-black/5 max-w-[220px]">
              <p className="font-['Urbanist'] font-bold text-[14px]">Seamless Integration</p>
              <p className="font-['Poppins'] text-[12px] text-[#3f3f3f] leading-tight">Works with existing smart devices</p>
            </div>
            <div className="absolute left-[28%] bottom-[56%] bg-white/94 rounded-[12px] px-4 py-3 shadow border border-black/5 max-w-[220px] text-center">
              <p className="font-['Urbanist'] font-bold text-[14px]">Cross Device Automation</p>
              <p className="font-['Poppins'] text-[12px] text-[#3f3f3f] leading-tight">All devices work together</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 flex justify-center">
          <Link
            to="/contact"
            className="bg-[#0a0a0a] text-white font-['Urbanist'] font-bold text-[17px] px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            Explore Smart Home
          </Link>
        </div>
      </section>

      {/* Smarter Living */}
      <section className="px-6 py-20 bg-gradient-to-b from-white via-[#f4faff] to-[#e4f0ff]" aria-labelledby="smarter-title">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 id="smarter-title" className="text-[40px] md:text-[54px] font-['Urbanist'] font-bold tracking-[-2px] text-[#0a0a0a] mb-4">
            Smarter Living, Simplified
          </h2>
          <p className="text-[18px] text-[#4a5565] font-['Poppins'] max-w-3xl mx-auto">
            Transform your home into an intelligent, energy-efficient haven
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {[
            { title: "Smart-Home Planning", desc: "We understand your lifestyle and automation needs — from high-load appliances upto full home." },
            { title: "Smart devices", desc: "We suggest a list of smart-devices for your automation. You can expand to new devices as you wish." },
            { title: "Device Integration", desc: "Our 360watts app effortlessly recognizes lighting, security, and smart appliances, keeping you connected from anywhere." },
            { title: "Automation Setup", desc: "The 360watts app guides you effortlessly in automation setup. Let AI suggest automations, or you can set up them manually." },
            { title: "Continuous Support", desc: "We keep our 360watts app updated to latest AI/ML developments. You can reach us for any technical support anytime." },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`bg-white rounded-[20px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] p-5 flex flex-col items-center text-center ${
                i === 3 ? 'lg:col-start-1' : i === 4 ? 'lg:col-span-0' : ''
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#51a2ff] to-[#615fff] flex items-center justify-center text-white font-bold shadow-[0_10px_15px_rgba(0,0,0,0.1)]">
                <span className="text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <p className="font-['Urbanist'] font-bold text-[16px] text-[#0a0a0a]">{item.title}</p>
                <p className="font-['Poppins'] text-[12px] text-[#4a5565] leading-[1.4] max-w-[203px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 360watts App */}
      <section id="app" className="px-6 py-16 bg-gradient-to-b from-[#e4f0ff] via-white to-[#f7fff9]">
        <div className="max-w-6xl mx-auto space-y-100">
          <div className="space-y-4 relative">
            <div className="hidden lg:block absolute -left-10 -top-8 rotate-[-12deg] drop-shadow-xl">
              <div className="bg-white rounded-[24px] shadow-[0_16px_36px_rgba(0,0,0,0.15)] overflow-hidden border border-black/5 w-[360px]">
                <img src={APP_IMAGES.solutionsAppPhoneSchedule} alt="App overview" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="flex flex-col items-end text-right ml-auto w-full space-y-4">
            <p className="text-[19px] text-[#0a0a0a]/60 font-['Poppins'] pl-4">Presenting</p>
            <h2 className="text-[54px] leading-[1] font-['Urbanist'] font-bold text-[#0a0a0a] tracking-[-2px] pl-4">360watts App</h2>
            <p className="text-[22px] text-[#0a0a0a]/70 font-['Poppins'] pl-4">Our Unified App Ecosystem</p>
            <p className="text-[18px] text-[#0a0a0a]/70 font-['Poppins'] max-w-3xl pl-4">
              The 360Watts app bridges solar and smart living. View real-time energy flows, control devices, and get actionable insights — all in one dashboard.
            </p>
            </div>
          </div>

          {/* Zig-zag feature list */}
          <div className="space-y-14 mt-20 md:mt-40">
            {[
              {
                img: APP_IMAGES.solutionsAppPhoneInsights,
                title: "Smart Scheduling",
                desc: "Automatically run high-load devices when solar power is abundant to maximize efficiency and reduce costs.",
              },
              {
                img: APP_IMAGES.solutionsAppPhoneModes,
                title: "Real-time Insights",
                desc: "Monitor your energy generation, consumption, and savings live, all in one intuitive dashboard.",
              },
              {
                img: APP_IMAGES.solutionsAppPhoneHero,
                title: "Maintenance and Care",
                desc: "Easily book service appointments and keep your solar and smart systems performing at their best.",
              },
              {
                img:  APP_IMAGES.solutionsAppPhoneMonitor,
                title: "Routines and Modes",
                desc: "Set your home to match your daily life. Lights, fans, and devices adjust automatically to your routine.",
              },
            ].map((item, idx) => (
              <div key={item.title} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''} mt-34 md:mt-32 pl-4`}>
                  <div className="bg-white rounded-[24px] shadow-[0_16px_36px_rgba(0,0,0,0.15)] overflow-hidden border border-black/5 w-[200px] sm:w-[200px] md:w-[250px] mx-auto">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-[30px] font-['Urbanist'] font-bold text-[#0a0a0a] mb-2 pl-4">{item.title}</h3>
                  <p className="text-[18px] font-['Poppins'] text-[#4a5565] max-w-xl pl-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] font-['Urbanist'] mb-6">
            Want to explore the future?
          </h2>
          <p className="text-xl text-[#4a5565] mb-12 max-w-2xl mx-auto font-['Poppins']">
            Let's discuss how our solutions can transform your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Chat with us
            </Link>
            <button
              onClick={() => window.location.href = `tel:+1234567890`}
              className="border-2 border-[#0a0a0a] text-[#0a0a0a] font-bold px-8 py-4 rounded-[10px] hover:bg-black/5 transition-colors"
            >
              Call us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-16 px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold font-['Urbanist'] mb-4">360Watts</h3>
              <p className="text-white/60 font-['Poppins']">Making energy smarter for everyone</p>
            </div>

            {/* Links */}
            {[
              { title: "Product", links: ["Solar", "Smart Home", "App"] },
              { title: "Company", links: ["About", "Contact", "FAQ"] },
              { title: "Follow", links: ["X / Twitter", "LinkedIn", "Instagram"] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold font-['Urbanist'] mb-4">{col.title}</h4>
                <div className="space-y-2">
                  {col.links.map((link, j) => (
                    <p key={j} className="text-white/60 hover:text-white transition-colors font-['Poppins'] text-sm cursor-pointer">
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/40 font-['Poppins'] text-sm">
            <p>&copy; 2024 360Watts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};