import Container from "../components/Container";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      // Initialize EmailJS (replace with your public key)
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Send email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your EmailJS Template ID
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "info@udaan.com",
        }
      );

      setStatusMessage("Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#f6f8fc]">

      {/* HERO */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-14 md:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-[28px] md:text-[40px] font-bold font-['Quicksand'] tracking-wide mb-4">
              Contact Us
            </h1>

            <p className="text-white/90 text-sm md:text-base font-['Quicksand'] tracking-wide">
              Have questions about our fertility & fetal medicine treatments? We're here to help.
            </p>
          </div>
        </Container>
      </div>

      {/* MAP */}
      <div className="py-10 md:py-14">
        <Container>
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <h2 className="text-lg font-semibold font-['Quicksand'] tracking-wide mb-4">
              Our Location
            </h2>

            <div className="w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=70%20BC%20Rd%2C%20Khosbagan%2C%20Bardhaman%2C%20West%20Bengal%20713104&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Container>
      </div>

      {/* FORM + INFO */}
      <div className="pb-12 md:pb-16">
        <Container>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            {/* LEFT FORM */}
            <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">

              <h2 className="text-lg font-semibold mb-4">
                Send us a Message
              </h2>

              <form className="flex flex-col h-full space-y-4" onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-2 text-sm font-['Quicksand'] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-2 text-sm font-['Quicksand'] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-2 text-sm font-['Quicksand'] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-2 text-sm font-['Quicksand'] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none flex-grow"
                ></textarea>

                {statusMessage && (
                  <div className={`text-sm p-2 rounded-md ${statusMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-teal-600 text-white py-2.5 rounded-md text-sm font-medium font-['Quicksand'] hover:bg-teal-600 transition mt-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-6 h-full">

              {/* CONTACT INFO */}
              <div className="bg-white rounded-xl shadow-md p-6 flex-1">

                <h2 className="text-lg font-semibold mb-4">
                  Contact Information
                </h2>

                <div className="space-y-4 text-sm text-gray-600 font-['Quicksand'] tracking-wide">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-teal-600 mt-1" size={18} />
                    <p>
                      70 BC Rd, Khosbagan, Bardhaman, West Bengal 713104
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-teal-600" size={18} />
                    <p>+91 7866819192 / +91 6297391710</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-teal-600" size={18} />
                    <p>info@udaan.com</p>
                  </div>

                </div>

              </div>

              {/* WORKING HOURS */}
              <div className="bg-white rounded-xl shadow-md p-6">

                <h2 className="text-lg font-semibold font-['Quicksand'] tracking-wide mb-4">
                  Working Hours
                </h2>

                <div className="flex justify-between text-sm text-gray-600 font-['Quicksand'] tracking-wide">
                  <span>Monday - Sunday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>

              </div>

            </div>

          </div>

        </Container>
      </div>

    </div>
  );
}


