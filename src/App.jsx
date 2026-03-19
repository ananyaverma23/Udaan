import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";
import Appointment from "./pages/Appointment";
import FertilityTesting from "./pages/ServicePages/FertilityTesting";
import IUI from "./pages/ServicePages/IUI";
import IVF from "./pages/ServicePages/IVF";
import EggFreezing from "./pages/ServicePages/EggFreezing";
import SpermBanking from "./pages/ServicePages/SpermBanking";
import NutritionalGuidance from "./pages/ServicePages/NutritionalGuidance";
import NtScan from "./pages/ServicePages/ntScan";
import AnomalyScan from "./pages/ServicePages/AnomalyScan";
import GrowthScan from "./pages/ServicePages/GrowthScan";
import DopplerScan from "./pages/ServicePages/DopplerScan";
import EchoScan from "./pages/ServicePages/EchoScan";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Loader onFinished={() => setIsLoading(false)} />
  ) : (
    <div className="animate-in fade-in duration-1000">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services/fertility-testing" element={<FertilityTesting />} />
          <Route path="/services/iui" element={<IUI />} />
          <Route path="/services/ivf" element={<IVF />} />
          <Route path="/services/egg-freezing" element={<EggFreezing />} />
          <Route path="/services/sperm-banking" element={<SpermBanking />} />
          <Route path="/services/nutrition" element={<NutritionalGuidance />} />
          <Route path="/services/nt-scan" element={<NtScan />} />
          <Route path="/services/anomaly-scan" element={<AnomalyScan />} />
          <Route path="/services/growth-scan" element={<GrowthScan />} />
          <Route path="/services/doppler-scan" element={<DopplerScan />} />
          <Route path="/services/fetal-echo" element={<EchoScan />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}