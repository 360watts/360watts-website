import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { APP_IMAGES } from "../../../lib/imageRegistry";

const processSteps = {
  solar: [
    {
      number: "1",
      title: "Solar System Design",
      description: "Our experts analyze your roof, energy needs, and location to create a custom solar solution optimized for maximum efficiency."
    },
    {
      number: "2",
      title: "Installation",
      description: "Professional installation by certified technicians. We handle everything from permits to grid connection."
    },
    {
      number: "3",
      title: "Maintenance",
      description: "Regular monitoring and maintenance ensure peak performance. Our smart monitoring alerts you to any issues before they become problems."
    },
  ],
  smartHome: [
    {
      number: "1",
      title: "Set up Smart Devices",
      description: "Install smart switches, sensors, and appliances. Our technicians ensure everything is properly connected and configured."
    },
    {
      number: "2",
      title: "Link it to the app",
      description: "Connect all devices to the 360watts app. Simple setup with QR codes and automatic device detection."
    },
    {
      number: "3",
      title: "Create Automations",
      description: "Set up intelligent routines that maximize solar usage, reduce waste, and adapt to your lifestyle automatically."
    },
  ],
};

interface HowItWorksSectionProps {
  reduceMotion: boolean;
}

export const HowItWorksSection = ({ reduceMotion }: HowItWorksSectionProps) => {
  const [activeCard, setActiveCard] = useState<'solar' | 'smartHome' | null>(null);

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

  const staggerMotionProps = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.1 },
        variants: { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } },
      };

  return (
    <motion.section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-transparent relative overflow-hidden"
      {...sectionMotionProps}
      aria-labelledby="how-it-works-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00a63e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6] rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-[#dcfce7] to-[#ddefff] rounded-full mb-4 sm:mb-6">
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#0a0a0a] font-['Urbanist']">Simple & Effective</span>
          </div>
          <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#0a0a0a] font-['Urbanist'] tracking-tight sm:tracking-[-1px] md:tracking-[-1.5px] mb-4 lg:mb-6">How Does It Work?</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[20px] text-[#4a5565] font-['Poppins'] max-w-2xl mx-auto">Simple steps to transform your home into a Smart Home, sustainable powerhouse</p>
        </header>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12"
          {...staggerMotionProps}
        >
          {/* Solar Steps */}
            <motion.div
              className={`bg-white/80 backdrop-blur-sm rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,166,62,0.15)] hover:-translate-y-2 cursor-pointer touch-manipulation ${
                activeCard === 'solar' ? 'border-[#00a63e] shadow-[0_20px_60px_rgba(0,166,62,0.2)]' : 'border-transparent'
              }`}
              onMouseEnter={() => setActiveCard('solar')}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] rounded-xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <img src={APP_IMAGES.sun21} alt="Solar icon" className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] object-contain" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[32px] font-bold text-[#0a0a0a] font-['Urbanist'] tracking-tight">Solar</h3>
                <p className="text-sm sm:text-base lg:text-lg xl:text-[14px] text-[#4a5565] font-['Poppins'] leading-relaxed opacity-95">Clean energy generation</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-gradient-to-r from-[#dcfce7] to-[#bbf7d0] rounded-full mb-8 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00a63e] to-[#007a55] w-full transform origin-left transition-transform duration-1000 ease-out" />
            </div>

            <ol className="space-y-4 list-none" role="list" aria-label="Solar installation process steps">
              {processSteps.solar.map((step, index) => (
                <li
                  key={index}
                  className="group relative bg-gradient-to-r from-white to-[#f7fff9] rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 border-2 border-transparent hover:border-[#dcfce7] hover:shadow-md transition-all duration-300"
                  role="listitem"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px] xl:w-[50px] xl:h-[50px] rounded-full flex items-center justify-center text-[16px] sm:text-[17px] lg:text-[19px] xl:text-[20px] font-bold font-['Urbanist'] flex-shrink-0 bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] text-[#0a0a0a] group-hover:scale-110 transition-all duration-300" aria-hidden="true">
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[16px] sm:text-[17px] lg:text-[19px] xl:text-[22px] text-[#0a0a0a] font-bold font-['Urbanist'] tracking-[-0.5px] leading-tight">
                        {step.title}
                      </h4>
                      <div className="mt-2 sm:mt-3">
                        <p className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] text-[#4a5565] font-['Poppins'] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Smart Home Steps */}
            <motion.div
              className={`bg-white/80 backdrop-blur-sm rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] hover:-translate-y-2 cursor-pointer touch-manipulation ${
                activeCard === 'smartHome' ? 'border-[#3b82f6] shadow-[0_20px_60px_rgba(59,130,246,0.2)]' : 'border-transparent'
              }`}
              onMouseEnter={() => setActiveCard('smartHome')}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] bg-gradient-to-br from-[#ddefff] to-[#bfdbfe] rounded-xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <img src={APP_IMAGES.smartHouse1} alt="Smart home icon" className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] object-contain" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[32px] font-bold text-[#0a0a0a] font-['Urbanist'] tracking-tight">Smart Home</h3>
                <p className="text-sm sm:text-base lg:text-lg xl:text-[14px] text-[#4a5565] font-['Poppins'] leading-relaxed">Intelligent automation</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-gradient-to-r from-[#ddefff] to-[#bfdbfe] rounded-full mb-8 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] w-full transform origin-left transition-transform duration-1000 ease-out" />
            </div>

            <ol className="space-y-4 list-none" role="list" aria-label="Smart home installation process steps">
              {processSteps.smartHome.map((step, index) => (
                <li
                  key={index}
                  className="group relative bg-gradient-to-r from-white to-[#f7fff9] rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 border-2 border-transparent hover:border-[#ddefff] hover:shadow-md transition-all duration-300"
                  role="listitem"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px] xl:w-[50px] xl:h-[50px] rounded-full flex items-center justify-center text-[16px] sm:text-[17px] lg:text-[19px] xl:text-[20px] font-bold font-['Urbanist'] flex-shrink-0 bg-gradient-to-br from-[#ddefff] to-[#bfdbfe] text-[#0a0a0a] group-hover:scale-110 transition-all duration-300" aria-hidden="true">
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[16px] sm:text-[17px] lg:text-[19px] xl:text-[22px] text-[#0a0a0a] font-bold font-['Urbanist'] tracking-[-0.5px] leading-tight">
                        {step.title}
                      </h4>
                      <div className="mt-2 sm:mt-3">
                        <p className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] text-[#4a5565] font-['Poppins'] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </motion.div>

        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <a
            href="#solutions-section"
            className="inline-flex items-center gap-2 px-6 py-4 border border-[rgba(74,85,101,0.75)] rounded-[10px] text-[#4a5565] hover:bg-gray-50 transition-colors text-[19px] tracking-[-0.76px]"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("solutions-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Full Process
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};