import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <WhyChoose />
      <Services />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}