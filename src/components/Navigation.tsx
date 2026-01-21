import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", sectionId: "hero-section" },
  { label: "Solutions", href: "/solutions", sectionId: "solutions-section" },
  { label: "About Us", href: "/about", sectionId: "about-section" },
  { label: "FAQ", href: "/faq", sectionId: "faq-section" },
  { label: "Contact", href: "/contact", sectionId: "contact-section" },
];

interface NavigationProps {
  transparent?: boolean;
}

export const Navigation = ({ transparent = false }: NavigationProps): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If on homepage, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If on another page, navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  const showTransparent = transparent && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-black/20 backdrop-blur-sm py-4"
          : "bg-white/95 backdrop-blur-md shadow-lg py-3"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={(e) => handleNavClick(e, "hero-section")}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <img
            src="/final-logo-png-4x-2.png"
            alt="360Watts"
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span
              className={`font-extrabold text-base sm:text-lg font-['Biryani'] tracking-tight select-none`}
              style={{ fontFamily: 'Biryani, sans-serif', fontWeight: 800 }}
            >
              <span style={{ color: '#254D65' }}>360</span><span style={{ color: '#F07522' }}>watts</span>
            </span>
            
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.sectionId}`}
                onClick={(e) => handleNavClick(e, item.sectionId)}
                className={`font-medium font-['Poppins'] transition-colors text-sm xl:text-base cursor-pointer ${
                  showTransparent
                    ? "text-white hover:text-white/80"
                    : "text-neutral-700 hover:text-[#017c54]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <a
          href="#solar-calculator"
          onClick={(e) => handleNavClick(e, "solar-calculator")}
          className="hidden lg:inline-flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 bg-gradient-to-r from-[#00a63e] to-[#017c54] text-white font-medium rounded-lg hover:opacity-90 transition-all font-['Poppins'] text-sm xl:text-base cursor-pointer"
          aria-label="Calculate your solar savings"
        >
          Calculate Savings <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${showTransparent ? "text-white" : "text-neutral-950"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${showTransparent ? "text-white" : "text-neutral-950"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-1">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.sectionId}`}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className="block px-4 py-3 rounded-xl font-medium font-['Poppins'] transition-colors cursor-pointer text-neutral-700 hover:bg-gray-50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-gray-100">
            <a
              href="#solar-calculator"
              onClick={(e) => handleNavClick(e, "solar-calculator")}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#00a63e] to-[#017c54] text-white font-semibold rounded-xl font-['Poppins'] cursor-pointer"
              aria-label="Calculate your solar savings"
            >
              Calculate Savings <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
