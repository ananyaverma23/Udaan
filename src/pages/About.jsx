import Container from "../components/Container";
import { ShieldCheck, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#f6f8fc]">

      {/* HERO */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-4">
              About UDAAN
            </h1>

            <p className="text-white/90 text-[15px] md:text-[18px] leading-relaxed">
              1st Dedicated Fetal Medicine & Fertility Clinic in Purba Bardhaman.
              Your trusted partner on the journey to parenthood.
            </p>
          </div>
        </Container>
      </div>

      {/* 24/7 CARD */}
      <div className="mt-[-30px] md:mt-[-53px]">
        <Container>
          <div className="bg-white rounded-xl shadow-md py-6 text-center max-w-md mx-auto">
            <p className="text-teal-600 text-[28px] font-bold">24/7</p>
            <p className="text-gray-500 text-sm">Support Available</p>
          </div>
        </Container>
      </div>

      {/* MISSION */}
      <div className="py-10 md:py-14">
        <Container>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-teal-600 text-[20px] md:text-[24px] font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed">
              At UDAAN, we are dedicated to helping couples and individuals achieve
              their dream of parenthood. Our mission is to provide compassionate,
              personalized care using the most advanced reproductive technologies
              while maintaining the highest standards of medical excellence. We
              believe in making fertility treatments accessible, transparent, and
              successful for all our patients.
            </p>
          </div>
        </Container>
      </div>

      {/* EXPERTISE */}
      <div className="pb-12 md:pb-16">
        <Container>

          <h2 className="text-center text-teal-600 text-[22px] md:text-[30px] font-semibold mb-10">
            Our Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Sparkles className="text-teal-600" size={20} />
              </div>

              <h3 className="font-semibold text-[16px] mb-2">
                Advanced Technology
              </h3>

              <p className="text-gray-600 text-[14px]">
                State-of-the-art facilities and cutting-edge reproductive
                technologies to maximize success rates.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Users className="text-[#D4AF37]" size={20} />
              </div>

              <h3 className="font-semibold text-[16px] mb-2">
                Expert Team
              </h3>

              <p className="text-gray-600 text-[14px]">
                Board-certified specialists with years of experience in
                reproductive and fetal medicine.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <ShieldCheck className="text-green-600" size={20} />
              </div>

              <h3 className="font-semibold text-[16px] mb-2">
                Personalized Care
              </h3>

              <p className="text-gray-600 text-[14px]">
                Tailored treatment plans designed to meet your unique needs and
                circumstances.
              </p>
            </div>

          </div>

        </Container>
      </div>

      {/* CTA */}
      <div className="pb-12 md:pb-16">
        <Container>
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl text-white text-center py-10 md:py-12 px-4">

            <h2 className="text-[22px] md:text-[30px] font-semibold mb-3">
              Ready to Start Your Journey?
            </h2>

            <p className="text-white/90 text-[14px] md:text-[16px] mb-6">
              Schedule a consultation with our fertility specialists today.
            </p>

            <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Book Consultation
            </button>

          </div>
        </Container>
      </div>

    </div>
  );
}


