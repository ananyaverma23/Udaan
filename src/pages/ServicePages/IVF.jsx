import React from "react";
import { 
  AlertTriangle, HeartPulse, ShieldAlert, Phone, MessageCircle, 
  CheckCircle2, Info, ChevronRight, Microscope, Syringe, ClipboardCheck 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function IVF() {
  const successData = [
    { age: "Under 35", rate: 54, color: "bg-emerald-500" },
    { age: "35 - 37", rate: 42, color: "bg-blue-500" },
    { age: "38 - 40", rate: 26, color: "bg-indigo-500" },
    { age: "Over 40", rate: 12, color: "bg-purple-500" },
  ];

  return (
    <div className="bg-slate-50 w-full font-sans antialiased text-slate-800">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white text-center py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-white/20 backdrop-blur-md rounded-full">
            Advanced Reproductive Technology
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            In Vitro Fertilization (IVF)
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 font-light leading-relaxed">
            A comprehensive fertility solution where medical expertise and laboratory science combine to give you the highest possible chance of a successful pregnancy.
          </p>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* WHAT IS IVF */}
        <section className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-teal-800 text-3xl font-bold mb-5 flex items-center gap-2">
              <Info className="text-teal-600" size={28} /> What is IVF?
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                In Vitro Fertilization (IVF) is the most effective form of assisted reproductive technology. Unlike other treatments like IUI, fertilization occurs in a specialized laboratory environment rather than inside the fallopian tubes.
              </p>
              <p>
                By controlling the environment where the egg and sperm meet, our specialists can overcome barriers such as tubal blockages, low sperm quality, or age-related fertility decline. This process allows for the selection of the healthiest embryos before they are gently placed back into the uterus.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-wider">Quick Key Stats</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Microscope size={24} /></div>
                <div><p className="text-sm text-slate-500">Lab Precision</p><p className="font-bold uppercase text-xs">High Control</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-600"><Syringe size={24} /></div>
                <div><p className="text-sm text-slate-500">Cycle Length</p><p className="font-bold uppercase text-xs">4 - 6 Weeks</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><ClipboardCheck size={24} /></div>
                <div><p className="text-sm text-slate-500">Genetic Screening</p><p className="font-bold uppercase text-xs">Optional (PGT-A)</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* IVF VS NATURAL TABLE STYLE */}
        <section>
          <h2 className="text-teal-800 text-2xl font-bold mb-8 text-center uppercase tracking-wide">Methodology Comparison</h2>
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <div className="bg-slate-50 p-8 border-r border-slate-200">
              <h3 className="text-slate-500 font-bold mb-6 text-center uppercase tracking-tighter">Natural Conception</h3>
              <ul className="space-y-5">
                {[
                  "Relies on healthy fallopian tube transport",
                  "Single egg released per month naturally",
                  "Fertilization occurs in the ampulla of the tube",
                  "Environmental factors are difficult to monitor"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-blue-600 font-bold mb-6 text-center uppercase tracking-tighter underline underline-offset-8">IVF Protocol</h3>
              <ul className="space-y-5">
                {[
                  "Bypasses fallopian tubes entirely",
                  "Multiple eggs retrieved for higher probability",
                  "Advanced fertilization techniques (ICSI available)",
                  "Embryo health monitored daily by embryologists"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-800 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS FLOW - HORIZONTAL CARDS */}
        <section className="relative w-screen left-1/2 right-1/2 mx-[-50vw] bg-slate-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-teal-800 text-2xl font-bold mb-8">The IVF Clinical Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Stimulation", desc: "For 8-12 days, you'll take medications to help follicles grow, monitored by ultrasound and blood tests." },
                { title: "Retrieval", desc: "A 20-minute outpatient procedure under light sedation to collect mature eggs from the ovaries." },
                { title: "Development", desc: "Fertilization in the lab is followed by 3-5 days of growth into Blastocyst-stage embryos." },
                { title: "Transfer", desc: "A simple process where the selected embryo is placed in the uterus. No anesthesia is required." },
              ].map((step, i) => (
                <div key={i} className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="text-5xl font-black text-slate group-hover:text-red-100 transition-colors mb-2">{i + 1}</div>
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center justify-between">
                    {step.title} <ChevronRight size={16} className="text-slate-300" />
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUCCESS RATING UI - IMPROVISED */}
        <section className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 italic">Success by the Numbers</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                While every journey is unique, maternal age remains the most significant factor in IVF success. These percentages represent the likelihood of a live birth per single embryo transfer.
              </p>
              <div className="space-y-6">
                {successData.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Age Group: <span className="text-white font-bold">{item.age}</span></span>
                      <span className="text-blue-400">{item.rate}% Success</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                        style={{ width: `${item.rate}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-4">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h5 className="font-bold text-blue-400 mb-2 underline decoration-blue-800">Note on Success</h5>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  Success rates can be further enhanced using Preimplantation Genetic Testing (PGT-A), which screens embryos for chromosomal balance prior to transfer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RISKS & AFTERCARE */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-teal-800 text-2xl font-bold px-2">Risks & Safety</h2>
            <div className="bg-amber-50/50 border-l-4 border-amber-400 p-6 rounded-r-2xl space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <AlertTriangle size={20} /> Ovarian Response (OHSS)
              </div>
              <p className="text-sm text-slate-600">Minority of cases involve high sensitivity to meds. We use personalized dosing to mitigate this risk.</p>
            </div>
            <div className="bg-rose-50/50 border-l-4 border-rose-400 p-6 rounded-r-2xl space-y-3">
              <div className="flex items-center gap-2 font-bold text-rose-900">
                <ShieldAlert size={20} /> Multi-Pregnancy
              </div>
              <p className="text-sm text-slate-600">We prioritize Single Embryo Transfer (SET) to ensure the safest pregnancy for both mother and baby.</p>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-inner relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-6">Patient Recommendations</h2>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0">1</div>
                <p><span className="font-bold block">Physical Rest</span> No high-impact cardio or heavy lifting for 48 hours post-transfer.</p>
              </li>
              <li className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0">2</div>
                <p><span className="font-bold block">Hydration</span> Maintain high fluid intake to support the uterine lining and recovery.</p>
              </li>
              <li className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0">3</div>
                <p><span className="font-bold block">Support</span> Lean on our counseling services during the "Two Week Wait" (2WW).</p>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-10 rounded-[2.5rem] flex flex-col md:flex-row justify-between gap-10 items-center shadow-2xl">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Taking the Next Step?</h2>
            <p className="text-blue-100 mb-8 opacity-80">
              Your path to parenthood is unique. Meet with our lead specialists for a personalized IVF diagnostic plan.
            </p>
            <Link to="/appointment" className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-full transition">
              Book a Consultation <ChevronRight size={16} />
            </Link>
          </div>

          {/* <div className="w-full md:w-auto flex justify-end mt-3 md:mt-0">
            <button className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 p-7 rounded-3xl transition border border-white/10 md:ml-4 text-sm md:text-base">
              <Phone size={26} /> <span className="text-xs md:text-sm font-bold">CALL US</span>
            </button>
          </div> */}
        </section>

      </div>
    </div>
  );
}