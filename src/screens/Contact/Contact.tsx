import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Navigation as NavigationIcon, Copy, MessageCircle } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Navigation } from "../../components/Navigation";

// Fix for default marker icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Coimbatore coordinates
const COIMBATORE_POSITION: [number, number] = [11.0168, 76.9558];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@360watts.com",
    description: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91-XXXX-XXX-XXX",
    description: "Mon-Sat, 9 AM - 6 PM IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Coimbatore, Tamil Nadu",
    description: "By appointment only",
  },
];

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createMessage = () => {
    return `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*City:* ${formData.city}\n` +
      `*Interest:* ${formData.interest}\n` +
      (formData.message ? `*Message:* ${formData.message}` : '');
  };

  const sendViaWhatsApp = () => {
    const whatsappNumber = "917350635998";
    const messageText = createMessage();
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const sendViaEmail = async () => {
    const messageText = createMessage();
    const mailtoUrl = `mailto:hello@360watts.com?subject=New Contact Form Submission from ${formData.name}&body=${encodeURIComponent(messageText)}`;
    window.location.href = mailtoUrl;
  };

  const copyToClipboard = () => {
    const messageText = createMessage();
    navigator.clipboard.writeText(messageText).then(() => {
      alert('Message copied to clipboard! You can now paste it anywhere.');
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const messageText = createMessage();
    setSubmittedMessage(messageText);
    
    // Wait briefly for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#f7fff8] min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#017c54]/10 to-[#00a63e]/5">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-950 font-['Urbanist'] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-['Poppins']">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#017c54] transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-[#017c54] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 font-['Urbanist'] mb-2">
                  {info.title}
                </h3>
                <p className="text-[#017c54] font-medium font-['Poppins'] mb-1">{info.value}</p>
                <p className="text-sm text-neutral-500 font-['Poppins']">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#017c54]" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-950 font-['Urbanist'] mb-4">
                  Message Ready!
                </h2>
                <p className="text-lg text-neutral-600 font-['Poppins'] mb-8">
                  Choose how you'd like to send your message:
                </p>
                
                <div className="space-y-4 max-w-2xl mx-auto mb-8">
                  {/* WhatsApp Option */}
                  <button
                    onClick={sendViaWhatsApp}
                    className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                  
                  {/* Email Option */}
                  <button
                    onClick={sendViaEmail}
                    className="w-full flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-4 rounded-xl transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Send via Email
                  </button>
                  
                  {/* Copy to Clipboard Option */}
                  <button
                    onClick={copyToClipboard}
                    className="w-full flex items-center justify-center gap-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-4 rounded-xl transition-colors"
                  >
                    <Copy className="w-5 h-5" />
                    Copy Message
                  </button>
                </div>
                
                <div className="bg-gray-100 rounded-xl p-4 mb-8 text-left max-w-2xl mx-auto">
                  <p className="text-sm text-gray-600 font-['Poppins'] mb-3">Your message:</p>
                  <p className="text-sm text-neutral-700 font-['Poppins'] whitespace-pre-wrap break-words">{submittedMessage}</p>
                </div>
                
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", city: "", interest: "", message: "" });
                    setSubmittedMessage("");
                  }}
                  className="text-[#017c54] font-medium hover:underline font-['Poppins']"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-neutral-950 font-['Urbanist'] mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-neutral-600 font-['Poppins']">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 font-['Poppins'] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017c54] focus:border-transparent transition-all font-['Poppins']"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 font-['Poppins'] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017c54] focus:border-transparent transition-all font-['Poppins']"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 font-['Poppins'] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017c54] focus:border-transparent transition-all font-['Poppins']"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-neutral-700 font-['Poppins'] mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017c54] focus:border-transparent transition-all font-['Poppins']"
                        placeholder="Your city"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 font-['Poppins'] mb-2">
                      Interested In *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017c54] focus:border-transparent transition-all font-['Poppins'] cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="solar">Solar Solutions</option>
                      <option value="smart-home">Smart Home Solutions</option>
                      <option value="both">Both</option>
                      <option value="partnership">Partnership Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 font-['Poppins'] mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017c54] focus:border-transparent transition-all font-['Poppins'] resize-none"
                      placeholder="Tell us about your energy needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#00a63e] to-[#017c54] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 font-['Poppins'] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-neutral-950 font-['Urbanist'] mb-3">
              Find Us
            </h2>
            <p className="text-neutral-600 font-['Poppins']">
              Visit our office in Coimbatore, Tamil Nadu
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <MapContainer
              center={COIMBATORE_POSITION}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "450px", width: "100%" }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={COIMBATORE_POSITION} icon={customIcon}>
                <Popup>
                  <div className="text-center p-2">
                    <h3 className="font-bold text-lg text-[#017c54] mb-2">360watts</h3>
                    <p className="text-sm text-gray-600 mb-2">Coimbatore, Tamil Nadu</p>
                    <p className="text-xs text-gray-500">Mon-Sat: 9 AM - 6 PM IST</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${COIMBATORE_POSITION[0]},${COIMBATORE_POSITION[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm text-[#017c54] hover:underline"
                    >
                      <NavigationIcon className="w-3 h-3" />
                      Get Directions
                    </a>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${COIMBATORE_POSITION[0]},${COIMBATORE_POSITION[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#017c54] text-white rounded-xl hover:bg-[#015c3e] transition-colors font-['Poppins']"
            >
              <NavigationIcon className="w-5 h-5" />
              Open in Google Maps
            </a>
            <p className="text-neutral-500 font-['Poppins'] text-sm">
              Scroll to zoom • Drag to explore
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#f7fff8]">
        <div className="w-full max-w-7xl mx-auto text-center">
          <p className="text-neutral-600 font-['Poppins']">
            © 2025 360watts. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
