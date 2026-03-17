import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <WhyChoose />
      <Services />
      <Process />
      <FAQ />
      <CTA />
    </div>
  );
}