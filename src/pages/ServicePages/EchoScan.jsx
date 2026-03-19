import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";

export default function FetalEchoScan() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is a fetal echo scan?",
      a: "It is a specialized ultrasound that examines the baby’s heart structure and function in detail.",
    },
    {
      q: "When is fetal echo done?",
      a: "Usually between 18 and 24 weeks of pregnancy.",
    },
    {
      q: "Is it different from anomaly scan?",
      a: "Yes, it focuses specifically on the heart and gives more detailed information than a routine anomaly scan.",
    },
    {
      q: "Is fetal echo safe?",
      a: "Yes, it is a safe and non-invasive ultrasound procedure.",
    },
    {
      q: "Who needs a fetal echo scan?",
      a: "It is recommended in high-risk cases or when there is suspicion of heart-related issues.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fetal Echo Scan
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A detailed ultrasound focused on your baby’s heart to ensure healthy
            development and detect any cardiac abnormalities early.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          What is a Fetal Echo Scan?
        </h2>
        <p className="text-gray-600 mb-4">
          Fetal echocardiography is a specialized ultrasound that examines the
          structure and function of your baby’s heart in detail.
        </p>
        <p className="text-gray-600">
          It uses advanced imaging to evaluate heart chambers, valves, and blood
          flow patterns, helping detect congenital heart defects before birth.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is this Scan Important?
        </h2>
        <p className="text-gray-600 mb-3">
          The baby’s heart is one of the most critical organs to develop.
        </p>
        <p className="text-gray-600">
          Early detection of heart conditions allows doctors to plan proper care
          during pregnancy and after delivery.
        </p>
      </section>

      {/* WHAT IT CHECKS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 flex gap-2 items-center">
            <FaHeartbeat /> What Fetal Echo Evaluates
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Heart chambers and structure</li>
            <li>Heart valves and function</li>
            <li>Blood flow within the heart</li>
            <li>Heart rhythm and rate</li>
            <li>Major vessels connected to the heart</li>
          </ul>
        </div>
      </section>

      {/* WHO NEEDS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-violet-700 mb-4">
          Who Should Get a Fetal Echo Scan?
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Abnormal findings in anomaly scan</li>
          <li>Family history of congenital heart disease</li>
          <li>Maternal diabetes or medical conditions</li>
          <li>Infections during pregnancy</li>
          <li>IVF or high-risk pregnancy</li>
        </ul>
      </section>

      {/* INTERPRETATION */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Understanding Fetal Echo Results
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
              <h3 className="font-semibold mb-2">Normal Heart</h3>
              <p className="text-sm text-gray-600">
                Heart structure and function are normal.
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
              <h3 className="font-semibold mb-2">Minor Variation</h3>
              <p className="text-sm text-gray-600">
                Small variations may require monitoring.
              </p>
            </div>

            <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Abnormal Finding</h3>
              <p className="text-sm text-gray-600">
                Further evaluation and specialist consultation required.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-10">
            Fetal Echo Scan Process
          </h2>

          <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-4 items-stretch">

            {[
              {
                title: "Preparation",
                desc: "You lie comfortably. No special preparation needed.",
              },
              {
                title: "Gel Application",
                desc: "Gel is applied for better ultrasound imaging.",
              },
              {
                title: "Detailed Imaging",
                desc: "High-resolution images of the baby’s heart are taken.",
              },
              {
                title: "Heart Analysis",
                desc: "Heart structure, valves, and flow are examined.",
              },
              {
                title: "Result Discussion",
                desc: "Doctor explains findings and next steps.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="min-w-[250px] md:min-w-0 flex flex-col items-center text-center relative"
                >
                {/* Connector line */}
                {i !== 4 && (
                    <div className="hidden md:block absolute top-4 right-[-110px] w-55 h-1 bg-gradient-to-r from-blue-500 to-violet-500" />
                )}

                {/* Step circle */}
                <div className="relative z-20 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white flex items-center justify-center font-bold shadow-lg mb-4">
                    {i + 1}
                </div>

                <div className="bg-gray-50 p-5 rounded-xl shadow w-full h-full flex flex-col justify-between">
                  <h3 className="text-blue-700 font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WARNING */}
      <section className="bg-red-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            When Should You Contact Your Doctor?
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Abnormal findings in previous scans</li>
            <li>Family history of heart conditions</li>
            <li>Doctor recommends detailed evaluation</li>
          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-violet-700 mb-6">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            >
              <h3 className="font-semibold flex justify-between">
                {faq.q} <FaQuestionCircle />
              </h3>
              {openIndex === i && (
                <p className="text-gray-600 mt-2 text-sm">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-10 text-center">
        <FaBaby className="mx-auto text-4xl mb-4" />
        <h2 className="text-2xl font-semibold mb-3">
          Book Your Fetal Echo Scan
        </h2>
        <p className="mb-6">
          Ensure your baby’s heart is developing normally and safely.
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