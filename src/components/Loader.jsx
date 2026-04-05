import { useState, useEffect } from "react";
import UdaanLogo from "../assets/UdaanLogo.png";

const LOADER_MESSAGES = [
  "24/7 Support Available",
  "State-of-the-art Facilities",
  "Expert Medical Care",
  "Your Trust, Our Commitment",
];

export default function Loader({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinished, 500); 
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onFinished]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % LOADER_MESSAGES.length);
    }, 2000);
    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-4 overflow-hidden">
      
      <div className="relative flex items-center justify-center mb-10 sm:mb-12">
        <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border-[3px] border-dotted border-[#dbe3bc] animate-[spin_10s_linear_infinite]"></div>
        
        <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#F0F7F4] animate-pulse"></div>

        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white shadow-[0_0_40px_rgba(0,0,0,0.08)] flex items-center justify-center p-6 border border-gray-50">
          <img 
            src={UdaanLogo} 
            alt="UDAAN Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="text-center w-full max-w-xs sm:max-w-md">
        <h1 className="text-4xl sm:text-5xl font-bold font-['Quicksand'] text-teal-600 tracking-tight mb-2">
          UDAAN
        </h1>
        <p className="text-gray-500 text-sm sm:text-base font-medium font-['Quicksand'] mb-8">
          Your Journey to Parenthood Starts Here
        </p>
        
        <div className="h-10 overflow-hidden mb-10">
          <div 
            className="transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${textIndex * 40}px)` }}
          >
            {LOADER_MESSAGES.map((msg, idx) => (
              <div key={idx} className="h-10 flex items-center justify-center">
                <span className="bg-[#F0F7F4] text-teal-600 px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-['Quicksand'] border border-[#F0F7F4] shadow-sm">
                  {msg}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full px-6">
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-3">
            <div 
              className="h-full bg-gradient-to-r from-teal-600 to-[#0D9488] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-[10px] sm:text-xs font-bold font-['Quicksand'] uppercase tracking-[0.2em]">
            Loading... {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
