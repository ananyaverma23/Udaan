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
import AdminPageLayout from "./components/AdminPageLayout";
import ServicePageLayout from "./components/ServicePageLayout";
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
import GalleryDetail from "./pages/Admin/GalleryDetail";
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
          <Route path="/services" element={<ServicePageLayout />}>
            <Route path="fertility-testing" element={<FertilityTesting />} />
            <Route path="iui" element={<IUI />} />
            <Route path="ivf" element={<IVF />} />
            <Route path="egg-freezing" element={<EggFreezing />} />
            <Route path="sperm-banking" element={<SpermBanking />} />
            <Route path="nutrition" element={<NutritionalGuidance />} />
            <Route path="nt-scan" element={<NtScan />} />
            <Route path="anomaly-scan" element={<AnomalyScan />} />
            <Route path="growth-scan" element={<GrowthScan />} />
            <Route path="doppler-scan" element={<DopplerScan />} />
            <Route path="fetal-echo" element={<EchoScan />} />
            <Route path="neurosonography" element={<Neurosonography />} />
            <Route path="multiple-pregnancy" element={<MultiplePregnancy />} />
            <Route path="amniocentesis" element={<Amniocentesis />} />
            <Route path="cvs" element={<CVS />} />
            <Route path="fetal-reductions" element={<FetalReductions />} />
            <Route path="nipt" element={<NIPT />} />
            <Route path="pelvic-scan" element={<PelvicScan />} />
            <Route path="follicular-study" element={<FollicularStudy />} />
            <Route path="genetic-counselling" element={<GeneticCounselling />} />
            <Route path="opd-services" element={<MultispecialityOPD />} />
          </Route>

          <Route path="/admin" element={<AdminPageLayout />}>
            <Route index element={<Login />} />
            <Route path=":id" element={<GalleryDetail />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="edit/:id" element={<EditPost />} />
          </Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
