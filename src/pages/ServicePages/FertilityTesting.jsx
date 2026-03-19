import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

import { 
  CheckCircle, 
  HelpCircle, 
  MessageCircle, 
  Stethoscope, 
  FileText, 
  UserCheck 
} from "lucide-react";

const FertilityTesting = () => {
  const testingProcedures = [
    "Hormonal blood profile (AMH, FSH, LH)",
    "Comprehensive Semen Analysis",
    "Trans-vaginal Ultrasound (TVS)",
    "Tubal Patency Test (HSG/HyCoSy)",
    "Follicular Monitoring",
    "Infectious Disease Screening"
  ];

  const procedureCards = [
     {
      title: "Initial Consultation",
      desc: "Comprehensive medical history review and discussion of concerns. We'll explain the testing process and answer any questions.",
      icon: <UserCheck className="text-blue-600" size={30} />
    },
    {
      title: "Testing Phase",
      desc: "Series of diagnostic tests scheduled based on your menstrual cycle. Each test is performed with care and precision by our expert team.",
      icon: <Stethoscope className="text-blue-600" size={30} />
    },
    {
      title: "Results & Planning",
      desc: "Detailed discussion of test results and personalized treatment recommendations. We'll guide you through the next steps of your fertility journey.",
      icon: <FileText className="text-blue-600" size={30} />
    }
  ];

  return (
    <div className="bg-white pb-20">
      {/* 1. Name & Bio */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-blue-50/50 to-white">
        <Container>
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Fertility <span className="text-blue-600">Testing</span>
            </h1>
            <p className="text-xl text-blue-600 font-medium leading-relaxed">
              Comprehensive evaluation for your fertility journey.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        {/* 2. Description Paragraph */}
        <div className="py-8 max-w-4xl text-left">
          <p className="text-gray-600 leading-relaxed text-lg border-l-4 border-blue-200 pl-6 italic">
            <b>Understanding Fertility Testing</b> <br />
            Watch this informative video to learn more about fertility testing and what to expect during your evaluation.   
            </p>
        </div>

        {/* 3. RESPONSIVE YOUTUBE VIDEO SECTION */}
        {/* 'w-full' makes it fill the container, 'aspect-video' keeps it 16:9 automatically */}
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

        {/* 4. What is... Section */}
        <section className="py-12 max-w-4xl text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Fertility Testing?</h2>
            <div className="h-1.5 w-20 bg-blue-600 mb-8 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Fertility testing is a comprehensive evaluation process that helps identify potential causes of infertility and guides treatment options. Our advanced diagnostic procedures provide detailed insights into both male and female fertility factors.          
            </p>
          <div className="bg-blue-50/50 rounded-[15px] p-4 md:p-6 max-w-lg shadow-sm border border border-blue-100">
        
            <h3 className="text-blue-600 font-semibold text-lg md:text-xl mb-5">
                What We Check
            </h3>

            <ul className="space-y-4">
                {[
                "Hormone levels and ovarian reserve",
                "Fallopian tube patency",
                "Uterine cavity assessment",
                "Sperm analysis",
                "Genetic screening",
                ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                    
                    <span className="w-2.5 h-2.5 mt-2 rounded-full bg-blue-600"></span>
                    
                    <span>{item}</span>
                </li>
                ))}
            </ul>
           </div>
        </section>

        {/* 5. Testing Procedure List - Divided into Two Columns */}
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Testing Procedures</h2>
        <section className="py-12 bg-blue-50/50 rounded-[30px] md:rounded-[40px] px-6 md:px-16 my-12 border border-blue-100">
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Female Testing Column */}
            <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded-full inline-block"></span>
                Female Fertility Tests
            </h3>
            <ul className="space-y-4">
                {[
                "Blood tests for hormone levels",
                "Trans-vaginal Ultrasound (TVS)",
                "Hysterosalpingography(HSG) or Saline Infusion Sonohysterography(SIS",
                "Ovarian reserve testing",
                "Genetic screening"
                ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-lg font-medium">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={22} />
                    {item}
                </li>
                ))}
            </ul>
            </div>

            {/* Male Testing Column */}
            <div className="border-t md:border-t-0 md:border-l border-blue-100 pt-8 md:pt-0 md:pl-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-purple-500 rounded-full inline-block"></span>
                Male Fertility Tests
            </h3>
            <ul className="space-y-4">
                {[
                "Comprehensive Semen Analysis",
                "Hormone testing",
                "Genetic testing",
                "Physical examination",
                "Ultrasound of reproductive organs"
                ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-lg font-medium">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={22} />
                    {item}
                </li>
                ))}
            </ul>
            </div>

        </div>
        </section>

        {/* 6. Three Cards */}
        <div className="grid md:grid-cols-3 gap-8 py-12 text-center">
          {procedureCards.map((card, i) => (
            <div key={i} className="bg-white border border-slate-100 p-8 md:p-10 rounded-[30px] md:rounded-[35px] shadow-xl shadow-blue-100/20 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                  {i + 1}
              </div>
              <h4 className="font-bold text-xl mb-4 text-slate-900">{card.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* 7. Book Appointment Section */}
        <div className="mt-12 md:mt-24 bg-slate-900 rounded-[30px] md:rounded-[50px] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Start Your Journey <br /> With Clarity
            </h2>
            <Link to="/appointment"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 active:scale-95">
              <MessageCircle size={24} /> Book via WhatsApp
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FertilityTesting;

