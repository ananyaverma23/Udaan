import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";

export default function FetalNeurosonography() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is fetal neurosonography?",
      a: "It is a specialized ultrasound that examines the baby’s brain and nervous system in detail.",
    },
    {
      q: "When is it performed?",
      a: "Usually between 18 and 24 weeks, or later if required.",
    },
    {
      q: "Is it different from anomaly scan?",
      a: "Yes, it provides a more detailed evaluation of the brain than a routine anomaly scan.",
    },
    {
      q: "Is the scan safe?",
      a: "Yes, it is a safe, non-invasive ultrasound procedure.",
    },
    {
      q: "Why is it recommended?",
      a: "It is advised when there are concerns about brain development or high-risk pregnancy conditions.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-600 to-[#1E293B] text-white py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fetal Neurosonography
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A specialized ultrasound to assess your baby’s brain and nervous
            system development in detail.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">
          What is Fetal Neurosonography?
        </h2>
        <p className="text-gray-600 mb-4">
          Fetal neurosonography is an advanced ultrasound technique used to
          examine the baby’s brain structure and central nervous system.
        </p>
        <p className="text-gray-600">
          It provides detailed images of brain regions, helping detect
          abnormalities that may not be visible in routine scans.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is this Scan Important?
        </h2>
        <p className="text-gray-600 mb-3">
          The brain plays a crucial role in your baby’s development.
        </p>
        <p className="text-gray-600">
          Early detection of neurological conditions allows better monitoring,
          planning, and care during pregnancy and after birth.
        </p>
      </section>

      {/* WHAT IT CHECKS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-teal-600 mb-4 flex gap-2 items-center">
            <FaHeartbeat /> What Neurosonography Evaluates
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Brain structure and symmetry</li>
            <li>Ventricles and fluid spaces</li>
            <li>Cerebellum and posterior fossa</li>
            <li>Spinal cord alignment</li>
            <li>Signs of neural tube defects</li>
          </ul>
        </div>
      </section>

      {/* WHO NEEDS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-violet-700 mb-4">
          Who Should Get This Scan?
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Abnormal findings in anomaly scan</li>
          <li>High-risk pregnancy</li>
          <li>Family history of neurological conditions</li>
          <li>Infections during pregnancy</li>
          <li>Maternal health concerns</li>
        </ul>
      </section>

      {/* INTERPRETATION */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Understanding Results
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
              <h3 className="font-semibold mb-2">Normal Development</h3>
              <p className="text-sm text-gray-600">
                Brain structure appears normal.
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
              <h3 className="font-semibold mb-2">Minor Variation</h3>
              <p className="text-sm text-gray-600">
                May require follow-up scans.
              </p>
            </div>

            <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Abnormal Finding</h3>
              <p className="text-sm text-gray-600">
                Further evaluation and specialist care required.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-center text-teal-600 mb-10">
            Neurosonography Process
          </h2>

          <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-4 items-stretch">

            {[
              {
                title: "Preparation",
                desc: "You lie comfortably. No special preparation needed.",
              },
              {
                title: "Gel Application",
                desc: "Gel applied for better ultrasound contact.",
              },
              {
                title: "Detailed Brain Imaging",
                desc: "High-resolution brain images are captured.",
              },
              {
                title: "Analysis",
                desc: "Brain structures are carefully evaluated.",
              },
              {
                title: "Result Discussion",
                desc: "Doctor explains findings clearly.",
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

      {/* WARNING */}
      <section className="bg-red-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            When Should You Contact Your Doctor?
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Abnormal findings in previous scans</li>
            <li>Doctor advises detailed brain evaluation</li>
            <li>Concerns about baby’s development</li>
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
          Book Neurosonography Scan
        </h2>
        <p className="mb-6">
          Ensure healthy brain development with advanced fetal imaging.
        </p>
        <Link to="/appointment">
          <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Book Appointment
          </button>
        </Link>
      </section>

    </div>
  );
}


