import Container from "./Container";
import { Heart, Sparkles, Stethoscope } from "lucide-react";
import { TypeAnimation } from "react-type-animation"; 
import { Link } from "react-router-dom";

export default function Hero() {
  const stats = [
    { icon: Heart, value: "50+", label: "Happy Families" },
    { icon: Sparkles, value: "50%", label: "Success Rate" },
    { icon: Stethoscope, value: "7+", label: "Expert Doctors" },
  ];

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
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />
      
      <Container>
        <div className="flex items-center justify-center py-12 sm:py-16 md:py-28 lg:py-30">
          
          <div className="max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] text-center px-4 sm:px-6">
            
            {/* Heading → KEEP Times New Roman */}
            <TypeAnimation
              sequence={[
                "Your Journey to Parenthood Starts Here",
                2200,
                "",
                500,
              ]}
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
              preRenderFirstString={false}
              className="font-['Times_New_Roman',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15]"
            />

            {/* Paragraph → Quicksand */}
            <p className="text-sm sm:text-base md:text-lg text-white/95 font-['Quicksand'] leading-relaxed mb-6 sm:mb-8 mt-4">
              1st Dedicated Fetal Medicine & Fertility Clinic in Purba Barddhaman. 
              Advanced fertility & fetal medicine treatments with personalized care 
              and expert guidance. State-of-the-art facilities and experienced 
              specialists dedicated to helping you achieve your dream of parenthood.
            </p>

            {/* STATS */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 px-4 py-6 mb-4">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <Icon className="w-10 h-10 opacity-90 bg-white/20 rounded-lg p-2" />
                    <div>
                      <h3 className="text-lg font-semibold font-['Quicksand']">
                        {item.value}
                      </h3>
                      <p className="text-sm opacity-80 font-['Quicksand']">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/appointment">
                <button className="w-full sm:w-auto bg-white text-teal-600 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-['Quicksand'] hover:bg-gray-100 transition">
                  Book Consultation
                </button>
              </Link>

              <Link to="/about">
                <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium font-['Quicksand'] hover:bg-white/10 transition">
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
