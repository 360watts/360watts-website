import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { WebsiteHomepage } from "./screens/WebsiteHomepage";
import { ScrollToTop } from "./components/ScrollToTop";
import { preloadAllImages } from "./lib/imageRegistry";

const Solutions = lazy(() => import("./screens/Solutions").then((m) => ({ default: m.Solutions })));
const About = lazy(() => import("./screens/About").then((m) => ({ default: m.About })));
const Contact = lazy(() => import("./screens/Contact").then((m) => ({ default: m.Contact })));
const FAQ = lazy(() => import("./screens/FAQ").then((m) => ({ default: m.FAQ })));

// Defer non-LCP image preloading until after page is interactive to avoid competing with LCP.
if (typeof window !== "undefined") {
  const scheduleDeferredPreload = () => {
    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback(() => preloadAllImages(), { timeout: 3000 });
    } else {
      window.setTimeout(preloadAllImages, 2000);
    }
  };
  if (document.readyState === "complete") scheduleDeferredPreload();
  else window.addEventListener("load", scheduleDeferredPreload);
}

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#017c54] focus:rounded-lg focus:shadow-lg focus:font-semibold focus:font-['Poppins'] focus:text-sm focus:ring-2 focus:ring-[#00a63e] focus:outline-none"
    >
      Skip to main content
    </a>
  );
}

function RouteFallback() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f7fff9]">
      {/* Rising sun loader — CSS-only, no extra assets */}
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full animate-[spin_3s_linear_infinite]">
          <circle cx="32" cy="32" r="10" fill="#00a63e" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="32"
              y1="6"
              x2="32"
              y2="14"
              stroke="#00a63e"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${deg} 32 32)`}
              opacity={0.4 + (deg / 315) * 0.6}
            />
          ))}
        </svg>
      </div>
      <span className="text-sm font-medium text-[#017c54] font-['Urbanist',sans-serif] tracking-wide">
        Loading...
      </span>
    </div>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      {/* reducedMotion="user" makes all Framer Motion components respect the
          OS/browser "prefers-reduced-motion" setting reactively. When reduced
          motion is preferred, transforms are removed but opacity fades remain. */}
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <SkipLink />
          <ScrollToTop />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<WebsiteHomepage />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MotionConfig>
    </HelmetProvider>
  </StrictMode>,
);
