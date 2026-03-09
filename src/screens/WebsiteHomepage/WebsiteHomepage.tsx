import { useEffect, lazy, Suspense } from "react";
import { Navigation } from "../../components/Navigation";
import { SeoHead } from "../../components/SeoHead";
import { HeroSection } from "./sections/HeroSection";
import { UnifiedSolutionSection } from "./sections/UnifiedSolutionSection";
import { Why360wattsSection } from "./sections/Why360wattsSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { AppShowcaseSection } from "./sections/AppShowcaseSection";
import { staggerMotionProps } from "./lib/motion";

const SolarCalculatorSection = lazy(() =>
  import("./sections/SolarCalculatorSection").then((m) => ({ default: m.SolarCalculatorSection }))
);
const SolutionsSection = lazy(() =>
  import("./sections/SolutionsSection").then((m) => ({ default: m.SolutionsSection }))
);
const AboutSection = lazy(() =>
  import("./sections/AboutSection").then((m) => ({ default: m.AboutSection }))
);
const FAQSection = lazy(() =>
  import("./sections/FAQSection").then((m) => ({ default: m.FAQSection }))
);
const ContactSection = lazy(() =>
  import("./sections/ContactSection").then((m) => ({ default: m.ContactSection }))
);
const FooterSection = lazy(() =>
  import("./sections/FooterSection").then((m) => ({ default: m.FooterSection }))
);

export const WebsiteHomepage = (): JSX.Element => {
  // Scroll to contact section if hash is present
  useEffect(() => {
    if (window.location.hash === "#contact-section") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <div id="main-content" className="bg-gradient-to-b from-[#f7fff9] via-white to-[#f7fff9] min-h-screen font-['Poppins',sans-serif] overflow-x-hidden w-full min-w-0">
      <SeoHead
        title="360watts - Smart Solar & Home Automation Solutions | Coimbatore"
        description="360watts provides cutting-edge solar power solutions and smart home automation in Coimbatore, Tamil Nadu. Save energy, reduce bills, and live sustainably with our integrated platform."
        path=""
      />
      <Navigation transparent />

      <HeroSection />

      <div
        className="relative w-full min-w-0 overflow-x-hidden"
        style={{
          background:
            "radial-gradient(1200px 520px at 50% -18%, rgba(15,23,42,0.06), transparent 60%), radial-gradient(900px 520px at 110% 12%, rgba(59,130,246,0.10), transparent 66%), linear-gradient(180deg, #f7fff9 0%, #f6fdf8 36%, #eef9f3 72%, #e3f3ea 100%)",
        }}
      >
      <UnifiedSolutionSection />
      <Why360wattsSection />
      <HowItWorksSection />
          </div>
          
      <AppShowcaseSection />

      <Suspense fallback={null}>
        <SolarCalculatorSection />
      </Suspense>

      <Suspense fallback={null}>
        <SolutionsSection />
      </Suspense>

      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={null}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={null}>
        <FooterSection motionProps={staggerMotionProps} />
      </Suspense>
    </div>
  );
};
