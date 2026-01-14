import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import { APP_IMAGES } from "../../lib/imageRegistry";

const storySteps = [
  {
    title: "We're on a mission.",
    body: "To revolutionize how homes consume and manage energy.",
    align: "left",
    image: APP_IMAGES.aboutWalk,
  },
  {
    title: "Why should our homes depend on others for energy when the sun gives us everything we need?",
    body: "From that spark, 360watts was born.",
    align: "right",
    image: APP_IMAGES.aboutForSale,
  },
  {
    title: "A vision to make every home energy independent and in sync with life.",
    body: "We began with solar, giving people the power to create their own clean energy.",
    align: "left",
    image: APP_IMAGES.aboutSmartHome,
  },
  {
    title: "Then came the next step: smart homes that know when to save, when to run, and maximise solar usage.",
    body: "Energy flows freely, and independence is powered by intelligence.",
    align: "right",
    image: APP_IMAGES.aboutIdea,
  },
];

const teamMembers = [
  { name: "Srinath Krishnaswamy", role: "CEO & Team Lead" },
  { name: "Hariprasad", role: "Solar Design Engineer" },
  { name: "Parvathi Jayasankar", role: "Product Designer" },
  { name: "Selva Nancy", role: "IoT Developer" },
  { name: "Rajeev Nair", role: "Data/ML Engineer Intern" },
];

export const About = (): JSX.Element => {
  return (
    <div className="bg-[#f7fff9] min-h-screen text-[#0a0a0a]">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={APP_IMAGES.aboutHero}
          alt="Solar hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />
        <div className="relative z-10 max-w-5xl px-6 pt-28 md:pt-32 lg:pt-36 flex items-start">
          <div className="text-white space-y-3 max-w-xl">
            <p className="text-lg font-['Poppins']">360watts.com | solar + smart home solutions</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight">
              We're on a mission.
            </h1>
            <p className="text-base md:text-lg font-['Poppins'] text-white/90">
              To revolutionize how homes consume and manage energy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-[#f7fff9]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-['Urbanist'] mb-2">Our Story.</h2>
            <p className="text-lg text-[#4a5565] font-['Poppins']">It all started with a question...</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#9ee2b4] via-[#9ee2b4]/60 to-transparent" />

            <div className="space-y-16">
              {storySteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${step.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12 relative`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="bg-white shadow-sm border border-[#e5f3e9] rounded-2xl p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold font-['Urbanist'] mb-3 leading-snug">{step.title}</h3>
                      <p className="text-[#4a5565] font-['Poppins'] text-base md:text-lg leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={step.image}
                      alt="Story visual"
                      className="w-full max-w-md object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold font-['Urbanist']">The sun started it.</h3>
            <p className="text-lg text-[#4a5565] font-['Poppins']">We are just making it smarter.</p>
            <div className="flex flex-col items-center gap-3 pt-4">
              <img src={APP_IMAGES.aboutLogo} alt="360watts logo" className="w-28 h-auto" />
              <p className="text-[#244d65] font-['Figtree'] text-lg">360watts</p>
              <p className="text-[#244d65] font-['Figtree'] text-base">Drive what's next.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-[#f7fff9]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold font-['Urbanist']">Meet Our Team</h3>
            <p className="text-lg text-[#4a5565] font-['Poppins']">The faces behind the innovation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-[#e8f5ed] flex items-center justify-center">
                  <img src={APP_IMAGES.aboutAvatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm md:text-base font-semibold font-['Urbanist'] leading-tight">{member.name}</p>
                <p className="text-xs md:text-sm text-[#4a5565] font-['Poppins'] leading-snug">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto border-2 border-[#00a63e] rounded-[20px] bg-white shadow-sm p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-['Urbanist'] mb-3">Partner with Us</h3>
          <p className="text-lg text-[#4a5565] font-['Poppins'] mb-6">
            Join us in revolutionizing home energy. Whether you're a supplier, installer, or technology partner, let's work together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] bg-gradient-to-r from-[#00a63e] to-[#007a55] text-white font-semibold hover:opacity-90 transition"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer bar (light gradient) */}
      <footer className="px-6 pb-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#e8f5ed] to-[#edf7ef] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-16 h-12 relative overflow-hidden">
              <img src={APP_IMAGES.aboutLogo} alt="360watts logo" className="absolute inset-0 w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-base font-bold text-[#0a0a0a] font-['Urbanist'] leading-tight">360watts</p>
              <p className="text-xs text-[#4a5565] font-['Poppins']">Drive what's next.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-[#4a5565] font-['Poppins']">
            <p className="text-[#0a0a0a] font-semibold text-base">Contact us</p>
            <a href="mailto:hello@360watts.com" className="hover:text-[#017c54]">hello@360watts.com</a>
            <p>+91-XXXX-XXX-XXX</p>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <p className="text-base font-semibold text-[#0a0a0a] font-['Urbanist']">Follow us</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1e2939] flex items-center justify-center hover:bg-[#017c54] transition">
                <img src={APP_IMAGES.aboutSocialX} alt="X" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1e2939] flex items-center justify-center hover:bg-[#017c54] transition">
                <img src={APP_IMAGES.aboutSocialIn} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
