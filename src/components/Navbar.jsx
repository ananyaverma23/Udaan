import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import ServicesDropdown from "./ServicesDropdown";
import { ChevronDown, Plus, Minus, Menu, X } from "lucide-react";
import UdaanLogo from "../assets/UdaanLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  
  // Mobile Accordion States
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileLevel1, setMobileLevel1] = useState(null);
  const [mobileLevel2, setMobileLevel2] = useState(null);

  const servicesRef = useRef();

  const menuData = [
    {
      name: "Infertility Services",
      subItems: [
        { name: "Fertility Testing", path: "/services/fertility-testing" },
        { name: "IUI", path: "/services/iui" },
        { name: "IVF", path: "/services/ivf" },
        {
          name: "Additional Fertility Services",
          children: [
            { name: "Egg Freezing", path: "/services/egg-freezing" },
            { name: "Sperm Banking", path: "/services/sperm-banking" },
            { name: "Nutritional Guidance", path: "/services/nutrition" },
          ],
        },
      ],
    },
    {
      name: "Fetal Medicine Services",
      subItems: [
        {
          name: "Obstetric Scan",
          children: [
            { name: "Nuchal Translucency Scan", path: "/services/nt-scan" },
            { name: "Anomaly Scan", path: "/services/anomaly-scan" },
            { name: "Fetal Growth Scan", path: "/services/growth-scan" },
            { name: "Fetal Doppler Scan", path: "/services/doppler-scan" },
            { name: "Fetal Echo Scan", path: "/services/fetal-echo" },
            { name: "Fetal Neurosonography", path: "/services/neurosonography" },
            { name: "Multiple Pregnancies Scan", path: "/services/multiple-pregnancy" },
          ],
        },
        {
          name: "Interventional Procedures",
          children: [
            { name: "Amniocentesis", path: "/services/amniocentesis" },
            { name: "Chorionic Villus Sampling", path: "/services/cvs" },
            { name: "Selective Fetal Reductions", path: "/services/fetal-reductions" },
            { name: "NIPT", path: "/services/nipt" },
          ],
        },
      ],
    },
    {
      name: "Gynaecology Scans",
      subItems: [
        { name: "Female Pelvic Scan", path: "/services/pelvic-scan" },
        { name: "Follicular Study Scan", path: "/services/follicular-study" },
      ],
    },
    {
      name: "Genetic Counselling",
      path: "/services/genetic-counselling",
    },
    {
      name: "Multispeciality OPD Services",
      path: "/services/multispeciality-opd",
    },
  ];

  useEffect(() => {
    const handleClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const mobileTextStyle = "text-[16px] text-gray-700 font-medium";

  return (
    <div className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex justify-between items-center py-5">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={UdaanLogo} alt="Udaan logo" className="w-10 h-10 sm:w-11 sm:h-11 object-contain" />
            <div className="leading-tight">
              <p className="text-blue-700 font-semibold tracking-wide">UDAAN</p>
              <p className="text-[11px] text-gray-500">Fetal Medicine & Fertility Clinic</p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-7 text-[16px] text-gray-600 font-medium">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <div ref={servicesRef} className="relative">
              <button onClick={() => setShowServices(!showServices)} className="flex items-center gap-1 hover:text-blue-600 transition">
                Services <ChevronDown size={16} className={showServices ? "rotate-180" : ""} />
              </button>
              {showServices && <div className="absolute top-12 left-0 z-50"><ServicesDropdown /></div>}
            </div>
            <Link to="/about" className="hover:text-blue-600 transition">About Us</Link>
            <Link to="/doctors" className="hover:text-blue-600 transition">Our Doctors</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            
            {/* Redirects to the internal Appointment Page */}
            <Link to="/appointment">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm hover:scale-105 transition shadow-lg shadow-blue-50">
                Book Appointment
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-5 pb-8 animate-in slide-in-from-top-2 duration-300">
            <Link to="/" onClick={() => setIsOpen(false)} className={mobileTextStyle}>Home</Link>

            {/* MAIN SERVICES TOGGLE */}
            <div className="flex flex-col">
              <div 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex justify-between items-center cursor-pointer mb-2"
              >
                <p className={`${mobileTextStyle} transition-colors ${isServicesOpen ? "text-blue-600" : ""}`}>
                  Our Services
                </p>
                {isServicesOpen ? <Minus size={18} className="text-blue-600" /> : <Plus size={18} className="text-gray-400" />}
              </div>
              
              {isServicesOpen && (
                <div className="flex flex-col gap-4 mt-2 animate-in fade-in duration-300">
                  {menuData.map((item) => (
                    <div key={item.name} className="border-b border-gray-50 pb-3">
                      <div 
                        onClick={() => setMobileLevel1(mobileLevel1 === item.name ? null : item.name)}
                        className="flex justify-between items-center cursor-pointer"
                      >
                        <span className={`${mobileTextStyle} transition-colors ${mobileLevel1 === item.name ? "text-blue-600" : ""}`}>
                          {item.name}
                        </span>
                        {item.subItems ? (
                          mobileLevel1 === item.name ? <Minus size={18} className="text-blue-600" /> : <Plus size={18} className="text-gray-400" />
                        ) : (
                          <Link to={item.path || "/"} onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-blue-500">Visit</Link>
                        )}
                      </div>

                      {item.subItems && mobileLevel1 === item.name && (
                        <div className="pl-4 mt-4 flex flex-col gap-4 animate-in fade-in slide-in-from-left-1 duration-200">
                          {item.subItems.map((sub) => (
                            <div key={sub.name}>
                              <div 
                                onClick={() => sub.children ? setMobileLevel2(mobileLevel2 === sub.name ? null : sub.name) : setIsOpen(false)}
                                className="flex justify-between items-center cursor-pointer"
                              >
                                {sub.path ? (
                                  <Link to={sub.path} className={`${mobileTextStyle} text-gray-500 w-full`}>{sub.name}</Link>
                                ) : (
                                  <span className={`${mobileTextStyle} text-gray-500 ${mobileLevel2 === sub.name ? "text-blue-500" : ""}`}>{sub.name}</span>
                                )}
                                {sub.children && (mobileLevel2 === sub.name ? <Minus size={16} /> : <Plus size={16} />)}
                              </div>

                              {sub.children && mobileLevel2 === sub.name && (
                                <div className="pl-4 mt-3 flex flex-col gap-3 border-l-2 border-blue-50 animate-in slide-in-from-left-1">
                                  {sub.children.map((child) => (
                                    <Link 
                                      key={child.name} 
                                      to={child.path} 
                                      onClick={() => setIsOpen(false)}
                                      className={`${mobileTextStyle} text-gray-500 hover:text-blue-400`}
                                    >
                                      • {child.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" onClick={() => setIsOpen(false)} className={mobileTextStyle}>About Us</Link>
            <Link to="/doctors" onClick={() => setIsOpen(false)} className={mobileTextStyle}>Doctors</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={mobileTextStyle}>Contact</Link>
            
            {/* Redirects to the internal Appointment Page */}
            <Link to="/appointment" onClick={() => setIsOpen(false)} className="mt-2">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold shadow-lg">
                Book Appointment
              </button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}