import Container from "./Container";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white">
      
      <Container>
        <div className="flex items-center justify-between py-24">
          
          {/* LEFT */}
          <div className="max-w-[520px]">
            
            <h1 className="text-[52px] font-extrabold leading-[1.15] mb-6">
              Your Journey to Parenthood Starts Here
            </h1>

            <p className="text-[15px] text-white/90 leading-relaxed mb-8">
              1st Dedicated Fetal Medicine & Fertility Clinic in Purba Barddhaman. 
              Advanced fertility & fetal medicine treatments with personalized care 
              and expert guidance. State-of-the-art facilities and experienced 
              specialists dedicated to helping you achieve your dream of parenthood.
            </p>

            <div className="flex gap-4">
              <Link to="/appointment">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-full text-sm font-semibold">
                  Book Consultation
                </button>
              </Link>

              <Link to="/about">
                <button className="border border-white px-6 py-3 rounded-full text-sm font-medium">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-[400px] h-[280px] bg-white/10 mr-10 border border-white/20 rounded-lg backdrop-blur-sm">
          <img 
            src="https://images.unsplash.com/photo-1574637428470-7ede5332d44e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="clinic-img" 
            className="w-full h-full object-cover rounded-lg"
          />
          </div>

        </div>
      </Container>
    </div>
  );
}