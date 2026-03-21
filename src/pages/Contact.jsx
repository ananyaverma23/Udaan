import Container from "../components/Container";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#f6f8fc]">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-14 md:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-[28px] md:text-[40px] font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-white/90 text-sm md:text-base">
              Have questions about our fertility & fetal medicine treatments? We're here to help.
            </p>
          </div>
        </Container>
      </div>

      {/* MAP */}
      <div className="py-10 md:py-14">
        <Container>
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">
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

              <form className="flex flex-col h-full space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none flex-grow"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition mt-auto"
                >
                  Send Message
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

                <div className="space-y-4 text-sm text-gray-600">

                  <div className="flex items-start gap-3">
                    <MapPin className="text-blue-600 mt-1" size={18} />
                    <p>
                      70 BC Rd, Khosbagan, Bardhaman, West Bengal 713104
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={18} />
                    <p>+91 7866819192 / +91 6297391710</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600" size={18} />
                    <p>info@udaan.com</p>
                  </div>

                </div>

              </div>

              {/* WORKING HOURS */}
              <div className="bg-white rounded-xl shadow-md p-6">

                <h2 className="text-lg font-semibold mb-4">
                  Working Hours
                </h2>

                <div className="flex justify-between text-sm text-gray-600">
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