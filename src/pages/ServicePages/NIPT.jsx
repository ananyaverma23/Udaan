import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Nipt() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is NIPT?",
      a: "NIPT is a blood test that analyzes fetal DNA present in the mother’s blood to assess the risk of genetic conditions.",
    },
    {
      q: "When can NIPT be done?",
      a: "It can be done from 10 weeks of pregnancy onwards.",
    },
    {
      q: "Is NIPT safe?",
      a: "Yes, it is completely safe as it only involves a blood sample from the mother.",
    },
    {
      q: "Is NIPT accurate?",
      a: "It is highly accurate for screening, but it is not a diagnostic test.",
    },
    {
      q: "What if NIPT shows high risk?",
      a: "Your doctor may recommend confirmatory tests like CVS or amniocentesis.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            NIPT (Non-Invasive Prenatal Testing)
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A safe and advanced blood test that screens for genetic conditions
            early in pregnancy without any risk to your baby.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          What is NIPT?
        </h2>
        <p className="text-gray-600 mb-4">
          NIPT is a blood test that analyzes small fragments of fetal DNA present
          in the mother’s bloodstream.
        </p>
        <p className="text-gray-600">
          It helps assess the risk of certain chromosomal conditions early in
          pregnancy, without any invasive procedure.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is NIPT Important?
        </h2>
        <p className="text-gray-600 mb-3">
          NIPT provides early reassurance or identifies potential risks before
          more invasive tests are considered.
        </p>
        <p className="text-gray-600">
          It is especially useful for women who want a safe and reliable screening
          option in early pregnancy.
        </p>
      </section>

      {/* WHAT IT DETECTS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 flex gap-2 items-center">
            <FaHeartbeat /> What NIPT Can Detect
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Down syndrome (Trisomy 21)</li>
            <li>Trisomy 18 and Trisomy 13</li>
            <li>Sex chromosome abnormalities</li>
          </ul>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Key Benefits of NIPT
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Non-Invasive</h3>
              <p className="text-sm text-gray-600">
                Only a blood sample is required — no risk to baby.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Early Testing</h3>
              <p className="text-sm text-gray-600">
                Can be done as early as 10 weeks.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-2">High Accuracy</h3>
              <p className="text-sm text-gray-600">
                Highly reliable screening results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-10">
            NIPT Procedure
          </h2>

          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-4 items-stretch">

            {[
              {
                title: "Sample Collection",
                desc: "Blood sample is taken from the mother.",
              },
              {
                title: "Lab Analysis",
                desc: "Fetal DNA is analyzed in the lab.",
              },
              {
                title: "Risk Assessment",
                desc: "Risk for chromosomal conditions is calculated.",
              },
              {
                title: "Result Reporting",
                desc: "Results are shared with your doctor.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="min-w-[250px] md:min-w-0 flex flex-col items-center text-center relative"
                >
                {/* Connector line */}
                {i !== 3 && (
                    <div className="hidden md:block absolute top-4 right-[-140px] w-70 h-1 bg-gradient-to-r from-blue-500 to-violet-500" />
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

      {/* IMPORTANT NOTE */}
      <section className="bg-yellow-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl font-semibold text-yellow-700 mb-3">
            Important to Know
          </h2>

          <p className="text-gray-700 text-sm">
            NIPT is a screening test, not a diagnostic test. If results indicate
            high risk, further tests like CVS or Amniocentesis are needed for confirmation.
          </p>

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
          Book Your NIPT Test
        </h2>
        <p className="mb-6">
          Get early reassurance with safe and advanced prenatal screening.
        </p>
        <Link to="/appointment">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Book Consultation
          </button>
        </Link>
      </section>

    </div>
  );
}