import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import { APP_IMAGES } from "../../lib/imageRegistry";

type FaqItem = {
  id: string;
  question: string;
  answer?: string;
};

type FaqSection = {
  id: string;
  title: string;
  items: FaqItem[];
};

const faqSections: FaqSection[] = [
  {
    id: "general",
    title: "General",
    items: [
      { id: "install-time", question: "How long does installation take?" },
      {
        id: "warranty",
        question: "What warranty do you provide?",
        answer:
          "Typical solar installation takes 1-3 days depending on system size. Smart home setup can be completed in 4-6 hours. Our team coordinates everything to minimize disruption.",
      },
      { id: "service-areas", question: "Which areas do you service?", answer: "Placeholder answer here." },
      { id: "upgrade", question: "Can I upgrade my system later?", answer: "Placeholder answer here." },
    ],
  },
  {
    id: "solar",
    title: "Solar",
    items: [
      { id: "net-metering", question: "How does net metering work?", answer: "Placeholder answer here." },
      { id: "financing", question: "What financing options are available?", answer: "Placeholder answer here." },
      { id: "output", question: "What output can I expect from my solar system?", answer: "Placeholder answer here." },
      { id: "monsoon", question: "What happens during monsoon or cloudy weather?", answer: "Placeholder answer here." },
    ],
  },
  {
    id: "smart-home",
    title: "Smart Home",
    items: [
      { id: "compatibility", question: "Which devices are compatible?", answer: "Placeholder answer here." },
      { id: "data-protection", question: "How's my data protected?", answer: "Placeholder answer here." },
      { id: "remote", question: "Can I control devices remotely?", answer: "Placeholder answer here." },
      { id: "hub", question: "Do I need a hub for smart home integration?", answer: "Placeholder answer here." },
    ],
  },
  {
    id: "app",
    title: "App",
    items: [
      { id: "connectivity", question: "What if I lose internet connectivity?", answer: "Placeholder answer here." },
      { id: "updates", question: "How often is the app updated?", answer: "Placeholder answer here." },
      { id: "tiers", question: "Are there subscription tiers?", answer: "Placeholder answer here." },
      { id: "family", question: "Can multiple family members access the app?", answer: "Placeholder answer here." },
    ],
  },
];

export const FAQ = (): JSX.Element => {
  // Start with all items open so placeholders are visible; users can collapse as needed.
  const allItemIds = faqSections.flatMap((section) =>
    section.items.map((item) => `${section.id}-${item.id}`)
  );
  const [openIds, setOpenIds] = useState<string[]>(allItemIds);

  const toggleItem = (sectionId: string, itemId: string) => {
    const compositeId = `${sectionId}-${itemId}`;
    setOpenIds((current) =>
      current.includes(compositeId)
        ? current.filter((id) => id !== compositeId)
        : [...current, compositeId]
    );
  };

  return (
    <div className="bg-[#f7fff9] min-h-screen text-[#0a0a0a]">
      <Navigation />

      {/* Top gradient header */}
      <div className="relative isolate">
        <div className="absolute inset-x-0 top-0 h-[340px] md:h-[380px] bg-gradient-to-r from-[rgba(0,166,62,0.09)] to-[rgba(0,122,85,0.09)] rounded-b-[80px]" />
        <header className="relative h-[340px] md:h-[380px] flex items-center justify-center px-6">
          <div className="max-w-[960px] mx-auto text-center space-y-2">
            <h1 className="text-[32px] md:text-[36px] font-bold tracking-[-0.04em] font-['Urbanist']">
              Frequently Asked Questions
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#4a5565] font-['Poppins'] leading-snug">
              Find answers to common questions about 360Watts solar and smart home solutions
            </p>
          </div>
        </header>
      </div>

      {/* Sections */}
      <main className="px-6 pb-20 mt-10 md:mt-14">
        <div className="max-w-[1020px] mx-auto space-y-14">
          {faqSections.map((section) => (
            <div key={section.id} className="space-y-5">
              <h2 className="text-[24px] md:text-[26px] font-bold font-['Urbanist'] tracking-[-0.02em]">
                {section.title}
              </h2>

              <div className="space-y-2.5">
                {section.items.map((item) => {
                  const compositeId = `${section.id}-${item.id}`;
                  const isOpen = openIds.includes(compositeId);
                  const hasAnswer = Boolean(item.answer);

                  return (
                    <div
                      key={item.id}
                      className="border-b border-[rgba(0,0,0,0.6)] pb-2"
                    >
                      <button
                        onClick={() => hasAnswer && toggleItem(section.id, item.id)}
                        className="w-full flex items-center justify-between text-left gap-4 pt-1"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[16px] md:text-[17px] font-['Poppins'] tracking-[-0.02em] leading-tight">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#0a0a0a] transition-transform ${
                            isOpen ? "-rotate-90" : "rotate-90"
                          } ${hasAnswer ? "opacity-100" : "opacity-60"}`}
                        />
                      </button>

                      {hasAnswer ? (
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-[14.5px] text-[#4a5565] font-['Poppins'] leading-relaxed mt-2 pr-8">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="py-12 px-6">
        <div className="max-w-[724px] mx-auto text-center space-y-3">
          <h3 className="text-[22px] md:text-[24px] font-bold font-['Urbanist']">Still have questions?</h3>
          <p className="text-[16px] md:text-[17px] text-[#4a5565] font-['Poppins']">
            Our team is here to help. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#00a63e] to-[#007a55] text-white px-6 py-3 text-[16px] font-['Poppins'] shadow-[0_4px_12px_rgba(0,166,62,0.25)] hover:opacity-90 transition min-w-[220px]"
            >
              Chat with Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(0,0,0,0.5)] px-6 py-3 text-[16px] font-['Poppins'] text-[#0a0a0a] hover:bg-black/5 transition min-w-[220px]"
            >
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer band */}
      <footer className="px-6 pb-10">
        <div className="max-w-[1299px] mx-auto bg-[linear-gradient(101deg,rgba(0,166,62,0.09)_2%,rgba(0,64,24,0.09)_100%)] rounded-t-[30px] pt-7 pb-5 px-6 md:px-10 shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-[90px]">
            <div className="flex items-center gap-3">
              <div className="w-24 h-16 relative">
                <img src={APP_IMAGES.finalLogo} alt="360watts" className="absolute inset-0 w-full h-full object-contain" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-[16px] font-bold font-['Urbanist'] leading-tight">360watts</p>
                <p className="text-[11px] text-[#4a5565] font-['Figtree']">Drive what’s next.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-10 md:gap-[90px]">
              <div className="space-y-2 text-left">
                <p className="text-[16px] font-bold font-['Urbanist']">contact us</p>
                <a href="mailto:hello@360watts.com" className="text-[13px] text-[#4a5565] font-['Arial'] underline decoration-solid">hello@360watts.com</a>
                <p className="text-[13px] text-[#4a5565] font-['Arial']">+91-XXXX-XXX-XXX</p>
              </div>

              <div className="space-y-3 text-left">
                <p className="text-[16px] font-bold font-['Urbanist']">follow us</p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1e2939] flex items-center justify-center hover:bg-[#017c54] transition"
                    aria-label="Visit us on X"
                  >
                    <img src={APP_IMAGES.aboutSocialX} alt="X" className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1e2939] flex items-center justify-center hover:bg-[#017c54] transition"
                    aria-label="Visit us on LinkedIn"
                  >
                    <img src={APP_IMAGES.aboutSocialIn} alt="LinkedIn" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-[12px] text-[#0a0a0a] font-['Poppins']">© 2025 360WATTS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
