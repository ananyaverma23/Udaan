import Container from "./Container";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div 
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: "url(/Animation (3).mp4)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Video */}
      <video 
        src="/Animation (3).mp4" 
        autoPlay 
        loop 
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      
      {/* Dark Overlay to hide watermark and darken background */}
      <div className="absolute inset-0 bg-black/40 -z-10" />
      
      <Container>
        <div className="flex items-center justify-center py-12 sm:py-16 md:py-28 lg:py-30">
          
          {/* CENTER CONTENT */}
          <div className="max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] text-center px-4 sm:px-6">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-4 sm:mb-6">
              Your Journey to Parenthood Starts Here
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed mb-6 sm:mb-8">
              1st Dedicated Fetal Medicine & Fertility Clinic in Purba Barddhaman. 
              Advanced fertility & fetal medicine treatments with personalized care 
              and expert guidance. State-of-the-art facilities and experienced 
              specialists dedicated to helping you achieve your dream of parenthood.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/appointment">
                <button className="w-full sm:w-auto bg-white text-teal-600 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-100 transition">
                  Book Consultation
                </button>
              </Link>

              <Link to="/about">
                <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-white/10 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}

