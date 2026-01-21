import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { APP_IMAGES } from "../../../lib/imageRegistry";

interface UnifiedSolutionSectionProps {
  reduceMotion: boolean;
}

export const UnifiedSolutionSection = ({ reduceMotion }: UnifiedSolutionSectionProps) => {
  const sectionMotionProps = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.1 },
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        },
      };

  return (
    <motion.section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-transparent"
      {...sectionMotionProps}
    >
        <div className="w-full max-w-7xl mx-auto">
          <header className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-3 sm:mb-4 tracking-tight sm:tracking-[-1px] md:tracking-[-1.6px]">Our Unified Solution</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[27px] text-[#4a5565] font-['Poppins'] tracking-tight sm:tracking-[-0.5px] md:tracking-[-1.08px]">Two products. One platform for all your energy needs.</p>
          </header>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[113px] justify-center items-stretch mb-8">
          {/* Solar Solutions Card */}
          <motion.div
            className="relative rounded-[20px] overflow-hidden w-full lg:flex-1 xl:w-[567px] h-[280px] sm:h-[300px] lg:h-[320px] xl:h-[342px] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.01] cursor-pointer"
            whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => document.getElementById("solutions-section")?.scrollIntoView({ behavior: "smooth" })}
            role="button"
            tabIndex={0}
            aria-label="Learn more about Solar Solutions"
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.getElementById("solutions-section")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <img
              src="/solar-panels-house-roof.jpg"
              alt="Solar Solutions - Clean energy generation system installed on residential roof"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(204,204,204,0.3)] to-transparent rounded-[20px]" />
            <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-[30px] flex flex-col justify-start text-left">
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[19px] pt-3 sm:pt-4 md:pt-6 lg:pt-[24px]">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
                    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full" aria-hidden="true" role="img" aria-label="Solar icon">
                      <circle cx="28" cy="28" r="12" fill="#FFA500"/>
                      <path d="M28 8V2M28 54V48M48 28H54M2 28H8M43 13L47 9M9 47L13 43M43 43L47 47M9 9L13 13" stroke="#FFA500" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </div>
                <div className="flex flex-col gap-2 sm:gap-3 mt-6 sm:mt-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[30px] font-bold text-black font-['Urbanist'] leading-tight drop-shadow-lg">Solar Solutions</h3>
                  <p className="text-black text-sm sm:text-base lg:text-lg xl:text-[14px] font-['Poppins'] leading-relaxed opacity-95 drop-shadow-md">Total control. Zero worries.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Plus Icon */}
          <div className="hidden md:flex items-center justify-center w-8 md:w-12 h-8 md:h-12 text-[#4a5565] text-3xl md:text-5xl font-light mt-20 md:mt-24">+</div>

          {/* Smart Home Solutions Card */}
          <motion.div
            className="relative rounded-[20px] overflow-hidden w-full lg:flex-1 xl:w-[567px] h-[280px] sm:h-[300px] lg:h-[320px] xl:h-[342px] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.01] cursor-pointer"
            whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => document.getElementById("solutions-section")?.scrollIntoView({ behavior: "smooth" })}
            role="button"
            tabIndex={0}
            aria-label="Learn more about Smart Home Solutions"
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.getElementById("solutions-section")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <img
              src={APP_IMAGES.digitalTablet}
              alt="Smart Home Solutions - Digital tablet interface showing home automation controls"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(204,204,204,0.75)] to-transparent rounded-[20px]" />
            <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-[30px] flex flex-col justify-start text-left">
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[19px] pt-3 sm:pt-4 md:pt-6 lg:pt-[24px]">
                <img src={APP_IMAGES.iconSmartHome} alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" aria-hidden="true" />
                <div className="flex flex-col gap-2 sm:gap-3 mt-6 sm:mt-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[28px] font-bold text-black font-['Urbanist'] leading-tight drop-shadow-lg">Smart Home Solutions</h3>
                  <p className="text-black text-sm sm:text-base lg:text-lg xl:text-[13px] font-['Poppins'] leading-relaxed drop-shadow-md">The future of living, powered by intelligence.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <a
            href="#solutions-section"
            className="inline-flex items-center gap-2 px-6 py-4 border border-[rgba(74,85,101,0.75)] rounded-[10px] text-[#4a5565] hover:bg-gray-50 transition-colors text-[19px] tracking-[-0.76px]"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("solutions-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Learn more about our solar and smart home solutions"
          >
            Learn More About Our Solutions
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};