import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronRight, ChevronLeft, MessageCircle, CheckCircle, ChevronDown, Volume2, VolumeX } from "lucide-react";
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

const storySteps = [
  {
    title: "Why should our homes depend on others for energy when the sun gives us everything we need?",
    body: "From that spark, 360Watts was born.",
    align: "left",
    image: APP_IMAGES.aboutWalk,
  },
  {
    title: "A vision to make every home energy independent and in sync with the rhythm of life.",
    body: "We began with solar, giving people the power to create their own clean energy.",
    align: "right",
    image: APP_IMAGES.aboutForSale,
  },
  {
    title: "Then came the next step:",
    body: "Smart homes that know when to save, when to run, and maximize usage of solar energy",
    align: "left",
    image: APP_IMAGES.aboutSmartHome,
  },
  {
    title: "At 360Watts, we are building that world where homes think, energy flows freely, and independence is powered by intelligence.",
    body: "",
    align: "right",
    image: APP_IMAGES.aboutIdea,
  },
];

const teamMembers = [
  { name: "Srinath", role: "CEO & Team Lead", photo: APP_IMAGES.teamSrinath },
  { name: "Hariprasad", role: "Solar Design Engineer", photo: APP_IMAGES.teamHariprasad },
  { name: "Parvathi", role: "Product Designer", photo: APP_IMAGES.teamParvathi },
  { name: "Nancy", role: "IoT Developer", photo: APP_IMAGES.teamSelvaNancy },
  { name: "Rajeev", role: "Data/ML Engineer", photo: APP_IMAGES.teamRajeev },
];

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
      { id: "install-time", question: "How long does installation take?", answer: "Typical solar installation takes 1-2 weeks depending on system size. Our team coordinates everything to minimize disruption." },
      {
        id: "warranty",
        question: "What warranty do you provide?",
        answer: "We provide comprehensive warranties covering equipment, installation workmanship, and system performance guarantees."
      },
      { id: "upgrade", question: "Can I upgrade my system later?", answer: "Yes! Both solar and smart home systems are designed to be scalable. You can add more panels, batteries, or smart devices as your needs grow." },
    ],
  },
  {
    id: "solar",
    title: "Solar",
    items: [
      { id: "net-metering", question: "How does net metering work?", answer: "Net metering allows you to sell excess solar energy back to the grid. Your meter runs backward when producing more than you consume, offsetting your electricity costs." },
      { id: "financing", question: "What financing options are available?", answer: "We offer flexible financing including subscription models, installment plans, and outright purchase options to suit your budget." },
      { id: "output", question: "What output can I expect from my solar system?", answer: "Output depends on panel size, location, and weather. Our team provides detailed estimates during consultation based on your specific situation." },
      { id: "monsoon", question: "What happens during monsoon or cloudy weather?", answer: "Your system continues to generate power even on cloudy days, though at reduced capacity. You'll automatically draw from the grid when needed, and any battery storage provides backup." },
    ],
  },
  {
    id: "smart-home",
    title: "Smart Home",
    items: [
      { id: "compatibility", question: "Which devices are compatible?", answer: "Our system works with most major smart switches, sensors, and appliances that support common smart home standards. Compatibility keeps expanding with updates." },
      { id: "data-protection", question: "How is my data protected?", answer: "All data is encrypted in transit and at rest. We follow strict security practices as per ISO/IEC 27001 to ensure your home and usage data stays private and secure." },
      { id: "remote", question: "Can I control devices remotely?", answer: "Yes. You can monitor and control your devices from anywhere using the mobile app, as long as you have an internet connection." },
      { id: "hub", question: "Do I need a hub for smart home integration?", answer: "Some devices work directly over Wi-Fi, while others may require a hub for advanced automation and reliability. We recommend the setup that best fits your home." },
    ],
  },
  {
    id: "app",
    title: "App",
    items: [
      { id: "connectivity", question: "What if I lose internet connectivity?", answer: "Core functions continue to work locally. Remote access and cloud features automatically resume once the connection is restored." },
      { id: "family", question: "Can multiple family members access the app?", answer: "Yes. You can add multiple users and assign access levels, so everyone stays in control without compromising security." },
    ],
  },
];

// Fallback local assets
const localFinalLogo = "/final-logo-png-4x-2.png";

const heroSlides = [
  {
    bg: APP_IMAGES.solarPowerStation,
    title: "Smarter Energy.\nSmarter Living",
    subtitle: "360Watts unites solar power and smart home automation, helping you save more, live cleaner, and control everything effortlessly."
  },
  {
    bg: APP_IMAGES.technicianSolarPanels,
    title: "Power Your Home.\nSave the Planet.",
    subtitle: "Harness the sun's energy with our cutting-edge solar solutions. Reduce bills and your carbon footprint simultaneously."
  },
];

const benefitsData = [
  { icon: APP_IMAGES.iconSavings, title: "Save on bills", description: "Reduce your energy costs significantly" },
  { icon: APP_IMAGES.iconEnergy, title: "Energy self-dependence", description: "Generate your own clean power" },
  { icon: APP_IMAGES.iconEco, title: "Eco-friendly living", description: "Reduce your carbon footprint" },
  { icon: APP_IMAGES.iconAuto, title: "Intelligent automation", description: "Smart energy management" },
];

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
      description: "Connect all devices to the 360Watts app. Simple setup with QR codes and automatic device detection."
    },
    { 
      number: "3", 
      title: "Create Automations",
      description: "Set up intelligent routines that maximize solar usage, reduce waste, and adapt to your lifestyle automatically."
    },
  ],
};

const appFeatures = [
  { icon: APP_IMAGES.appIcon1, title: "Real-time solar analytics", description: "Monitor your energy production" },
  { icon: APP_IMAGES.appIcon2, title: "Smart device control", description: "Manage all your devices" },
  { icon: APP_IMAGES.appIcon3, title: "Energy health insights", description: "Track system performance" },
  { icon: APP_IMAGES.appIcon4, title: "Bill tracking", description: "Monitor your savings" },
];

const contactMethods = [
  { icon: APP_IMAGES.iconEmail, title: "Email Us", value: "hello@360watts.com", note: "We reply within 24 hrs", href: "mailto:hello@360watts.com" },
  { icon: APP_IMAGES.iconPhone, title: "Call Us", value: "9087610051", note: <span className="inline-flex items-center gap-1">Mon-Fri, 9am-6pm </span>, href: "tel:+919087610051" },
  { icon: APP_IMAGES.iconLocation, title: "Visit Us", value: "Coimbatore, Tamil Nadu", note: "By appointment only", href: "https://www.google.com/maps/search/?api=1&query=GRG+INCUBATION+CENTER,+Coimbatore,+Tamil+Nadu" },
];

const FAQSectionComponent = ({ section }: { section: FaqSection }) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    const compositeId = `${section.id}-${itemId}`;
    setOpenIds((current) =>
      current.includes(compositeId)
        ? current.filter((id) => id !== compositeId)
        : [...current, compositeId]
    );
  };

  return (
    <div className="space-y-5">
      <h3 className="text-[24px] md:text-[26px] font-bold font-['Urbanist'] tracking-[-0.02em]">
        {section.title}
      </h3>
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
                onClick={() => hasAnswer && toggleItem(item.id)}
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
  );
};

export const WebsiteHomepage = (): JSX.Element => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "", interest: "solar", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAppSlide, setCurrentAppSlide] = useState(0);
  
  // Partnership form state
  const [partnershipData, setPartnershipData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    company: "", 
    partnerType: "Supplier", 
    message: "" 
  });
  const [isPartnershipSubmitting, setIsPartnershipSubmitting] = useState(false);
  const [isPartnershipSubmitted, setIsPartnershipSubmitted] = useState(false);
  const [partnershipSubmittedMessage, setPartnershipSubmittedMessage] = useState("");
  
  // How It Works section state
  // Removed expand/collapse feature for process steps
  const [activeCard, setActiveCard] = useState<'solar' | 'smartHome' | null>(null);

  // Touch swipe state for hero
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Video mute state
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // Increased from 5000ms (5s) to 8000ms (8s)
    return () => clearInterval(timer);
  }, []);

  // Auto-slide app showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAppSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Touch handlers for swipe
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
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createMessage = () => {
    return `*Website Customer Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*City:* ${formData.city}\n` +
      `*Interest:* ${formData.interest}\n` +
      (formData.message ? `*Message:* ${formData.message}` : '');
  };

  const sendViaWhatsApp = () => {
    const whatsappNumber = "919087610051";
    const encodedMessage = encodeURIComponent(createMessage());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = createMessage();
    setSubmittedMessage(messageText);

    try {
      // Automatically send email via FormSubmit (free service, no API key needed)
      // Replace 'hello@360watts.com' with your actual email
      const response = await fetch('https://formsubmit.co/hello@360watts.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          interest: formData.interest,
          message: formData.message || 'No message provided',
          _subject: `Website Customer Contact Form Submission from ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Fallback: still show success and offer WhatsApp
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  // Partnership form handlers
  const handlePartnershipChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setPartnershipData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createPartnershipMessage = () => {
    return `*Website Partnership Inquiry*\n\n` +
      `*Name:* ${partnershipData.name}\n` +
      `*Email:* ${partnershipData.email}\n` +
      `*Phone:* ${partnershipData.phone}\n` +
      `*Company:* ${partnershipData.company}\n` +
      `*Partner Type:* ${partnershipData.partnerType}\n` +
      (partnershipData.message ? `*Message:* ${partnershipData.message}` : '');
  };

  const sendPartnershipViaWhatsApp = () => {
    const whatsappNumber = "919087610051";
    const encodedMessage = encodeURIComponent(createPartnershipMessage());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePartnershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPartnershipSubmitting(true);

    const messageText = createPartnershipMessage();
    setPartnershipSubmittedMessage(messageText);

    try {
      const response = await fetch('https://formsubmit.co/hello@360watts.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: partnershipData.name,
          email: partnershipData.email,
          phone: partnershipData.phone,
          company: partnershipData.company,
          partnerType: partnershipData.partnerType,
          message: partnershipData.message || 'No message provided',
          _subject: `Website Partnership Inquiry from ${partnershipData.name} - ${partnershipData.company}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setIsPartnershipSubmitting(false);
        setIsPartnershipSubmitted(true);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error sending partnership email:', error);
      setIsPartnershipSubmitting(false);
      setIsPartnershipSubmitted(true);
    }
  };

  return (
    <div className="bg-[#f7fff9] min-h-screen font-['Poppins',sans-serif] overflow-x-hidden">
      <Navigation transparent />

      {/* Hero Section */}
      <section 
        id="hero-section" 
        className="relative h-[60vh] sm:h-screen overflow-hidden scroll-mt-20"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Image */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img 
              src={slide.bg} 
              alt="" 
              className="w-full h-full object-cover object-center"
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
                  <div className="max-w-3xl px-4 sm:px-0">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[99px] font-bold text-[rgba(247,255,249,0.8)] font-['Urbanist'] mb-4 sm:mb-6 leading-[1.1] tracking-tight sm:tracking-[-3.96px] whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-[23px] text-white font-['Poppins'] max-w-xl mb-8 sm:mb-10 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00a63e] to-[#007a55] text-white font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm sm:text-base"
                    >
                      Get Free Consultation 
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          className="hidden sm:hidden absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 sm:w-12 sm:h-12 bg-white/30 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-white/40 active:scale-95 transition-all shadow-lg border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-7 h-7 sm:w-6 sm:h-6" />
        </button>
        <button 
          onClick={nextSlide} 
          className="hidden sm:hidden absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 sm:w-12 sm:h-12 bg-white/30 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-white/40 active:scale-95 transition-all shadow-lg border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-7 h-7 sm:w-6 sm:h-6" />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Our Unified Solution Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-[30px] sm:text-[35px] md:text-[40px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-2 tracking-tight sm:tracking-[-1.6px]">Our Unified Solution</h2>
            <p className="text-[20px] sm:text-[24px] md:text-[27px] text-[#4a5565] font-['Poppins'] tracking-tight sm:tracking-[-1.08px]">Two products. One platform for all your energy needs.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[113px] justify-center items-stretch mb-8">
            {/* Solar Solutions Card */}
            <div className="relative rounded-[20px] overflow-hidden w-full md:flex-1 lg:w-[567px] h-[280px] sm:h-[300px] md:h-[320px] lg:h-[342px]">
              <img 
                src="/solar-panels-house-roof.jpg" 
                alt="Solar Solutions" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(204,204,204,0.3)] to-transparent rounded-[20px]" />
              <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-[30px] flex flex-col justify-start text-left">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[19px] pt-3 sm:pt-4 md:pt-6 lg:pt-[24px]">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
                    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
                      <circle cx="28" cy="28" r="12" fill="#FFA500"/>
                      <path d="M28 8V2M28 54V48M48 28H54M2 28H8M43 13L47 9M9 47L13 43M43 43L47 47M9 9L13 13" stroke="#FFA500" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] mt-8 sm:mt-0">
                    <h3 className="text-[22px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[30px] font-bold text-black font-['Urbanist'] leading-tight md:leading-8 lg:leading-9 drop-shadow-lg">Solar Solutions</h3>
                    <p className="text-black text-[15px] sm:text-[12px] md:text-[13px] lg:text-[13.5px] xl:text-[14px] font-['Poppins'] leading-4 sm:leading-5 opacity-95 drop-shadow-md">Total control. Zero worries.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plus Icon */}
            <div className="hidden md:flex items-center justify-center w-8 md:w-12 h-8 md:h-12 text-[#4a5565] text-3xl md:text-5xl font-light mt-20 md:mt-24">+</div>

            {/* Smart Home Solutions Card */}
            <div className="relative rounded-[20px] overflow-hidden w-full md:flex-1 lg:w-[567px] h-[280px] sm:h-[300px] md:h-[320px] lg:h-[342px]">
              <img 
                src={APP_IMAGES.digitalTablet} 
                alt="Smart Home Solutions" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(204,204,204,0.75)] to-transparent rounded-[20px]" />
              <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-[30px] flex flex-col justify-start text-left">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[19px] pt-3 sm:pt-4 md:pt-6 lg:pt-[24px]">
                  <img src={APP_IMAGES.iconSmartHome} alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] mt-8 sm:mt-0">
                    <h3 className="text-[22px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px] font-bold text-black font-['Urbanist'] leading-tight md:leading-8 lg:leading-9 drop-shadow-lg">Smart Home Solutions</h3>
                    <p className="text-black text-[15px] sm:text-[13px] md:text-[12px] lg:text-[12.5px] xl:text-[13px] font-['Poppins'] leading-4 sm:leading-5 drop-shadow-md">The future of living, powered by intelligence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#solutions-section" 
              className="inline-flex items-center gap-2 px-6 py-4 border border-[rgba(74,85,101,0.75)] rounded-[10px] text-[#4a5565] hover:bg-gray-50 transition-colors text-[19px] tracking-[-0.76px]"
            >
              Know more
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Why 360 Watts Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-3 md:mb-4 tracking-[-1.5px]">Why 360 Watts?</h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#4a5565] font-['Poppins'] tracking-[-0.5px]">Tangible benefits for your home</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] rounded-[16px] sm:rounded-[20px] flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-[0_4px_20px_rgba(0,166,62,0.15)] group-hover:shadow-[0_8px_30px_rgba(0,166,62,0.25)] transition-all duration-300">
                  <img src={benefit.icon} alt="" className="w-[38px] h-[38px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]" />
                </div>
                <h3 className="text-[14px] sm:text-[17px] md:text-[20px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-2 sm:mb-3 leading-tight">{benefit.title}</h3>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#4a5565] leading-relaxed font-['Poppins']">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#f7fff9] via-[#f0fdf4] to-[#f7fff9] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00a63e] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6] rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-[#dcfce7] to-[#ddefff] rounded-full mb-4 sm:mb-6">
              <span className="text-[13px] sm:text-[14px] md:text-[16px] font-semibold text-[#0a0a0a] font-['Urbanist']">Simple & Effective</span>
            </div>
            <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold text-[#0a0a0a] font-['Urbanist'] tracking-[-1.5px] mb-4 bg-gradient-to-r from-[#0a0a0a] to-[#4a5565] bg-clip-text text-transparent">How Does It Work?</h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#4a5565] font-['Poppins'] max-w-2xl mx-auto">Simple steps to transform your home into a Smart Home, sustainable powerhouse</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Solar Steps */}
            <div 
              className={`bg-white/80 backdrop-blur-sm rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-7 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,166,62,0.15)] hover:-translate-y-2 cursor-pointer ${
                activeCard === 'solar' ? 'border-[#00a63e] shadow-[0_20px_60px_rgba(0,166,62,0.2)]' : 'border-transparent'
              }`}
              onMouseEnter={() => setActiveCard('solar')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] rounded-[16px] sm:rounded-[20px] flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                  <img src={APP_IMAGES.sun21} alt="Solar" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain" />
                </div>
                <div>
                  <h3 className="text-[26px] sm:text-[29px] md:text-[32px] font-bold text-[#0a0a0a] font-['Urbanist'] tracking-[-0.8px]">Solar</h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#4a5565] font-['Poppins'] leading-4 sm:leading-5 opacity-95 drop-shadow-md">Clean energy generation</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-gradient-to-r from-[#dcfce7] to-[#bbf7d0] rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#00a63e] to-[#007a55] w-full transform origin-left transition-transform duration-1000 ease-out" />
              </div>

              <div className="space-y-4">
                {processSteps.solar.map((step, index) => {
                  return (
                    <div 
                      key={index} 
                      className="group relative bg-gradient-to-r from-white to-[#f7fff9] rounded-[20px] p-5 border-2 border-transparent hover:border-[#dcfce7] hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center text-[17px] sm:text-[19px] md:text-[20px] font-bold font-['Urbanist'] flex-shrink-0 bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] text-[#0a0a0a] group-hover:scale-110 transition-all duration-300">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[17px] sm:text-[19px] md:text-[22px] text-[#0a0a0a] font-bold font-['Urbanist'] tracking-[-0.5px] leading-tight sm:leading-7">
                            {step.title}
                          </h4>
                          <div className="mt-3">
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#4a5565] font-['Poppins'] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Smart Home Steps */}
            <div 
              className={`bg-white/80 backdrop-blur-sm rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-7 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] hover:-translate-y-2 cursor-pointer ${
                activeCard === 'smartHome' ? 'border-[#3b82f6] shadow-[0_20px_60px_rgba(59,130,246,0.2)]' : 'border-transparent'
              }`}
              onMouseEnter={() => setActiveCard('smartHome')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] bg-gradient-to-br from-[#ddefff] to-[#bfdbfe] rounded-[16px] sm:rounded-[20px] flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                  <img src={APP_IMAGES.smartHouse1} alt="Smart Home" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain" />
                </div>
                <div>
                  <h3 className="text-[26px] sm:text-[29px] md:text-[32px] font-bold text-[#0a0a0a] font-['Urbanist'] tracking-[-0.8px]">Smart Home</h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#4a5565] font-['Poppins'] leading-4 sm:leading-5 drop-shadow-md">Intelligent automation</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-gradient-to-r from-[#ddefff] to-[#bfdbfe] rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] w-full transform origin-left transition-transform duration-1000 ease-out" />
              </div>

              <div className="space-y-4">
                {processSteps.smartHome.map((step, index) => {
                  return (
                    <div 
                      key={index} 
                      className="group relative bg-gradient-to-r from-white to-[#f7fff9] rounded-[20px] p-5 border-2 border-transparent hover:border-[#ddefff] hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-[20px] font-bold font-['Urbanist'] flex-shrink-0 bg-gradient-to-br from-[#ddefff] to-[#bfdbfe] text-[#0a0a0a] group-hover:scale-110 transition-all duration-300">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[22px] text-[#0a0a0a] font-bold font-['Urbanist'] tracking-[-0.5px] leading-7">
                            {step.title}
                          </h4>
                          <div className="mt-3">
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#4a5565] font-['Poppins'] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center mt-10 sm:mt-12 md:mt-16">
            <a 
              href="#solutions-section" 
              className="inline-flex items-center gap-2 px-6 py-4 border border-[rgba(74,85,101,0.75)] rounded-[10px] text-[#4a5565] hover:bg-gray-50 transition-colors text-[19px] tracking-[-0.76px]"
            >
              Explore Full Process
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-[#00a63e] to-[#017c54]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold font-['Urbanist'] mb-6">One App. For Everything.</h2>
              <div className="space-y-6">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src={feature.icon} alt="" className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-black text-xl font-['poppins']">{feature.title}</h4>
                      <p className="text-white font-['Poppins']">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

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
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image7} />
                    </div>
                  </div>
                  <div className="absolute border border-[rgba(0,0,0,0.3)] border-solid h-[443px] left-[275px] rounded-[20px] top-[83px] w-[216px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                      <img alt="" className="absolute h-[101.64%] left-0 max-w-none top-0 w-full" src={APP_IMAGES.image8} />
                    </div>
                  </div>
                  <div className="absolute h-[486px] left-[55px] rounded-[30px] shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image5} />
                  </div>
                  <div className="absolute h-[486px] left-[200px] rounded-[30px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image6} />
                  </div>
                  <div className="absolute h-[500px] left-[125px] rounded-[30px] top-[26px] w-[245px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                      <img alt="" className="absolute h-[102.02%] left-[-0.09%] max-w-none top-0 w-[100.19%]" src={APP_IMAGES.image4} />
                    </div>
                  </div>
                </div>

                <div className={`absolute transition-all duration-[3000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  currentAppSlide === 1 ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-full'
                }`}>
                  <div className="absolute h-[437px] left-[5px] rounded-[30px] top-[83px] w-[218px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] sizets-none rounded-[30px] size-full" src={APP_IMAGES.image8} />
                    </div>
                  </div>
                  <div className="absolute border border-[rgba(0,0,0,0.3)] border-solid h-[443px] left-[275px] rounded-[20px] top-[83px] w-[216px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                      <img alt="" className="absolute h-[101.64%] left-0 max-w-none top-0 w-full" src={APP_IMAGES.image5} />
                    </div>
                  </div>
                  <div className="absolute h-[486px] left-[55px] rounded-[30px] shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image6} />
                  </div>
                  <div className="absolute h-[486px] left-[200px] rounded-[30px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image4} />
                  </div>
                  <div className="absolute h-[500px] left-[125px] rounded-[30px] top-[26px] w-[245px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                      <img alt="" className="absolute h-[102.02%] left-[-0.09%] max-w-none top-0 w-[100.19%]" src={APP_IMAGES.image7} />
                    </div>
                  </div>
                </div>

                <div className={`absolute transition-all duration-[3000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  currentAppSlide === 2 ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-full'
                }`}>
                  <div className="absolute h-[437px] left-[5px] rounded-[30px] top-[83px] w-[218px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image5} />
                    </div>
                  </div>
                  <div className="absolute border border-[rgba(0,0,0,0.3)] border-solid h-[443px] left-[275px] rounded-[20px] top-[83px] w-[216px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                      <img alt="" className="absolute h-[101.64%] left-0 max-w-none top-0 w-full" src={APP_IMAGES.image6} />
                    </div>
                  </div>
                  <div className="absolute h-[486px] left-[55px] rounded-[30px] shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image4} />
                  </div>
                  <div className="absolute h-[486px] left-[200px] rounded-[30px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image7} />
                  </div>
                  <div className="absolute h-[500px] left-[125px] rounded-[30px] top-[26px] w-[245px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                      <img alt="" className="absolute h-[102.02%] left-[-0.09%] max-w-none top-0 w-[100.19%]" src={APP_IMAGES.image8} />
                    </div>
                  </div>
                </div>

                <div className={`absolute transition-all duration-[3000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  currentAppSlide === 3 ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-full'
                }`}>
                  <div className="absolute h-[437px] left-[5px] rounded-[30px] top-[83px] w-[218px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image4} />
                    </div>
                  </div>
                  <div className="absolute border border-[rgba(0,0,0,0.3)] border-solid h-[443px] left-[275px] rounded-[20px] top-[83px] w-[216px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                      <img alt="" className="absolute h-[101.64%] left-0 max-w-none top-0 w-full" src={APP_IMAGES.image7} />
                    </div>
                  </div>
                  <div className="absolute h-[486px] left-[55px] rounded-[30px] shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image8} />
                  </div>
                  <div className="absolute h-[486px] left-[200px] rounded-[30px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[47px] w-[234px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={APP_IMAGES.image5} />
                  </div>
                  <div className="absolute h-[500px] left-[125px] rounded-[30px] top-[26px] w-[245px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                      <img alt="" className="absolute h-[102.02%] left-[-0.09%] max-w-none top-0 w-[100.19%]" src={APP_IMAGES.image6} />
                    </div>
                  </div>
                </div>

                {/* Phone frame - always visible */}
                <div className="absolute h-[535px] left-[108px] top-[3px] w-[283px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[113.24%] left-[-59.94%] max-w-none top-[-4.9%] w-[218.98%]" src={APP_IMAGES.phone1401} />
                  </div>
                </div>
              </div>
              {/* Phone Showcase - Mobile - Simpler flex layout */}
              <div className="flex items-center justify-center lg:hidden py-4 scale-90 sm:scale-100">
                <img 
                  src="/image-5.png" 
                  alt="App Screen" 
                  className="w-20 sm:w-24 md:w-28 h-auto opacity-70 rounded-xl shadow-lg translate-x-3 translate-y-2"
                  loading="eager"
                />
                <img 
                  src="/image-4.png" 
                  alt="360Watts App" 
                  className="w-36 sm:w-44 md:w-52 h-auto drop-shadow-2xl relative z-10 rounded-2xl"
                  loading="eager"
                />
                <img 
                  src="/image-6.png" 
                  alt="App Screen" 
                  className="w-16 sm:w-20 h-auto opacity-70 rounded-xl shadow-lg -translate-x-3 translate-y-2"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions-section" className="scroll-mt-20">
        <div className="bg-[#f7fff9] min-h-screen text-[#0a0a0a]">
          {/* Video Hero */}
          <section className="relative w-full flex justify-center items-center h-[280px] sm:h-[400px] md:h-[500px] lg:h-auto py-0 lg:py-12">
            {/* Modern gradient background for desktop */}
            <div className="hidden lg:block absolute inset-0 w-full h-full z-0" aria-hidden="true"
              style={{background: 'linear-gradient(120deg, #e0e7ff 0%, #f7fff9 60%, #d1fae5 100%)'}} />
            <div className="relative w-full lg:w-[700px] xl:w-[850px] 2xl:w-[1000px] aspect-video overflow-hidden shadow-xl border border-black/10 bg-[#222] z-10">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted={isMuted}
                loop
                playsInline
              >
                <source src={APP_IMAGES.solutionsVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7fff9]/30 pointer-events-none" />
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 transition-colors z-10"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </section>

          {/* Solution selector below video */}
          <section className="bg-[#f7fff9] px-6 py-10">
            <div className="w-full max-w-4xl mx-auto flex justify-center gap-4 flex-wrap">
              {[
                { key: "solar", label: "Smart Solar", target: "solar" },
                { key: "smart-home", label: "Smart Home", target: "smart-home" },
                { key: "app", label: "App", target: "app" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    const el = document.getElementById(tab.target);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="px-6 py-3 rounded-[10px] font-['Urbanist'] font-bold text-[19px] transition-all border border-black/10 shadow-sm bg-white text-[#0a0a0a] hover:bg-black/5"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </section>

          {/* Smart solar solutions */}
          <section id="solar" className="bg-gradient-to-b from-[#f7fff9] via-[#f7fff9] to-white px-6 pt-14 pb-16 border-b border-black/5">
            <div className="w-full max-w-6xl mx-auto text-center space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 text-[24px] font-['Poppins'] text-[#0a0a0a">
                <b>Smart Solar Solutions</b>
              </span>
              <p className="text-[18px] text-[#4a5565] font-['Poppins']">
                We design, install, and maintain high-performance solar systems tailored for your home
              </p>
            </div>
          </section>

          {/* Solar hero image with callouts */}
          <section className="px-6 pb-16">
            <div className="w-full max-w-5xl mx-auto rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.12)] relative">
              <img
                src={APP_IMAGES.solutionsSolarHouse}
                alt="Solar house"
                className="w-full h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1000px] object-cover object-bottom"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 pointer-events-none block">
                <div className="absolute left-[5%] sm:left-[10%] top-[5%] bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.4)] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-1 sm:p-3 md:p-4 lg:p-6 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1">
                    <div className="w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[rgba(157,221,180,0.47)] rounded flex items-center justify-center"><Wrench property1="variant-2" vector="vector-2.svg" /></div>
                    <p className="font-['Urbanist'] font-bold text-[9px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-[#0a0a0a]">End-to-End</p>
                  </div>  
                  <p className="font-['Poppins'] text-[7px] sm:text-[11px] md:text-[12px] lg:text-[14px] text-[rgba(0,0,0,0.7)]">From design to installation to maintenance</p>
                </div>
                <div className="absolute right-[5%] sm:right-[10%] top-[15%] bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.4)] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-1 sm:p-3 md:p-4 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1">
                    <div className="w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[rgba(157,221,180,0.47)] rounded flex items-center justify-center"><Wrench property1="variant-3" slidersHorizontalVector="vector-3.svg" /></div>
                    <p className="font-['Urbanist'] font-bold text-[9px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-[#0a0a0a]">Remote performance monitoring</p>
                  </div>
                  <p className="font-['Poppins'] text-[7px] sm:text-[11px] md:text-[12px] lg:text-[14px] text-[rgba(0,0,0,0.7)]">Track your system 24/7</p>
                </div>
                <div className="absolute right-[5%] sm:right-[10%] bottom-[50%] bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.4)] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-1 sm:p-3 md:p-4 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1">
                    <div className="w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[rgba(157,221,180,0.47)] rounded flex items-center justify-center"><Wrench property1="variant-3" slidersHorizontalVector="vector-3.svg" /></div>
                    <p className="font-['Urbanist'] font-bold text-[9px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-[#0a0a0a]">Maintenance & warranty</p>
                  </div>
                  <p className="font-['Poppins'] text-[7px] sm:text-[11px] md:text-[12px] lg:text-[14px] text-[rgba(0,0,0,0.7)]">Guaranteed performance and support</p>
                </div>
                <div className="absolute left-[5%] sm:left-[10%] bottom-[62%] bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.4)] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-2 sm:p-3 md:p-4 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1">
                    <div className="w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[rgba(157,221,180,0.47)] rounded flex items-center justify-center"><Wrench property1="default" vector="vector-2.svg" /></div>
                    <p className="font-['Urbanist'] font-bold text-[9px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-[#0a0a0a]">Flexible models</p>
                  </div>
                  <p className="font-['Poppins'] text-[7px] sm:text-[11px] md:text-[12px] lg:text-[14px] text-[rgba(0,0,0,0.7)]">Subscription or purchase options</p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-5xl mx-auto mt-6 flex justify-center">
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[rgba(0,0,0,0.75)] text-white font-['Urbanist'] font-bold text-[19px] px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
              >
                Enquire Solar Plans
              </a>
            </div>
          </section>

          {/* Journey */}
          <section className="px-6 pb-20 bg-gradient-to-b from-white via-[#f2fbff] to-[#e8f5ff]">
            <div className="w-full max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-3 md:mb-4 tracking-[-1.5px]">Your journey to smarter solar</h2>
              <p className="text-[18px] text-[#4a5565] font-['Poppins']">
                From assessment to ongoing support, we're with you every step of the way
              </p>
            </div>
            <div className="w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {[
                { title: "Online Proposal", desc: "Upload your bills and location to get your solar proposal with 3D layout." },
                { title: "Site Assessment", desc: "Our team validates your design & finalizes proposal." },
                { title: "Professional Installation", desc: "Our team manages everything, from installation, commissioning & subsidy." },
                { title: "Smart Monitoring", desc: "Control solar generation, savings, and system health - all in one app and from anywhere." },
                { title: "Ongoing Support", desc: "With 360Care, stay worry-free. We cover all maintenance." },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="bg-white rounded-[16px] md:rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 px-3 sm:px-4 py-4 sm:py-5 flex flex-col items-center text-center gap-2 sm:gap-3"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#fdc700] to-[#ff6900] flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-['Urbanist'] font-bold text-[13px] sm:text-[14px] md:text-[16px] text-[#0a0a0a]">{item.title}</p>
                  <p className="font-['Poppins'] text-[10px] sm:text-[11px] md:text-[12px] text-[#4a5565] leading-[1.4]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Smart home solutions */}
          <section id="smart-home" className="px-4 sm:px-6 py-12 sm:py-14 md:py-16 bg-gradient-to-b from-[#f7fff9] via-[#eef8ff] to-white">
            <div className="w-full max-w-6xl mx-auto text-center space-y-2 sm:space-y-3 mb-8 sm:mb-10">
              <p className="text-[32px] sm:text-[40px] md:text-[50px] font-['Urbanist'] text-[#0a0a0a] font-bold">Smart home solutions</p>
              <p className="text-[14px] sm:text-[15px] md:text-[17px] font-['Poppins'] text-[#4a5565]">
                Our intelligent automation connects your home's devices to your solar flow.
              </p>
            </div>

            <div className="relative w-full max-w-6xl mx-auto rounded-[24px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.12)]">
              <img
                src={APP_IMAGES.solutionsSmartHomeScene}
                alt="Smart home"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 pointer-events-none block">
                <div className="absolute left-[5%] sm:left-[10%] top-[10%] sm:top-[15%] bg-white/94 rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] px-1 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1 md:py-2 lg:py-3 shadow border border-black/5 max-w-[100px] sm:max-w-[120px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[210px]">
                  <p className="font-['Urbanist'] font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]">Device Scheduling</p>
                  <p className="font-['Poppins'] text-[6px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#3f3f3f] leading-tight">Automate based on your routine</p>
                </div>
                <div className="absolute right-[15%] sm:right-[10%] md:right-[20%] top-[32%] sm:top-[35%] bg-white/94 rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] px-1 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1 md:py-2 lg:py-3 shadow border border-black/5 max-w-[110px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[230px] text-right">
                  <p className="font-['Urbanist'] font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]">Predictive Energy Routines</p>
                  <p className="font-['Poppins'] text-[6px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#3f3f3f] leading-tight">AI learns your patterns</p>
                </div>
                <div className="absolute left-[40%] sm:left-[35%] md:left-[45%] top-[10%] sm:top-[15%] bg-white/94 rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] px-1 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1 md:py-2 lg:py-3 shadow border border-black/5 max-w-[105px] sm:max-w-[130px] md:max-w-[170px] lg:max-w-[190px] xl:max-w-[220px]">
                  <p className="font-['Urbanist'] font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]">Seamless Integration</p>
                  <p className="font-['Poppins'] text-[6px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#3f3f3f] leading-tight">Works with existing smart devices</p>
                </div>
                <div className="absolute left-[23%] sm:left-[20%] md:left-[28%] bottom-[55%] sm:bottom-[56%] bg-white/94 rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] px-1 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1 md:py-2 lg:py-3 shadow border border-black/5 max-w-[105px] sm:max-w-[130px] md:max-w-[170px] lg:max-w-[190px] xl:max-w-[220px] text-center">
                  <p className="font-['Urbanist'] font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]">Cross Device Automation</p>
                  <p className="font-['Poppins'] text-[6px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#3f3f3f] leading-tight">All devices work together</p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-6xl mx-auto mt-10 flex justify-center">
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#0a0a0a] text-white font-['Urbanist'] font-bold text-[17px] px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
              >
                Enquire Smart Home
              </a>
            </div>
          </section>

          {/* Smarter Living */}
          <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-[#f4faff] to-[#e4f0ff]">
            <div className="w-full max-w-6xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[54px] font-['Urbanist'] font-bold tracking-[-1px] sm:tracking-[-2px] text-[#0a0a0a] mb-3 sm:mb-4">
                Smarter Living, Simplified
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#4a5565] font-['Poppins'] max-w-3xl mx-auto">
                Transform your home into an intelligent, energy-efficient haven
              </p>
            </div>
            <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 justify-items-center">
              {[
                { title: "Smart-Home Planning", desc: "We understand your lifestyle and automation needs — from high-load appliances up to full home." },
                { title: "Smart devices", desc: "We suggest a list of smart devices for your automation. You can expand to new devices as you wish." },
                { title: "Device Integration", desc: "Our 360Watts app effortlessly recognizes lighting, security, and smart appliances, keeping you connected from anywhere." },
                { title: "Automation Setup", desc: "The 360Watts app guides you effortlessly in automation setup. Let AI suggest automations, or you can set them up manually." },
                { title: "Continuous Support", desc: "We keep our 360Watts app updated to latest AI/ML developments. You can reach us for any technical support anytime." },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-white rounded-[16px] md:rounded-[20px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] p-3 sm:p-4 md:p-5 flex flex-col items-center text-center ${
                    i === 3 ? 'md:col-start-2 lg:col-start-1' : i === 4 ? 'md:col-start-3 lg:col-span-0' : ''
                  }`}
                  >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#51a2ff] to-[#615fff] flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-3 md:mt-4 flex flex-col gap-1">
                    <p className="font-['Urbanist'] font-bold text-[13px] sm:text-[14px] md:text-[16px] text-[#0a0a0a]">{item.title}</p>
                    <p className="font-['Poppins'] text-[10px] sm:text-[11px] md:text-[12px] text-[#4a5565] leading-[1.4]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 360Watts App */}
          <section id="app" className="px-3 sm:px-4 md:px-6 py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#e4f0ff] via-white to-[#f7fff9]">
            <div className="w-full max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
                <h2 className="text-[60px] sm:text-[80px] md:text-[99px] font-['Urbanist'] font-bold text-[#0a0a0a] tracking-[-3.96px] mb-2 sm:mb-4">360watts App</h2>
                <p className="text-[23px] text-[#0a0a0a]/50 font-['Poppins'] tracking-[-0.92px] mb-6 sm:mb-8">Our Unified App Ecosystem</p>
                <div className="max-w-2xl mx-auto">
                  <p className="text-[23px] text-[#0a0a0a]/60 font-['Poppins'] tracking-[-0.92px] leading-relaxed">
                    The 360Watts app bridges solar and smart living. View real-time energy flows, control devices, and get actionable insights ; all in one dashboard.
                  </p>
                </div>
              </div>

              {/* Phone Grid Layout */}
              <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
                {/* Real-time Insights - First row */}
                <div className="flex flex-row items-center gap-12">
                  <div className="flex-1 text-center px-2 sm:text-center sm:px-6">
                    <h3 className="text-[18px] sm:text-[28px] lg:text-[30px] font-['Urbanist'] font-bold text-[#0a0a0a] tracking-[-1.2px] mb-4">
                      Real-time Insights
                    </h3>
                    <p className="text-[14px] sm:text-[20px] lg:text-[24px] font-['Poppins'] text-[#4a5565] tracking-[-0.96px] leading-relaxed">
                      Monitor your energy generation, consumption, and savings live, all in one intuitive dashboard.
                    </p>
                  </div>
                  <div className="flex-shrink-0 relative w-[220px] sm:w-[380px] lg:w-[370px] aspect-[329/636]">
                    {/* App Screenshot */}
                    <img src={APP_IMAGES.solutionsAppPhoneInsights} alt="Real-time Insights" className="absolute inset-[10%] w-[80%] h-[80%] object-cover rounded-[20px]" />
                    {/* Phone Frame Overlay */}
                    <img src={APP_IMAGES.phone1401} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                  </div>
                </div>
                {/* Smart Scheduling - Second row */}
                <div className="flex flex-row-reverse items-center gap-12">
                  <div className="flex-1 text-center px-2 sm:text-center sm:px-6">
                    <h3 className="text-[18px] sm:text-[28px] lg:text-[30px] font-['Urbanist'] font-bold text-[#0a0a0a] tracking-[-1.2px] mb-4">Smart Scheduling</h3>
                    <p className="text-[14px] sm:text-[20px] lg:text-[24px] font-['Poppins'] text-[#4a5565] tracking-[-0.96px] leading-relaxed">
                      Automatically run high-load devices when solar power is abundant to maximize efficiency and reduce costs.
                    </p>
                  </div>
                  <div className="flex-shrink-0 relative w-[220px] sm:w-[380px] lg:w-[370px] aspect-[329/636]">
                    {/* App Screenshot */}
                    <img src={APP_IMAGES.solutionsAppPhoneMonitor} alt="Smart Scheduling" className="absolute inset-[14%] top-[10%] w-[75%] h-[80%] object-cover rounded-[10px]" />
                    {/* Phone Frame Overlay */}
                    <img src={APP_IMAGES.phone1401} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                  </div>
                </div>

                {/* Routines and Modes - Third row (zig-zag) */}
                <div className="flex flex-row items-center gap-12">
                  <div className="flex-1 text-center px-2 sm:text-center sm:px-6">
                    <h3 className="text-[18px] sm:text-[28px] lg:text-[30px] font-['Urbanist'] font-bold text-[#0a0a0a] tracking-[-1.2px] mb-4">Routines and Modes</h3>
                    <p className="text-[14px] sm:text-[20px] lg:text-[24px] font-['Poppins'] text-[#4a5565] tracking-[-0.96px] leading-relaxed">
                      Set your home to match your daily life. Lights, fans, and devices adjust automatically to your routine.
                    </p>
                  </div>
                  <div className="flex-shrink-0 relative w-[200px] sm:w-[380px] lg:w-[370px] aspect-[329/636]">
                    {/* App Screenshot */}
                    <img src={APP_IMAGES.solutionsAppPhoneModes} alt="Routines and Modes" className="absolute inset-[11.5%] top-[10%] w-[77%] h-[83%] object-cover rounded-[20px]" />
                    {/* Phone Frame Overlay */}
                    <img src={APP_IMAGES.phone1401} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                  </div>
                </div>

                {/* Maintenance and Care - Fourth row (zig-zag) */}
                <div className="flex flex-row-reverse items-center gap-12">
                  <div className="flex-1 text-center px-2 sm:text-center sm:px-6">
                    <h3 className="text-[18px] sm:text-[28px] lg:text-[30px] font-['Urbanist'] font-bold text-[#0a0a0a] tracking-[-1.2px] mb-4">Maintenance and Care</h3>
                    <p className="text-[14px] sm:text-[20px] lg:text-[24px] font-['Poppins'] text-[#4a5565] tracking-[-0.96px] leading-relaxed">
                      Easily book service appointments and keep your solar and smart systems performing at their best.
                    </p>
                  </div>
                  <div className="flex-shrink-0 relative w-[220px] sm:w-[380px] lg:w-[370px] aspect-[329/636]">
                    {/* App Screenshot */}
                    <img src={APP_IMAGES.solutionsAppPhoneHero} alt="Maintenance and Care" className="absolute inset-[14.5%] top-[9%] bottom-[6%] w-[75%] object-cover rounded-[20px]" />
                    {/* Phone Frame Overlay */}
                    <img src={APP_IMAGES.phone1401} alt="" className="absolute inset-2 w-full h-full object-cover pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
            <div className="w-full max-w-4xl mx-auto text-center">
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-5xl font-bold text-[#0a0a0a] font-['Urbanist'] mb-4 sm:mb-6">
                Want to explore the future?
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-xl text-[#4a5565] mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-['Poppins']">
                Let's discuss how our solutions can transform your home or business.
              </p>
              <div className="flex flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#contact-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-[10px] hover:opacity-90 transition-opacity text-[14px] sm:text-[15px] md:text-base"
                >
                  Chat with us
                </a>
                <button
                  onClick={() => window.location.href = `tel:9087610051`}
                  className="border-2 border-[#0a0a0a] text-[#0a0a0a] font-bold px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-[10px] hover:bg-black/5 transition-colors text-[14px] sm:text-[15px] md:text-[16px]"
                >
                  Call us
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="scroll-mt-20 bg-[#f7fff9] min-h-screen text-[#0a0a0a]">
        {/* Hero */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] sm:min-h-[450px] md:min-h-[520px] w-full overflow-hidden">
          <img
            src={APP_IMAGES.aboutHero}
            alt="Solar hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />
          <div className="relative z-10 max-w-5xl px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 lg:pt-36 flex items-start">
            <div className="text-white space-y-2 sm:space-y-3 max-w-xl">
              <p className="text-sm sm:text-base md:text-lg font-['Poppins']">360watts.com | solar + smart home solutions</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight">
                We're on a mission.
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-['Poppins'] text-white/90">
                To revolutionize how homes consume and manage energy.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-[#f7fff9]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Urbanist'] mb-2">Our Story.</h2>
              <p className="text-base sm:text-lg text-[#4a5565] font-['Poppins']">It all started with a question...</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#9ee2b4] via-[#9ee2b4]/60 to-transparent z-0" />

              <div className="space-y-10 sm:space-y-12 md:space-y-16 relative z-10">
                {storySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${step.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 sm:gap-8 md:gap-12 relative`}
                  >
                    <div className="w-full md:w-1/2">
                      <div className="shadow-sm border border-[#e5f3e9] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-white relative z-10">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-['Urbanist'] mb-2 sm:mb-3 leading-snug">{step.title}</h3>
                        {step.body && <p className="text-[#4a5565] font-['Poppins'] text-sm sm:text-base md:text-lg leading-relaxed">{step.body}</p>}
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center relative z-10">
                      <img
                        src={step.image}
                        alt="Story visual"
                        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-64 sm:h-80 md:h-96 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 sm:mt-14 md:mt-16 text-center space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist']">The sun started it.</h3>
              <p className="text-base sm:text-lg text-[#4a5565] font-['Poppins']">We are just making it smarter.</p>
              <div className="flex flex-col items-center gap-2 sm:gap-3 pt-6 sm:pt-8">
                <img src={APP_IMAGES.aboutLogo} alt="360Watts logo" className="w-24 sm:w-24 md:w-28 h-auto ml-4" />
                <p className="text-[#244d65] font-['Figtree'] text-sm sm:text-base">Drive what's next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-1 sm:py-14 md:py-1 px-4 sm:px-6 bg-[#f7fff9]">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist']">Meet Our Team</h3>
              <p className="text-base sm:text-lg text-[#4a5565] font-['Poppins']">The faces behind the innovation</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 justify-items-center">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-2 sm:gap-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-[#e8f5ed] flex items-center justify-center">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = APP_IMAGES.aboutAvatar; }} />
                  </div>
                  <p className="text-[11px] sm:text-[13px] md:text-base font-semibold font-['Urbanist'] leading-tight">{member.name}</p>
                  <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-[#4a5565] font-['Poppins'] leading-snug">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner CTA */}
        <section className="py-10 sm:py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto border-2 border-[#00a63e] rounded-[16px] sm:rounded-[20px] bg-white shadow-sm p-6 sm:p-8 md:p-10 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 sm:mb-3">Partner with Us</h3>
            <p className="text-base sm:text-lg text-[#4a5565] font-['Poppins'] mb-4 sm:mb-6">
              Join us in revolutionizing home energy. Whether you're a supplier, installer, or technology partner, let's work together.
            </p>
            <a
              href="#partnership"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("partnership")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] bg-gradient-to-r from-[#00a63e] to-[#007a55] text-white font-semibold hover:opacity-90 transition"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="scroll-mt-20 bg-[#f7fff9]">
        {/* Top gradient header */}
        <div className="relative isolate">
          <div className="absolute inset-x-0 top-0 h-[280px] sm:h-[320px] md:h-[380px] bg-gradient-to-r from-[rgba(0,166,62,0.09)] to-[rgba(0,122,85,0.09)] rounded-b-[50px] sm:rounded-b-[60px] md:rounded-b-[80px]" />
          <header className="relative h-[280px] sm:h-[320px] md:h-[380px] flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-[960px] mx-auto text-center space-y-2">
              <h1 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold tracking-[-0.04em] font-['Urbanist']">
                Frequently Asked Questions
              </h1>
              <p className="text-[14px] sm:text-[17px] md:text-[20px] text-[#4a5565] font-['Poppins'] leading-snug">
                Find answers to common questions about 360Watts solar and smart home solutions
              </p>
            </div>
          </header>
        </div>

        {/* Sections */}
        <main className="px-6 pb-20 mt-10 md:mt-14">
          <div className="max-w-[1020px] mx-auto space-y-14">
            {faqSections.map((section) => (
              <FAQSectionComponent key={section.id} section={section} />
            ))}
          </div>
        </main>

        {/* CTA */}
        <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
          <div className="max-w-[724px] mx-auto text-center space-y-2 sm:space-y-3">
            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold font-['Urbanist']">Still have questions?</h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#4a5565] font-['Poppins']">
              Our team is here to help. Reach out anytime.
            </p>
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4">
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#00a63e] to-[#007a55] text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-[14px] sm:text-[15px] md:text-[16px] font-['Poppins'] shadow-[0_4px_12px_rgba(0,166,62,0.25)] hover:opacity-90 transition min-w-[160px] sm:min-w-[180px] md:min-w-[220px]"
              >
                Chat with Us
              </a>
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(0,0,0,0.5)] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-[14px] sm:text-[15px] md:text-[16px] font-['Poppins'] text-[#0a0a0a] hover:bg-black/5 transition min-w-[160px] sm:min-w-[180px] md:min-w-[220px]"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-10 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[33px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-2 sm:mb-3 leading-tight">Let's build your smart solar home.</h2>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] text-[#4a5565] leading-relaxed">Get in touch with us for a free consultation and personalized energy assessment</p>
          </div>

          {/* Contact methods */}
          <div className="flex flex-row sm:flex-row justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-[134px] mb-8 sm:mb-10 md:mb-12">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-[120px] sm:w-[150px] md:w-[180px] lg:w-[222px] group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#dcfce7] rounded-[8px] sm:rounded-[10px] flex items-center justify-center mb-2 group-hover:shadow-lg transition-shadow">
                  <img src={method.icon} alt="" className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="text-[12px] sm:text-[13px] md:text-[15px] lg:text-[19px] text-[#0a0a0a] tracking-[-0.5px] sm:tracking-[-0.76px] mb-0.5 text-center font-semibold">{method.title}</h3>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[19px] text-[#4a5565] tracking-[-0.5px] sm:tracking-[-0.76px] text-center">{method.value}</p>
                <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[16px] text-[rgba(74,85,101,0.6)] tracking-[-0.4px] sm:tracking-[-0.64px] text-center">{method.note}</p>
              </a>
            ))}
          </div>
          
          {/* Contact form */}
          <div className="border border-[rgba(0,0,0,0.3)] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-4 sm:p-6 md:p-8 lg:p-12 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.45)] max-w-[939px] mx-auto">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#017c54]" />
                </div>
                <h3 className="text-[28px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-4">Thank You!</h3>
                <p className="text-[17px] text-[#4a5565] mb-2">Your message has been sent successfully to our team.</p>
                <p className="text-[15px] text-[#4a5565] mb-8">We'll get back to you shortly. For immediate assistance, connect with us on WhatsApp:</p>

                <div className="space-y-4 max-w-2xl mx-auto mb-8">
                  <button
                    onClick={sendViaWhatsApp}
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp Too
                  </button>
                </div>

                <div className="bg-gray-100 rounded-xl p-4 mb-8 text-left max-w-2xl mx-auto">
                  <p className="text-sm text-gray-600 font-['Poppins'] mb-3">Your message:</p>
                  <p className="text-sm text-neutral-700 font-['Poppins'] whitespace-pre-wrap break-words">{submittedMessage}</p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", city: "", interest: "solar", message: "" });
                    setSubmittedMessage("");
                  }}
                  className="text-[#017c54] font-medium hover:underline font-['Poppins']"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 md:gap-y-6 lg:gap-y-[60px] gap-x-3 sm:gap-x-6 md:gap-x-8 lg:gap-x-[200px]">
                  <div>
                    <label className="block text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] text-[#0a0a0a] tracking-[-0.5px] sm:tracking-[-0.76px] mb-1">Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your full name"
                      value={formData.name} 
                      onChange={handleFormChange} 
                      required
                      className="w-full text-[#4a5565] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] tracking-[-0.5px] sm:tracking-[-0.76px] border-b border-gray-300 pb-2 focus:outline-none focus:border-[#017c54] bg-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] text-[#0a0a0a] tracking-[-0.5px] sm:tracking-[-0.76px] mb-1">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="your@email.com"
                      value={formData.email} 
                      onChange={handleFormChange} 
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address"
                      className="w-full text-[#4a5565] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] tracking-[-0.5px] sm:tracking-[-0.76px] border-b border-gray-300 pb-2 focus:outline-none focus:border-[#017c54] bg-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] text-[#0a0a0a] tracking-[-0.5px] sm:tracking-[-0.76px] mb-1">Phone *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone} 
                      onChange={handleFormChange} 
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      className="w-full text-[#4a5565] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] tracking-[-0.5px] sm:tracking-[-0.76px] border-b border-gray-300 pb-2 focus:outline-none focus:border-[#017c54] bg-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] text-[#0a0a0a] tracking-[-0.5px] sm:tracking-[-0.76px] mb-1">City *</label>
                    <input 
                      type="text" 
                      name="city" 
                      placeholder="Your city"
                      value={formData.city} 
                      onChange={handleFormChange} 
                      required
                      className="w-full text-[#4a5565] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] tracking-[-0.5px] sm:tracking-[-0.76px] border-b border-gray-300 pb-2 focus:outline-none focus:border-[#017c54] bg-transparent" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] text-[#0a0a0a] tracking-[-0.5px] sm:tracking-[-0.76px] mb-1">Interested in *</label>
                  <div className="relative">
                    <select 
                      name="interest" 
                      value={formData.interest} 
                      onChange={handleFormChange} 
                      required
                      className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-[8px] sm:rounded-[10px] border border-[rgba(0,0,0,0.4)] appearance-none bg-white text-[#4a5565] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] tracking-[-0.5px] sm:tracking-[-0.76px]"
                    >
                      <option value="solar">Solar Only</option>
                      <option value="smart-home">Smart Home Only</option>
                      <option value="both">Both Solar &amp; Smart Home</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 text-[#0a0a0a]/40" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] text-[#0a0a0a] tracking-[-0.5px] sm:tracking-[-0.76px] mb-1">Message (Optional)</label>
                  <input 
                    type="text" 
                    name="message" 
                    placeholder="Tell us about your energy needs..."
                    value={formData.message} 
                    onChange={handleFormChange} 
                    className="w-full text-[#4a5565] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] tracking-[-0.5px] sm:tracking-[-0.76px] border-b border-gray-300 pb-2 focus:outline-none focus:border-[#017c54] bg-transparent" 
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-gradient-to-r from-[#00a63e] to-[#007a55] text-white font-medium rounded-[8px] sm:rounded-[10px] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] hover:opacity-90 transition-opacity disabled:opacity-70 font-['Poppins']"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Partnership Form */}
          <div id="partnership" className="mt-12 sm:mt-16 md:mt-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[22px] sm:text-[25px] md:text-[27px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-3 sm:mb-4 leading-6">Partnership Inquiry</h2>
              <p className="text-[15px] sm:text-[17px] md:text-[19px] text-[#4a5565] tracking-[-0.76px]">
                Interested in partnering with 360Watts?<br />
                Whether you're a supplier, installer, or technology partner, let's work together.
              </p>
            </div>

            <div className="border border-[rgba(0,0,0,0.3)] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-5 sm:p-8 md:p-12 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.45)] bg-white max-w-[939px] mx-auto">
              {isPartnershipSubmitted ? (
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#ff6900]" />
                  </div>
                  <h3 className="text-[28px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-4">Thank You!</h3>
                  <p className="text-[17px] text-[#4a5565] mb-2">Your partnership inquiry has been sent successfully.</p>
                  <p className="text-[15px] text-[#4a5565] mb-8">Our partnership team will review your request and get back to you shortly. For immediate discussion, reach us on WhatsApp:</p>

                  <div className="space-y-4 max-w-2xl mx-auto mb-8">
                    <button
                      onClick={sendPartnershipViaWhatsApp}
                      className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Connect via WhatsApp
                    </button>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-4 mb-8 text-left max-w-2xl mx-auto">
                    <p className="text-sm text-gray-600 font-['Poppins'] mb-3">Your inquiry:</p>
                    <p className="text-sm text-neutral-700 font-['Poppins'] whitespace-pre-wrap break-words">{partnershipSubmittedMessage}</p>
                  </div>

                  <button
                    onClick={() => {
                      setIsPartnershipSubmitted(false);
                      setPartnershipData({ name: "", email: "", phone: "", company: "", partnerType: "Supplier", message: "" });
                      setPartnershipSubmittedMessage("");
                    }}
                    className="text-[#ff6900] font-medium hover:underline font-['Poppins']"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnershipSubmit} className="space-y-5 sm:space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-8 md:gap-y-[60px] gap-x-4 sm:gap-x-12 md:gap-x-[200px]">
                    <div>
                      <label className="block text-[15px] sm:text-[17px] md:text-[19px] text-[#0a0a0a] tracking-[-0.76px] mb-1">Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your full name"
                        value={partnershipData.name} 
                        onChange={handlePartnershipChange} 
                        required
                        className="w-full text-[#4a5565] text-[15px] sm:text-[17px] md:text-[19px] tracking-[-0.76px] border-b border-gray-300 pb-2 focus:outline-none focus:border-[#ff6900] bg-transparent" 
                      />
                    </div>
                    <div>
                      <label className="block text-[15px] sm:text-[17px] md:text-[19px] text-[#0a0a0a] tracking-[-0.76px] mb-1">Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="your@email.com"
                        value={partnershipData.email} 
                        onChange={handlePartnershipChange} 
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        className="w-full text-[#4a5565] text-[15px] sm:text-[17px] md:text-[19px] tracking-[-0.76px] border-b border-gray-300 pb-2 focus:outline-none focus:border-[#ff6900] bg-transparent" 
                      />
                    </div>
                    <div>
                      <label className="block text-[15px] sm:text-[17px] md:text-[19px] text-[#0a0a0a] tracking-[-0.76px] mb-1">Phone *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="+91 XXXXX XXXXX"
                        value={partnershipData.phone} 
                        onChange={handlePartnershipChange} 
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                        className="w-full text-[#4a5565] text-[15px] sm:text-[17px] md:text-[19px] tracking-[-0.76px] border-b border-gray-300 pb-2 focus:outline-none focus:border-[#ff6900] bg-transparent" 
                      />
                    </div>
                    <div>
                      <label className="block text-[15px] sm:text-[17px] md:text-[19px] text-[#0a0a0a] tracking-[-0.76px] mb-1">Company/Organization *</label>
                      <input 
                        type="text" 
                        name="company" 
                        placeholder="Company name"
                        value={partnershipData.company} 
                        onChange={handlePartnershipChange} 
                        required
                        className="w-full text-[#4a5565] text-[15px] sm:text-[17px] md:text-[19px] tracking-[-0.76px] border-b border-gray-300 pb-2 focus:outline-none focus:border-[#ff6900] bg-transparent" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[15px] sm:text-[17px] md:text-[19px] text-[#0a0a0a] tracking-[-0.76px] mb-2">Partnership Type *</label>
                    <div className="relative">
                      <select 
                        name="partnerType" 
                        value={partnershipData.partnerType} 
                        onChange={handlePartnershipChange} 
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-[10px] border border-[rgba(0,0,0,0.4)] appearance-none bg-white text-[#4a5565] text-[15px] sm:text-[17px] md:text-[19px] tracking-[-0.76px]"
                      >
                        <option value="Supplier">Supplier</option>
                        <option value="Installer">Installer</option>
                        <option value="Technology Partner">Technology Partner</option>
                        <option value="Distributor">Distributor</option>
                        <option value="Investment Partner">Investment Partner</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 text-[#0a0a0a]/40" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[15px] sm:text-[17px] md:text-[19px] text-[#0a0a0a] tracking-[-0.76px] mb-1">Message (Optional)</label>
                    <textarea 
                      name="message" 
                      placeholder="Tell us about your partnership proposal..."
                      value={partnershipData.message} 
                      onChange={handlePartnershipChange} 
                      rows={4}
                      className="w-full text-[#4a5565] text-[15px] sm:text-[17px] md:text-[19px] tracking-[-0.76px] border border-gray-300 rounded-[10px] p-2.5 sm:p-3 focus:outline-none focus:border-[#ff6900] bg-transparent resize-none" 
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPartnershipSubmitting}
                    className="w-full py-3 sm:py-3.5 md:py-4 text-white font-medium rounded-[10px] text-[15px] sm:text-[17px] md:text-[19px] hover:opacity-90 transition-opacity disabled:opacity-70"
                    style={{ backgroundImage: "linear-gradient(170deg, #fdc700 0%, #ff6900 100%)" }}
                  >
                    {isPartnershipSubmitting ? "Sending..." : "Submit Partnership Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Location Information Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 mb-10 sm:mb-12 md:mb-16 bg-gradient-to-br from-[#f0fdf4] to-[#f7fff9] rounded-[20px] sm:rounded-[26px] md:rounded-[32px] p-5 sm:p-7 md:p-10 border border-[#dcfce7] shadow-[0_8px_30px_rgba(0,166,62,0.08)]">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold text-[#0a0a0a] font-['Urbanist'] tracking-[-1px] mb-2 sm:mb-3">Find Us</h3>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#4a5565] font-['Poppins']">Visit our office in Coimbatore, Tamil Nadu</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
              <div className="md:col-span-3 rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] h-[280px] sm:h-[340px] md:h-[400px]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  loading="lazy"
                  src="https://maps.google.com/maps?q=GRG+INCUBATION+CENTER,+Coimbatore,+Tamil+Nadu&output=embed"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>

              <div className="md:col-span-2 space-y-3 sm:space-y-4 md:space-y-5">
                {/* Address Card */}
                <div className="bg-white rounded-[14px] sm:rounded-[18px] md:rounded-[20px] p-4 sm:p-5 md:p-6 shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-[#e5f3e9] hover:shadow-[0_8px_25px_rgba(0,166,62,0.12)] transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] rounded-[10px] sm:rounded-[12px] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#00a63e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-3.314 0-6 2.239-6 5v1a1 1 0 001 1h10a1 1 0 001-1v-1c0-2.761-2.686-5-6-5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-1">Address</h4>
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#4a5565] font-['Poppins'] leading-relaxed">GRG INCUBATION CENTER<br />Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-[14px] sm:rounded-[18px] md:rounded-[20px] p-4 sm:p-5 md:p-6 shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-[#e5f3e9] hover:shadow-[0_8px_25px_rgba(0,166,62,0.12)] transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#ddefff] to-[#bfdbfe] rounded-[10px] sm:rounded-[12px] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-1">Email</h4>
                      <a href="mailto:hello@360watts.com" className="text-[12px] sm:text-[13px] md:text-[14px] text-[#00a63e] font-['Poppins'] hover:text-[#007a55] transition-colors underline">hello@360watts.com</a>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white rounded-[14px] sm:rounded-[18px] md:rounded-[20px] p-4 sm:p-5 md:p-6 shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-[#e5f3e9] hover:shadow-[0_8px_25px_rgba(0,166,62,0.12)] transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#fef3c7] to-[#fce7f3] rounded-[10px] sm:rounded-[12px] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-1">Hours</h4>
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#4a5565] font-['Poppins']">Mon-Sat: 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=11.037530,77.029499"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#00a63e] to-[#007a55] text-white font-semibold rounded-[12px] sm:rounded-[14px] text-[14px] sm:text-[15px] md:text-base hover:shadow-[0_8px_30px_rgba(0,166,62,0.3)] transition-all hover:scale-105 shadow-[0_4px_15px_rgba(0,166,62,0.2)] font-['Poppins']"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7m0 0l7-7m-7 7h16" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-14 sm:py-18 md:py-24 px-4 sm:px-6 rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] overflow-hidden" style={{
        background: "linear-gradient(135deg, rgba(247, 255, 248, 1) 0%, rgba(240, 253, 244, 1) 50%, rgba(236, 254, 255, 1) 100%)",
        boxShadow: "0 -15px 50px rgba(0, 166, 62, 0.12), 0 -5px 25px rgba(0, 0, 0, 0.1)"
      }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#00a63e] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#017c54] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#3b82f6] rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="w-full max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-14 lg:mb-16 items-start">
            {/* Logo Section - Left Aligned */}
            <div className="col-span-2 sm:col-span-2 md:col-span-4 flex flex-col items-center sm:items-start gap-2 group">
              <div className="relative">
                <img
                  src={APP_IMAGES.footerLogo}
                  alt="360Watts"
                  className="h-[85px] sm:h-[100px] md:h-[120px] w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-md"
                  onError={(e) => { (e.target as HTMLImageElement).src = localFinalLogo; }}
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00a63e]/20 to-[#007a55]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[13px] sm:text-[15px] md:text-[17px] text-[#4a5565] font-['Figtree',sans-serif] tracking-[-0.3px] sm:tracking-[-0.76px] mb-2 sm:mb-3 md:mb-4">Drive what's next.</div>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#4a5565] leading-relaxed max-w-xs">
                  Revolutionizing home energy with smart solar and automation solutions.
                </p>
              </div>
            </div>

            {/* Quick Links - Center */}
            <div className="col-span-1 md:col-span-3 space-y-3 sm:space-y-4 md:space-y-5">
              <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-3 sm:mb-4 md:mb-6 leading-6 relative inline-block">
                Quick Links
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#00a63e] to-[#007a55] rounded-full"></div>
              </h4>
              <nav className="flex flex-col space-y-2 sm:space-y-3">
                {[
                  { label: 'Solutions', href: '#solutions-section' },
                  { label: 'About Us', href: '#about-section' },
                  { label: 'FAQ', href: '#faq-section' },
                  { label: 'Contact', href: '#contact-section' }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[14px] sm:text-[15px] md:text-[16px] text-[#4a5565] hover:text-[#017c54] transition-all duration-200 font-medium leading-6 sm:leading-7 group flex items-center"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-[#00a63e] mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                    {link.label}
                    <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact - Center Right */}
            <div className="col-span-1 md:col-span-3 space-y-3 sm:space-y-4 md:space-y-5">
              <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-3 sm:mb-4 md:mb-6 leading-6 relative inline-block">
                Contact Us
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#00a63e] to-[#007a55] rounded-full"></div>
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:hello@360watts.com"
                  className="flex items-center gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#4a5565] hover:text-[#017c54] transition-colors duration-200 font-medium leading-6 sm:leading-7 group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#00a63e]/10 to-[#017c54]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a63e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-200 text-[12px] sm:text-[14px] md:text-base">hello@360watts.com</span>
                </a>
                <a 
                  href="tel:9087610051"
                  className="flex items-center gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#4a5565] font-medium leading-6 sm:leading-7 hover:text-[#00a63e] transition-colors group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#00a63e]/10 to-[#017c54]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00a63e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-[12px] sm:text-[14px] md:text-base">+91-9087610051</span>
                </a>
              </div>
            </div>

            {/* Social Media - Right Aligned */}
            <div className="col-span-2 sm:col-span-2 md:col-span-2 space-y-3 sm:space-y-4 md:space-y-5">
              <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#0a0a0a] font-['Urbanist'] mb-3 sm:mb-4 md:mb-6 leading-6 relative inline-block">
                Follow Us
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#00a63e] to-[#007a55] rounded-full"></div>
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a
                  href="https://www.instagram.com/360.watts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#1e2939] to-[#334155] rounded-xl sm:rounded-2xl flex items-center justify-center hover:shadow-2xl hover:shadow-[#1e2939]/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                  title="Instagram"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a63e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:brightness-125 transition-all duration-200 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/360watts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#1e2939] to-[#334155] rounded-xl sm:rounded-2xl flex items-center justify-center hover:shadow-2xl hover:shadow-[#1e2939]/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                  title="Facebook"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a63e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:brightness-125 transition-all duration-200 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://in.linkedin.com/company/360watts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#1e2939] to-[#334155] rounded-xl sm:rounded-2xl flex items-center justify-center hover:shadow-2xl hover:shadow-[#1e2939]/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                  title="LinkedIn"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a63e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:brightness-125 transition-all duration-200 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="relative pt-6 sm:pt-7 md:pt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-200/60"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-[#f7fff9] via-white to-[#f0fdf4] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full shadow-md border-2 border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <p className="text-[12px] sm:text-[13px] md:text-[15px] text-[#4a5565] font-semibold tracking-wide">© 2025 Matterless Technologies (OPC) Private Limited. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
