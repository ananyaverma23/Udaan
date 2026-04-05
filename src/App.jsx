import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import AdminPageLayout from "./components/AdminPageLayout";
import ServicePageLayout from "./components/ServicePageLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Doctors = lazy(() => import("./pages/Doctors"));
const Contact = lazy(() => import("./pages/Contact"));
const Appointment = lazy(() => import("./pages/Appointment"));
const FertilityTesting = lazy(() => import("./pages/ServicePages/FertilityTesting"));
const IUI = lazy(() => import("./pages/ServicePages/IUI"));
const IVF = lazy(() => import("./pages/ServicePages/IVF"));
const EggFreezing = lazy(() => import("./pages/ServicePages/EggFreezing"));
const SpermBanking = lazy(() => import("./pages/ServicePages/SpermBanking"));
const NutritionalGuidance = lazy(() => import("./pages/ServicePages/NutritionalGuidance"));
const NtScan = lazy(() => import("./pages/ServicePages/ntScan"));
const AnomalyScan = lazy(() => import("./pages/ServicePages/AnomalyScan"));
const GrowthScan = lazy(() => import("./pages/ServicePages/GrowthScan"));
const DopplerScan = lazy(() => import("./pages/ServicePages/DopplerScan"));
const EchoScan = lazy(() => import("./pages/ServicePages/EchoScan"));
const Neurosonography = lazy(() => import("./pages/ServicePages/Neurosonography"));
const MultiplePregnancy = lazy(() => import("./pages/ServicePages/MultiplePregnancy"));
const Amniocentesis = lazy(() => import("./pages/ServicePages/Amniocentesis"));
const CVS = lazy(() => import("./pages/ServicePages/CVS"));
const FetalReductions = lazy(() => import("./pages/ServicePages/FetalReductions"));
const NIPT = lazy(() => import("./pages/ServicePages/NIPT"));
const PelvicScan = lazy(() => import("./pages/ServicePages/PelvicScan"));
const FollicularStudy = lazy(() => import("./pages/ServicePages/FollicularStudy"));
const GeneticCounselling = lazy(() => import("./pages/ServicePages/GeneticCounselling"));
const MultispecialityOPD = lazy(() => import("./pages/ServicePages/MultispecialityOPD"));
const Login = lazy(() => import("./pages/Admin/Login"));
const Gallery = lazy(() => import("./pages/Gallery"));
const GalleryDetail = lazy(() => import("./pages/Admin/GalleryDetail"));
const CreatePost = lazy(() => import("./pages/Admin/CreatePost"));
const EditPost = lazy(() => import("./pages/Admin/EditPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routeLoadingFallback = (
  <div className="flex min-h-[50vh] items-center justify-center px-6 py-16">
    <div className="rounded-full bg-white px-6 py-3 font-['Quicksand'] text-sm font-semibold text-teal-600 shadow-sm">
      Loading page...
    </div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Loader onFinished={() => setIsLoading(false)} />
  ) : (
    <div className="animate-in fade-in duration-1000">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Suspense fallback={routeLoadingFallback}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
