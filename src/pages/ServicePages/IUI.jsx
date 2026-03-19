import React from "react";
import Container from "../../components/Container";
import { 
  CheckCircle2, 
  Info, 
  AlertCircle, 
  ArrowRight, 
  Activity,
  UserCheck,
  FlaskConical,
  Stethoscope,
  Calendar,
  MessageCircle,
  Clock,
  Zap,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function IUI() {
  const successRates = [
    { age: "< 30 Years", rate: "20-25%" },
    { age: "30-35 Years", rate: "15-20%" },
    { age: "35-40 Years", rate: "10%" },
    { age: "40+ Years", rate: "5%" }
  ];

  const successFactors = [
    { title: "Age", desc: "Maternal age is the single most significant factor in IUI success." },
    { title: "Sperm Quality", desc: "Higher concentration of motile sperm in the washed sample improves outcomes." },
    { title: "Tubal Health", desc: "At least one healthy, open fallopian tube is required for fertilization." },
    { title: "Timing", desc: "Precise medical monitoring ensures insemination at peak ovulation." }
  ];

  return (
    <div className="bg-white pb-20 selection:bg-blue-100">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <span className="bg-white/20 text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block backdrop-blur-sm">
            Fertility Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Intrauterine Insemination (IUI)
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 font-light leading-relaxed">
            A gentle, effective fertility treatment that bridges the gap between natural conception and advanced IVF.
          </p>
        </div>
      </section>

      <Container>
        {/* 2. WHAT IS IUI & LARGE VIDEO */}
        <section id="overview" className="py-12 space-y-12">
          {/* INTRODUCTION */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-900 text-3xl font-bold mb-4">Understanding IUI</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              IUI is a specialized procedure where high-quality, processed sperm is placed directly into the uterus at the precise moment of ovulation. This bypasses the cervix and shortens the journey to the egg, significantly increasing the likelihood of fertilization.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-blue-500">
              <p className="text-sm text-slate-500 uppercase font-bold mb-1">Success Rate</p>
              <p className="text-2xl font-bold text-slate-800">Up to 20%</p>
              <p className="text-xs text-slate-400">per cycle</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-purple-500">
              <p className="text-sm text-slate-500 uppercase font-bold mb-1">Duration</p>
              <p className="text-2xl font-bold text-slate-800">15-20 Min</p>
              <p className="text-xs text-slate-400">office visit</p>
            </div>
          </div>
        </section>

          <div className="py-10 w-[80vw] md:w-[70vw] mx-auto">
          <div className="relative w-full aspect-video rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl bg-slate-900 border-4 md:border-8 border-white transition-all duration-300">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Bx-yK7ngSHQ?si=EMiSh3TgEuA3ObJu" 
              title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe> 
          </div>
        </div>
        </section>

        {/* IUI VS NATURAL */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-800">Why Choose IUI over Natural?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <h3 className="text-slate-400 font-bold mb-4 uppercase tracking-wider text-sm">Natural Conception</h3>
              <ul className="space-y-4">
                {["Sperm must navigate the cervical mucus", "Longer travel distance to the Fallopian tubes", "Lower concentration of sperm reaching the egg"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-sm italic">
                    <span className="text-slate-300">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition">
              <h3 className="text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">IUI Advantage</h3>
              <ul className="space-y-4">
                {["Direct placement bypasses cervical barriers", "Concentrated 'washed' sperm for higher quality", "Perfectly timed with your natural ovulation"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. THE IUI PROCESS */}
        <section id="process" className="py-16">
          <h2 className="text-3xl font-bold text-black mb-10">The IUI Process</h2>
          <div className="space-y-4">
            {[
              { title: "Preparation & Monitoring", desc: "Initial tests and medications are used to stimulate egg growth and track ovulation.", color: "bg-blue-100/50", border: "border-blue-200", icon: <Calendar />, dot: "bg-blue-600" },
              { title: "Sperm Collection & Washing", desc: "The sample is processed to isolate the most active, healthy sperm.", color: "bg-purple-100/50", border: "border-purple-200", icon: <FlaskConical />, dot: "bg-purple-600" },
              { title: "The Procedure", desc: "A thin catheter gently places the sperm directly into the uterus.", color: "bg-blue-100/50", border: "border-blue-200", icon: <UserCheck />, dot: "bg-blue-600" },
              { title: "Post-Procedure Care", desc: "A brief rest period followed by follow-up instructions.", color: "bg-purple-100/50", border: "border-purple-200", icon: <Activity />, dot: "bg-purple-600" }
            ].map((step, i) => (
              <div key={i} className={`${step.color} border ${step.border} p-8 rounded-[35px] flex flex-col md:flex-row items-center gap-6 group transition-all`}>
                <div className={`w-12 h-12 ${step.dot} text-white rounded-2xl flex items-center justify-center font-bold text-xl shrink-0`}>
                  0{i + 1}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="font-bold text-black text-xl mb-1">{step.title}</h4>
                  <p className="text-black/80 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
                <div className="hidden md:block text-black/20 group-hover:text-black/40 transition-colors">
                  {React.cloneElement(step.icon, { size: 24 })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. WHY IUI IS PERFORMED (Vertically Divided) */}
        <section id="why" className="py-16">
          <h2 className="text-3xl font-bold text-black mb-4">Why IUI is Performed?</h2>
          <p className="text-black/70 mb-10 max-w-3xl leading-relaxed font-medium">
            IUI is often the first line of treatment because it is less invasive and more cost-effective than IVF, particularly for non-tubal infertility issues.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-blue-100/50 rounded-[45px] border border-blue-200">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">Common Indications</h3>
              <ul className="space-y-4 text-black font-semibold">
                {["Unexplained infertility", "Cervical mucus issues", "Mild male factor infertility", "Requirement for donor sperm"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-slate-100/50 rounded-[45px] border border-slate-200 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-black mb-4">Patient Eligibility</h3>
              <p className="text-black/70 text-sm leading-relaxed font-medium">
                Requires at least one open fallopian tube and a healthy sperm sample. A thorough diagnostic evaluation is required before starting.
              </p>
            </div>
          </div>
        </section>

        {/* 6. RISK CONSIDERATIONS */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-black mb-10">Risk Considerations</h2>
          <div className="space-y-4">
            {[
              { title: "Multiple Pregnancies", desc: "Risk increases slightly if using ovulation drugs.", color: "bg-orange-50", border: "border-orange-200" },
              { title: "Minor Discomfort", desc: "Mild cramping or spotting post-procedure is normal.", color: "bg-rose-50", border: "border-rose-200" },
              { title: "Rare Infection", desc: "Extremely low risk (<1%) of pelvic infection.", color: "bg-orange-50", border: "border-orange-200" }
            ].map((risk, i) => (
              <div key={i} className={`${risk.color} border ${risk.border} p-6 rounded-[30px] flex items-center gap-5`}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-black shrink-0">0{i + 1}</div>
                <div>
                  <h4 className="font-bold text-black text-lg">{risk.title}</h4>
                  <p className="text-black/80 text-sm font-medium leading-relaxed">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. AFTER THE PROCEDURE */}
        <section className="py-16">
          <div className="bg-blue-100/40 border border-blue-200 rounded-[45px] p-10 md:p-14 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-extrabold text-black">After the Procedure</h2>
              <p className="text-black text-lg leading-relaxed font-semibold">
                You will rest for 15-20 minutes in the clinic. Afterward, you can resume your normal daily activities immediately.
              </p>
              <div className="flex items-center gap-3 text-blue-700 font-bold bg-white/50 w-fit px-4 py-2 rounded-xl">
                <Clock size={20} /> Recovery: 15–20 Mins
              </div>
            </div>
            <div className="hidden md:block bg-white p-10 rounded-[40px] shadow-xl shadow-blue-200/50">
              <Stethoscope size={60} className="text-blue-600" />
            </div>
          </div>
        </section>

        {/* 8. SUCCESS RATES & FACTORS */}
        <section id="success" className="py-16 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">IUI Success Rates by Age</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Success rates are calculated per cycle. Most patients find success within 3-4 cycles of treatment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {successRates.map((stat, i) => (
              <div key={i} className="p-8 border border-slate-200 rounded-[40px] text-center bg-white shadow-sm">
                <p className="text-slate-400 text-[10px] font-bold uppercase mb-2 tracking-widest">{stat.age}</p>
                <p className="text-4xl font-black text-blue-600">{stat.rate}</p>
              </div>
            ))}
          </div>

          {/* NEW: SUCCESS RATE FACTORS DIV */}
          <div className="bg-slate-50 rounded-[45px] p-10 md:p-14 border border-slate-200">
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-2">
              <Zap className="text-blue-600" size={24} /> Factors Influencing Success
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {successFactors.map((factor, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">{factor.title}</h4>
                    <p className="text-black/60 text-sm leading-relaxed">{factor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. IUI VS IVF */}
        <section className="py-16 bg-blue-600 rounded-[50px] p-10 md:p-16 text-white flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">IUI vs. IVF</h2>
            <p className="text-blue-50 leading-relaxed font-medium">
              IUI is a simpler, non-surgical first step. While IVF offers higher success per cycle, IUI is significantly more affordable and requires no anesthesia or invasive retrieval.
            </p>
          </div>
        </section>

        {/* 10. READY TO LEARN MORE */}
        <section className="mt-24 text-center space-y-8">
          <h2 className="text-4xl font-black text-black tracking-tight">Ready to learn more about IUI?</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">Our specialists are here to guide you through every step of your fertility journey.</p>
          <Link to="/appointment" 
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-blue-200">
            <MessageCircle size={22} /> Consult via WhatsApp
          </Link>
        </section>

      </Container>
    </div>
  );
}