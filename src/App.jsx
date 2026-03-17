import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Loader from "./components/Loader"; // Import your new Loader

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <BrowserRouter>
            {/* Navbar always visible */}
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Footer always visible */}
            <Footer />
          </BrowserRouter>
    </>
  );
}

// {isLoading ? (
//         // Pass a function to set loading to false when progress finishes
//         <Loader onFinished={() => setIsLoading(false)} />
//       ) : (
//         <div className="animate-in fade-in duration-1000">
//           <BrowserRouter>
//             {/* Navbar always visible */}
//             <Navbar />

//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/doctors" element={<Doctors />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>

//             {/* Footer always visible */}
//             <Footer />
//           </BrowserRouter>
//         </div>
//       )}