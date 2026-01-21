import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_IMAGES } from "../../../lib/imageRegistry";

const heroSlides = [
  {
    bg: APP_IMAGES.solarPowerStation,
    title: "Smarter Energy.\nSmarter Living",
    subtitle: "360watts unites solar power and smart home automation, helping you save more, live cleaner, and control everything effortlessly."
  },
  {
    bg: APP_IMAGES.technicianSolarPanels,
    title: "Power Your Home.\nSave the Planet.",
    subtitle: "Harness the sun's energy with our cutting-edge solar solutions. Reduce bills and your carbon footprint simultaneously."
  },
];

interface HeroSectionProps {
  reduceMotion: boolean;
  isPageVisible: boolean;
}

export const HeroSection = ({ reduceMotion, isPageVisible }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    if (reduceMotion || !isPageVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // Increased from 5000ms (5s) to 8000ms (8s)
    return () => clearInterval(timer);
  }, [isPageVisible, reduceMotion]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Touch handlers for swipe - improved for mobile UX
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 75; // Increased for better mobile UX
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <motion.section
      id="hero-section"
      className="relative h-[60vh] sm:h-screen overflow-hidden scroll-mt-20"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.bg}
            alt={slide.title.replace('\n', ' ')}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      ))}

      {/* Gradient Overlay - matching Figma */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(30,30,30,0.4)] to-[rgba(30,30,30,0.8)]" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute pointer-events-none"
              }`}
            >
              {index === currentSlide && (
                  <motion.div
                    initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="max-w-4xl px-4 sm:px-0"
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[99px] font-bold text-[rgba(247,255,249,0.95)] font-['Urbanist'] mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight sm:tracking-[-2px] md:tracking-[-3px] lg:tracking-[-3.96px] whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[23px] text-white/90 font-['Poppins'] max-w-2xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  <motion.div
                    whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="inline-flex"
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00a63e] to-[#007a55] text-white font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm sm:text-base"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

        {/* Navigation Arrows - Hidden on mobile, shown on larger screens */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/30 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-white/40 active:scale-95 transition-all shadow-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Go to previous slide"
        type="button"
      >
        <ChevronLeft className="w-6 h-6" aria-hidden="true" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/30 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-white/40 active:scale-95 transition-all shadow-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Go to next slide"
        type="button"
      >
        <ChevronRight className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20" role="tablist" aria-label="Hero carousel navigation">
        {heroSlides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] rounded-full transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}: ${slide.title.replace('\n', ' ')}`}
            aria-selected={index === currentSlide}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </motion.section>
  );
};