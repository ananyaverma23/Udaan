import { useState } from "react";
import {Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";

export default function DopplerScan() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is a fetal Doppler scan?",
      a: "It is an ultrasound that measures blood flow between the baby, placenta, and uterus.",
    },
    {
      q: "When is Doppler scan done?",
      a: "Usually after 24–28 weeks, especially in high-risk pregnancies.",
    },
    {
      q: "Why is Doppler scan important?",
      a: "It ensures the baby is receiving enough oxygen and nutrients.",
    },
    {
      q: "Is Doppler scan safe?",
      a: "Yes, it is a safe and non-invasive procedure.",
    },
    {
      q: "Who needs a Doppler scan?",
      a: "Women with high-risk pregnancies, growth concerns, or medical conditions.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fetal Doppler Scan
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A specialized ultrasound that evaluates blood flow to ensure your
            baby is receiving adequate oxygen and nutrients.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          What is a Fetal Doppler Scan?
        </h2>
        <p className="text-gray-600 mb-4">
          A fetal Doppler scan is a specialized ultrasound that measures blood
          flow in the umbilical cord, placenta, and baby’s brain.
        </p>
        <p className="text-gray-600">
          It helps assess whether your baby is receiving enough oxygen and
          nutrients for healthy growth.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is this Scan Important?
        </h2>
        <p className="text-gray-600 mb-3">
          Blood flow is critical for your baby’s development.
        </p>
        <p className="text-gray-600">
          This scan helps detect issues like reduced blood supply, allowing early
          medical intervention to prevent complications.
        </p>
      </section>

      {/* WHAT IT CHECKS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 flex gap-2 items-center">
            <FaHeartbeat /> What Doppler Scan Evaluates
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Blood flow in umbilical artery</li>
            <li>Blood flow in uterine arteries</li>
            <li>Blood flow in baby’s brain</li>
            <li>Placental circulation</li>
            <li>Signs of fetal distress</li>
          </ul>
        </div>
      </section>

      {/* WHO NEEDS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-violet-700 mb-4">
          Who Needs a Doppler Scan?
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>High-risk pregnancies</li>
          <li>Babies with growth restriction</li>
          <li>High blood pressure or diabetes in mother</li>
          <li>Low amniotic fluid levels</li>
          <li>Previous pregnancy complications</li>
        </ul>
      </section>

      {/* INTERPRETATION */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Understanding Doppler Results
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
              <h3 className="font-semibold mb-2">Normal Flow</h3>
              <p className="text-sm text-gray-600">
                Blood flow is adequate and baby is receiving enough oxygen.
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
              <h3 className="font-semibold mb-2">Reduced Flow</h3>
              <p className="text-sm text-gray-600">
                May require closer monitoring and repeat scans.
              </p>
            </div>

            <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">Abnormal Flow</h3>
              <p className="text-sm text-gray-600">
                Immediate medical attention and further evaluation required.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-10">
            Doppler Scan Process
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
                title: "Blood Flow Imaging",
                desc: "Special Doppler mode tracks blood movement.",
              },
              {
                title: "Wave Analysis",
                desc: "Blood flow patterns are analyzed.",
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
            <li>Reduced baby movements</li>
            <li>Doctor advised close monitoring</li>
            <li>Previous abnormal scan results</li>
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
          Book Your Doppler Scan
        </h2>
        <p className="mb-6">
          Ensure your baby is receiving proper blood flow and care.
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