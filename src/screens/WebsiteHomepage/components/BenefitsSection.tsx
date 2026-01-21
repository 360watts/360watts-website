import { motion } from "framer-motion";
import { APP_IMAGES } from "../../../lib/imageRegistry";

const benefitsData = [
  { icon: APP_IMAGES.iconSavings, title: "Save on bills", description: "Reduce your energy costs significantly" },
  { icon: APP_IMAGES.iconEnergy, title: "Energy self-dependence", description: "Generate your own clean power" },
  { icon: APP_IMAGES.iconEco, title: "Eco-friendly living", description: "Reduce your carbon footprint" },
  { icon: APP_IMAGES.iconAuto, title: "Intelligent automation", description: "Smart energy management" },
];

interface BenefitsSectionProps {
  reduceMotion: boolean;
}

export const BenefitsSection = ({ reduceMotion }: BenefitsSectionProps) => {
  const sectionMotionProps = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.1 },
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        },
      };

  const itemMotionProps = reduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        },
      };

  return (
    <motion.section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-transparent"
      {...sectionMotionProps}
      aria-labelledby="benefits-heading"
    >
      <div className="w-full max-w-7xl mx-auto">
        <header className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-3 sm:mb-4 tracking-tight sm:tracking-[-1px] md:tracking-[-1.5px]">Why 360watts?</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[20px] text-[#4a5565] font-['Poppins'] tracking-tight sm:tracking-[-0.5px]">Tangible benefits for your home</p>
        </header>

        <motion.ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12 list-none"
          {...sectionMotionProps}
          role="list"
          aria-label="Key benefits of 360watts"
        >
          {benefitsData.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] p-2 sm:p-0"
              {...itemMotionProps}
              role="listitem"
            >
              <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px] bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] rounded-[16px] sm:rounded-[20px] flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 shadow-[0_4px_20px_rgba(0,166,62,0.15)] group-hover:shadow-[0_8px_30px_rgba(0,166,62,0.25)] transition-all duration-300">
                <img
                  src={benefit.icon}
                  alt=""
                  className="w-[33px] h-[33px] sm:w-[38px] sm:h-[38px] lg:w-[45px] lg:h-[45px] xl:w-[50px] xl:h-[50px]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[13px] sm:text-[15px] lg:text-[17px] xl:text-[20px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-2 leading-tight px-1">{benefit.title}</h3>
              <p className="text-[11px] sm:text-[13px] lg:text-[14px] xl:text-[16px] text-[#4a5565] leading-relaxed font-['Poppins'] px-1">{benefit.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};