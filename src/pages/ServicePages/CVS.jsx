import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";

export default function CVS() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Chorionic Villus Sampling (CVS)?",
      a: "CVS is a diagnostic test where a small sample of placental tissue is collected to check for genetic conditions.",
    },
    {
      q: "When is CVS performed?",
      a: "Usually between 10 and 13 weeks of pregnancy.",
    },
    {
      q: "Is CVS better than amniocentesis?",
      a: "CVS is done earlier, but both tests are highly accurate. Your doctor will guide you based on your situation.",
    },
    {
      q: "Is the procedure painful?",
      a: "You may feel mild discomfort, but it is generally well tolerated.",
    },
    {
      q: "How accurate is CVS?",
      a: "It is highly accurate and considered a diagnostic test.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-600 to-[#1E293B] text-white py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Chorionic Villus Sampling (CVS)
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            An early diagnostic test that provides accurate genetic information
            about your baby, helping you make informed decisions with confidence.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">
          What is CVS?
        </h2>
        <p className="text-gray-600 mb-4">
          Chorionic Villus Sampling (CVS) is a procedure where a small sample of
          placental tissue is collected for genetic testing.
        </p>
        <p className="text-gray-600">
          Since the placenta shares the baby’s genetic makeup, this test helps
          detect chromosomal and genetic conditions early in pregnancy.
        </p>
      </section>

      {/* WHY RECOMMENDED */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is CVS Recommended?
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>High-risk screening results (NT scan, NIPT)</li>
          <li>Family history of genetic disorders</li>
          <li>Advanced maternal age</li>
          <li>Previous pregnancy with genetic condition</li>
        </ul>
      </section>

      {/* WHAT IT DETECTS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-teal-600 mb-4 flex gap-2 items-center">
            <FaHeartbeat /> What CVS Can Detect
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Down syndrome (Trisomy 21)</li>
            <li>Trisomy 18 and Trisomy 13</li>
            <li>Genetic disorders</li>
            <li>Inherited conditions</li>
          </ul>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Key Advantage of CVS
          </h2>

          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
            <p className="text-gray-700">
              CVS is performed earlier in pregnancy (10–13 weeks), allowing
              earlier diagnosis and more time for decision-making.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-center text-teal-600 mb-10">
            Procedure Overview
          </h2>

          <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-4 items-stretch">

            {[
              {
                title: "Preparation",
                desc: "Ultrasound is done to guide the procedure.",
              },
              {
                title: "Cleaning",
                desc: "Area is cleaned to maintain sterility.",
              },
              {
                title: "Sample Collection",
                desc: "Placental tissue is collected using a thin instrument.",
              },
              {
                title: "Monitoring",
                desc: "Baby’s condition is checked after procedure.",
              },
              {
                title: "Completion",
                desc: "Procedure is completed quickly and safely.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="min-w-[250px] md:min-w-0 flex flex-col items-center text-center relative"
                >
                {/* Connector line */}
                {i !== 4 && (
                    <div className="hidden md:block absolute top-4 right-[-110px] w-55 h-1 bg-gradient-to-r from-[#D4AF37] to-[#0D9488]" />
                )}

                {/* Step circle */}
                <div className="relative z-20 w-12 h-12 rounded-full bg-gradient-to-r from-teal-600 to-[#1E293B] text-white flex items-center justify-center font-bold shadow-lg mb-4">
                    {i + 1}
                </div>

                <div className="bg-gray-50 p-5 rounded-xl shadow w-full h-full flex flex-col justify-between">
                  <h3 className="text-teal-600 font-semibold mb-2">
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

      {/* RESULTS */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Understanding Results
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
              <h3 className="font-semibold mb-2">Normal Result</h3>
              <p className="text-sm text-gray-600">
                No chromosomal abnormalities detected.
              </p>
            </div>

            <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Abnormal Result</h3>
              <p className="text-sm text-gray-600">
                Further counseling and medical guidance required.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Possible Risks (Rare)
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Mild cramping or discomfort</li>
          <li>Small risk of miscarriage</li>
          <li>Infection (rare)</li>
        </ul>
      </section>

      {/* AFTERCARE */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            After the Procedure
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Rest is advised for the day</li>
            <li>Avoid heavy physical activity</li>
            <li>Contact doctor if symptoms occur</li>
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
      <section className="bg-gradient-to-r from-teal-600 to-[#1E293B] text-white py-10 text-center">
        <FaBaby className="mx-auto text-4xl mb-4" />
        <h2 className="text-2xl font-semibold mb-3">
          Consult for CVS Testing
        </h2>
        <p className="mb-6">
          Get expert advice and early diagnostic clarity for your pregnancy.
        </p>
        <Link to="/appointment">
          <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Book Consultation
          </button>
        </Link>
      </section>

    </div>
  );
}


