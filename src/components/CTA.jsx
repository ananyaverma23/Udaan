import Container from "./Container";
import { Link } from "react-router-dom";
import { Calendar, Phone, Star } from "lucide-react";

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-[#1E293B] py-14 md:py-20 text-white">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          {/* HEADING */}
          <h2 className="text-[28px] sm:text-[34px] md:text-[44px] font-bold mb-4 leading-tight">
            Ready to Start Your Journey?
          </h2>

          {/* SUBTEXT */}
          <p className="text-[15px] sm:text-[17px] md:text-[18px] text-white/90 mb-8">
            Schedule a consultation with our fertility experts today.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">

            {/* PRIMARY */}
            <Link to="/appointment" className="flex items-center gap-2 bg-white text-teal-600 px-6 sm:px-7 py-3 rounded-full font-medium text-[14px] sm:text-[15px] hover:scale-105 transition">
              <Calendar size={18} />
              Book Appointment
            </Link>

            {/* SECONDARY */}
            {/* <button className="flex items-center gap-2 border border-white px-6 sm:px-7 py-3 rounded-full font-medium text-[14px] sm:text-[15px] hover:bg-white hover:text-teal-600 transition">
              <Phone size={18} />
              Call Us
            </button> */}

          </div>

          {/* FOOT NOTE */}
          <div className="flex items-center justify-center gap-2 text-[14px] sm:text-[15px] text-white/90">
            <Star size={16} className="text-yellow-300" />
            <span>24/7 Services available</span>
          </div>

        </div>

      </Container>
    </div>
  );
}



