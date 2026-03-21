import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
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
import Neurosonography from "./pages/ServicePages/Neurosonography";
import MultiplePregnancy from "./pages/ServicePages/MultiplePregnancy";
import Amniocentesis from "./pages/ServicePages/Amniocentesis"; 
import CVS from "./pages/ServicePages/CVS";
import FetalReductions from "./pages/ServicePages/FetalReductions";
import NIPT from "./pages/ServicePages/NIPT";
import PelvicScan from "./pages/ServicePages/PelvicScan";
import FollicularStudy from "./pages/ServicePages/FollicularStudy";
import GeneticCounselling from "./pages/ServicePages/GeneticCounselling";
import MultispecialityOPD from "./pages/ServicePages/MultispecialityOPD";
import Login from "./pages/Admin/Login";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import AdminGallery from "./pages/Admin/AdminGallery";
import CreatePost from "./pages/Admin/CreatePost"; 
import EditPost from "./pages/Admin/EditPost";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Loader onFinished={() => setIsLoading(false)} />
  ) : (
    <div className="animate-in fade-in duration-1000">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />

          {/* Service Pages */}
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
          <Route path="/services/neurosonography" element={<Neurosonography />} />
          <Route path="/services/multiple-pregnancy" element={<MultiplePregnancy />} />
          <Route path="/services/amniocentesis" element={<Amniocentesis />} />
          <Route path="/services/cvs" element={<CVS />} />
          <Route path="/services/fetal-reductions" element={<FetalReductions />} />
          <Route path="/services/nipt" element={<NIPT />} />
          <Route path="/services/pelvic-scan" element={<PelvicScan />} />
          <Route path="/services/follicular-study" element={<FollicularStudy />} />
          <Route path="/services/genetic-counselling" element={<GeneticCounselling />} />
          <Route path="/services/opd-services" element={<MultispecialityOPD />} />

          <Route path="/admin" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/gallery/create" element={<CreatePost />} />
          <Route path="/gallery/edit/:id" element={<EditPost />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
