import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { APP_IMAGES } from "../../../lib/imageRegistry";

const appFeatures = [
  { icon: APP_IMAGES.appIcon1, title: "Real-time solar analytics", description: "Monitor your energy production" },
  { icon: APP_IMAGES.appIcon2, title: "Smart device control", description: "Manage all your devices" },
  { icon: APP_IMAGES.appIcon3, title: "Energy health insights", description: "Track system performance" },
  { icon: APP_IMAGES.appIcon4, title: "Bill tracking", description: "Monitor your savings" },
];

interface AppSectionProps {
  reduceMotion: boolean;
  isPageVisible: boolean;
}

export const AppSection = ({ reduceMotion, isPageVisible }: AppSectionProps) => {
  const [currentAppSlide, setCurrentAppSlide] = useState(0);

  // Auto-slide app showcase
  useEffect(() => {
    if (reduceMotion || !isPageVisible) return;
    const timer = setInterval(() => {
      setCurrentAppSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPageVisible, reduceMotion]);

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
      className="py-20 px-4 sm:px-6 bg-gradient-to-r from-[#00a63e]/80 to-[#017c54]/80"
      {...sectionMotionProps}
      aria-labelledby="app-section-heading"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 id="app-section-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold font-['Urbanist'] mb-6 sm:mb-8 tracking-tight">One App. For Everything.</h2>
            <ul className="space-y-6 list-none" role="list" aria-label="360watts app features">
              {appFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={reduceMotion ? undefined : { opacity: 0, x: -20 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  role="listitem"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src={feature.icon} alt="" className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-black text-xl font-['Poppins']">{feature.title}</h3>
                    <p className="text-white font-['Poppins']">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center order-first lg:order-last">
            {/* Phone Showcase - Desktop */}
            <div className="relative w-[500px] h-[600px] hidden lg:block">
              {/* App screens with sliding animation */}
              <div className={`absolute transition-all duration-[3000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                currentAppSlide === 0 ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-full'
              }`}>
                <div className="absolute h-[437px] left-[5px] rounded-[30px] top-[83px] w-[218px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                    <img alt="App screen showing solar analytics" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image7} />
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.3)] border-solid h-[443px] left-[275px] rounded-[20px] top-[83px] w-[216px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                    <img alt="App screen showing device control" loading="lazy" decoding="async" className="absolute h-[101.64%] left-0 max-w-none top-0 w-full" src={APP_IMAGES.image8} />
                  </div>
                </div>
                <div className="absolute h-[486px] left-[55px] rounded-[30px] shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                  <img alt="Main app interface" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image5} />
                </div>
                <div className="absolute h-[486px] left-[200px] rounded-[30px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                  <img alt="App screen showing smart home controls" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image6} />
                </div>
                <div className="absolute h-[500px] left-[125px] rounded-[30px] top-[26px] w-[245px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                    <img alt="360watts app dashboard" loading="lazy" decoding="async" className="absolute h-[102.02%] left-[-0.09%] max-w-none top-0 w-[100.19%]" src={APP_IMAGES.image4} />
                  </div>
                </div>
              </div>

              <div className={`absolute transition-all duration-[3000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                currentAppSlide === 1 ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-full'
              }`}>
                <div className="absolute h-[437px] left-[5px] rounded-[30px] top-[83px] w-[218px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                    <img alt="App screen showing device management" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image8} />
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.3)] border-solid h-[443px] left-[275px] rounded-[20px] top-[83px] w-[216px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                    <img alt="App screen showing energy insights" loading="lazy" decoding="async" className="absolute h-[101.64%] left-0 max-w-none top-0 w-full" src={APP_IMAGES.image5} />
                  </div>
                </div>
                <div className="absolute h-[486px] left-[55px] rounded-[30px] shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                  <img alt="Smart home automation interface" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image6} />
                </div>
                <div className="absolute h-[486px] left-[200px] rounded-[30px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                  <img alt="App screen showing bill tracking" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image4} />
                </div>
                <div className="absolute h-[500px] left-[125px] rounded-[30px] top-[26px] w-[245px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                    <img alt="360watts app main dashboard" loading="lazy" decoding="async" className="absolute h-[102.02%] left-[-0.09%] max-w-none top-0 w-[100.19%]" src={APP_IMAGES.image7} />
                  </div>
                </div>
              </div>

              <div className={`absolute transition-all duration-[3000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                currentAppSlide === 2 ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-full'
              }`}>
                <div className="absolute h-[437px] left-[5px] rounded-[30px] top-[83px] w-[218px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                    <img alt="App screen showing performance metrics" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image5} />
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.3)] border-solid h-[443px] left-[275px] rounded-[20px] top-[83px] w-[216px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                    <img alt="App screen showing system health" loading="lazy" decoding="async" className="absolute h-[101.64%] left-0 max-w-none top-0 w-full" src={APP_IMAGES.image6} />
                  </div>
                </div>
                <div className="absolute h-[486px] left-[55px] rounded-[30px] shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                  <img alt="Smart device control interface" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image4} />
                </div>
                <div className="absolute h-[486px] left-[200px] rounded-[30px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                  <img alt="App screen showing automation settings" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image7} />
                </div>
                <div className="absolute h-[500px] left-[125px] rounded-[30px] top-[26px] w-[245px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                    <img alt="360watts app overview" loading="lazy" decoding="async" className="absolute h-[102.02%] left-[-0.09%] max-w-none top-0 w-[100.19%]" src={APP_IMAGES.image8} />
                  </div>
                </div>
              </div>

              <div className={`absolute transition-all duration-[3000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                currentAppSlide === 3 ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-full'
              }`}>
                <div className="absolute h-[437px] left-[5px] rounded-[30px] top-[83px] w-[218px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                    <img alt="App screen showing maintenance alerts" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image4} />
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.3)] border-solid h-[443px] left-[275px] rounded-[20px] top-[83px] w-[216px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                    <img alt="App screen showing savings report" loading="lazy" decoding="async" className="absolute h-[101.64%] left-0 max-w-none top-0 w-full" src={APP_IMAGES.image7} />
                  </div>
                </div>
                <div className="absolute h-[486px] left-[55px] rounded-[30px] shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                  <img alt="System monitoring interface" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image8} />
                </div>
                <div className="absolute h-[486px] left-[200px] rounded-[30px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                  <img alt="App screen showing device status" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image5} />
                </div>
                <div className="absolute h-[500px] left-[125px] rounded-[30px] top-[26px] w-[245px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                    <img alt="360watts app home screen" loading="lazy" decoding="async" className="absolute h-[102.02%] left-[-0.09%] max-w-none top-0 w-[100.19%]" src={APP_IMAGES.image6} />
                  </div>
                </div>
              </div>

              {/* Phone frame - always visible */}
              <div className="absolute h-[535px] left-[108px] top-[3px] w-[283px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Mobile phone frame" loading="lazy" decoding="async" className="absolute h-[113.24%] left-[-59.94%] max-w-none top-[-4.9%] w-[218.98%]" src={APP_IMAGES.phone1401} />
                </div>
              </div>
            </div>

            {/* Phone Showcase - Mobile - Simpler flex layout */}
            <div className="flex items-center justify-center lg:hidden py-4 scale-90 sm:scale-100">
              <img
                src="/image-5.png"
                alt="360watts app interface showing smart home controls"
                className="w-20 sm:w-24 md:w-28 h-auto opacity-70 rounded-xl shadow-lg translate-x-3 translate-y-2"
                loading="eager"
              />
              <img
                src="/image-4.png"
                alt="360watts app dashboard displaying energy analytics"
                className="w-36 sm:w-44 md:w-52 h-auto drop-shadow-2xl relative z-10 rounded-2xl"
                loading="eager"
              />
              <img
                src="/image-6.png"
                alt="360watts app screen showing device management"
                className="w-16 sm:w-20 h-auto opacity-70 rounded-xl shadow-lg -translate-x-3 translate-y-2"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};