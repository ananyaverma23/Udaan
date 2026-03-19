import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  Activity,
  Stethoscope,
  Dna,
  ClipboardList,
  HeartPulse,
  Apple,
  Microscope,
  ChevronDown,
} from "lucide-react";

export default function MultispecialtyOPD() {
  const [openIndex, setOpenIndex] = useState(null);

  const specialties = [
    { name: "Gynecology", icon: <HeartPulse className="text-violet-600 w-6 h-6" /> },
    { name: "Pediatrics", icon: <Baby className="text-blue-600 w-6 h-6" /> },
    { name: "Endocrinology", icon: <Activity className="text-violet-600 w-6 h-6" /> },
    { name: "Radiology", icon: <Microscope className="text-blue-600 w-6 h-6" /> },
    { name: "Genetics", icon: <Dna className="text-violet-600 w-6 h-6" /> },
    { name: "General Medicine", icon: <Stethoscope className="text-blue-600 w-6 h-6" /> },
    { name: "Nutrition & Dietetics", icon: <Apple className="text-violet-600 w-6 h-6" /> },
    { name: "Fetal Medicine", icon: <ClipboardList className="text-blue-600 w-6 h-6" /> },
  ];

  const steps = [
    { title: "Registration", desc: "Patient details and medical history are recorded." },
    { title: "Consultation", desc: "Patients meet relevant specialists based on symptoms." },
    { title: "Diagnosis", desc: "Tests and evaluations are performed if required." },
    { title: "Treatment Plan", desc: "Coordinated plan is created by specialists." },
  ];

    const faqs = [
        {
            q: "What is a Multispecialty OPD service?",
            a: "A Multispecialty OPD is an outpatient service where patients can consult doctors from different specialties in one place. It helps in faster diagnosis, better coordination between doctors, and efficient treatment planning without needing multiple hospital visits.",
        },
        {
            q: "Do I need to book an appointment in advance?",
            a: "Yes, it is recommended to book an appointment beforehand to avoid waiting time and ensure that the required specialists are available during your visit.",
        },
        {
            q: "How many doctors can I consult in one visit?",
            a: "Depending on your medical needs, you may consult one or multiple specialists in a single visit. The care team may guide you on which specialists are required.",
        },
        {
            q: "Is Multispecialty OPD suitable for pregnancy care?",
            a: "Yes, it is highly beneficial during pregnancy, especially for high-risk cases, as it allows coordination between gynecologists, radiologists, genetic experts, and other specialists.",
        },
        {
            q: "Will all tests be done on the same day?",
            a: "In most cases, necessary tests and evaluations are completed on the same day, depending on availability and the patient's condition.",
        },
        {
            q: "How much time does a visit usually take?",
            a: "The duration varies depending on consultations and tests, but most visits are completed within a few hours on the same day.",
        },
        {
            q: "Is this service suitable for chronic conditions?",
            a: "Yes, patients with chronic or complex conditions benefit greatly from multispecialty care as it ensures coordinated treatment and monitoring.",
        },
        {
            q: "Do I need a referral to visit Multispecialty OPD?",
            a: "In most cases, a referral is not required. However, if you have previous medical records or reports, it is helpful to bring them along.",
        },
        {
            q: "Can I follow up with the same doctors later?",
            a: "Yes, follow-up visits can be scheduled with the same specialists to ensure continuity of care and proper monitoring of your condition.",
        },
        {
            q: "Is Multispecialty OPD more expensive?",
            a: "While costs may vary, it often saves time and reduces repeated visits, making it cost-effective in the long run.",
        },
    ];

  const toggleFAQ = (index) => {
    const [openIndex, setOpenIndex] = useState(0);
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gradient-to-r from-violet-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Multispecialty OPD Service
            </h1>
            <p className="text-sm md:text-base">
              Our Multispecialty OPD provides access to expert doctors from different specialties in one place for accurate diagnosis and coordinated treatment.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-5 rounded-xl text-sm leading-6">
            ✔ Multiple specialists under one roof <br />
            ✔ Faster diagnosis and treatment <br />
            ✔ Coordinated patient care <br />
            ✔ Convenient and time-saving
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              What is Multispecialty OPD?
            </h2>
            <p className="text-gray-600 text-sm">
              A system where multiple specialists collaborate to provide comprehensive care in a single visit, improving diagnosis and treatment efficiency.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-violet-700 mb-3">
              Who Should Visit?
            </h2>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Patients needing multiple specialist opinions</li>
              <li>• High-risk pregnancy cases</li>
              <li>• Chronic or complex conditions</li>
              <li>• Coordinated treatment requirements</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-6">
            Available Specialties
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {specialties.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-2 hover:shadow-md transition">
                {item.icon}
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-violet-700 mb-6">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="absolute -top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2 mt-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-6">
            Key Benefits
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="bg-white p-4 rounded-lg">All specialists in one place</div>
            <div className="bg-white p-4 rounded-lg">Reduced waiting time</div>
            <div className="bg-white p-4 rounded-lg">Better diagnosis accuracy</div>
            <div className="bg-white p-4 rounded-lg">Integrated care approach</div>
            <div className="bg-white p-4 rounded-lg">Convenient for patients</div>
            <div className="bg-white p-4 rounded-lg">Improved treatment outcomes</div>
          </div>
        </div>
      </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

            <h2 className="text-2xl font-semibold text-violet-700 mb-8">
            Frequently Asked Questions
            </h2>

            <div className="space-y-5">
            {faqs.map((faq, index) => (
                <div
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`cursor-pointer rounded-3xl border transition-all duration-300 p-5 flex items-center gap-5 ${
                    openIndex === index
                    ? "bg-gradient-to-r from-violet-50 to-blue-50 border-violet-200"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                >
                {/* NUMBER */}
                <div className="min-w-[50px] h-[50px] flex items-center justify-center rounded-xl text-white font-bold text-lg bg-gradient-to-r from-violet-600 to-blue-600">
                    {String(index + 1).padStart(2, "0")}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2">
                    {faq.q}
                    </h3>

                    {openIndex === index && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.a}
                    </p>
                    )}
                </div>
                </div>
            ))}
            </div>

        </div>
        </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          Book Your OPD Consultation
        </h2>
        <p className="text-sm mb-4">
          Get expert care from multiple specialists in one visit.
        </p>
        <Link to="/appointment">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Book Appointment
          </button>
        </Link>
      </section>

    </div>
  );
}