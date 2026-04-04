import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Amniocentesis() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is amniocentesis?",
      a: "It is a diagnostic procedure where a small amount of amniotic fluid is taken to test for genetic conditions.",
    },
    {
      q: "When is it performed?",
      a: "Usually between 15 and 20 weeks of pregnancy.",
    },
    {
      q: "Is it painful?",
      a: "You may feel mild discomfort similar to an injection, but it is generally well tolerated.",
    },
    {
      q: "Is it safe?",
      a: "It is generally safe, but like any procedure, it carries a small risk which your doctor will explain.",
    },
    {
      q: "How accurate are the results?",
      a: "Amniocentesis is highly accurate and considered a confirmatory diagnostic test.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-600 to-[#1E293B] text-white py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Amniocentesis
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A diagnostic test that provides accurate information about your
            baby’s genetic health, helping guide important medical decisions.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">
          What is Amniocentesis?
        </h2>
        <p className="text-gray-600 mb-4">
          Amniocentesis is a medical procedure in which a small amount of
          amniotic fluid is collected from the womb for testing.
        </p>
        <p className="text-gray-600">
          This fluid contains fetal cells and chemicals that can provide detailed
          information about your baby’s genetic and chromosomal health.
        </p>
      </section>

      {/* WHY RECOMMENDED */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is Amniocentesis Recommended?
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>High-risk results in screening tests (like NT scan or NIPT)</li>
          <li>Family history of genetic disorders</li>
          <li>Advanced maternal age</li>
          <li>Abnormal findings in ultrasound</li>
        </ul>
      </section>

      {/* WHAT IT DETECTS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-teal-600 mb-4 flex gap-2 items-center">
            <FaHeartbeat /> What Amniocentesis Can Detect
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Down syndrome (Trisomy 21)</li>
            <li>Trisomy 18 and Trisomy 13</li>
            <li>Genetic disorders</li>
            <li>Neural tube defects</li>
          </ul>
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
                desc: "Ultrasound is done to locate baby and placenta.",
              },
              {
                title: "Cleaning",
                desc: "Abdomen is cleaned to maintain sterility.",
              },
              {
                title: "Needle Insertion",
                desc: "A thin needle is inserted into the womb.",
              },
              {
                title: "Fluid Collection",
                desc: "Small amount of amniotic fluid is collected.",
              },
              {
                title: "Completion",
                desc: "Needle is removed and baby is checked.",
              },
            ].map((step, i) => (
              <div key={i} className="min-w-[250px] md:min-w-0 flex flex-col items-center text-center relative h-full">

                {i !== 4 && (
                  <div className="hidden md:block absolute top-6 right-[-50%] w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#0D9488]" />
                )}

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-600 to-[#1E293B] text-white flex items-center justify-center font-bold mb-4">
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
          <li>Very small risk of miscarriage</li>
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
            <li>Rest for the day is recommended</li>
            <li>Avoid heavy physical activity</li>
            <li>Contact doctor if unusual symptoms occur</li>
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
          Consult for Amniocentesis
        </h2>
        <p className="mb-6">
          Get expert guidance and make informed decisions with confidence.
        </p>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
          Book Consultation
        </button>
      </section>

    </div>
  );
}


