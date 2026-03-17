import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex justify-between items-center py-5">
          
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold">
              U
            </div>

            <div className="leading-tight">
              <p className="text-blue-700 font-semibold tracking-wide">
                UDAAN
              </p>
              <p className="text-[11px] text-gray-500">
                Fetal Medicine & Fertility Clinic
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600 font-medium">
            
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/doctors" className="hover:text-blue-600">Doctors</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>

            <Link to="/appointment">
              <button className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm hover:scale-105 transition">
                Book Appointment
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4 text-sm text-gray-600 font-medium">
            
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

            <Link to="/appointment" onClick={() => setIsOpen(false)}>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm w-full">
                Book Appointment
              </button>
            </Link>

          </div>
        )}
      </Container>
    </div>
  );
}