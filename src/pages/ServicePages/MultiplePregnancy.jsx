import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBaby,
  FaHeartbeat,
  FaUserMd,
  FaQuestionCircle,
} from "react-icons/fa";

export default function MultiplePregnancy() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is multiple pregnancy?",
      a: "It is a pregnancy where more than one baby (twins, triplets, etc.) develops in the womb.",
    },
    {
      q: "Is multiple pregnancy risky?",
      a: "It is considered higher risk than a single pregnancy, but with proper care, most pregnancies are healthy.",
    },
    {
      q: "Will I need more scans?",
      a: "Yes, multiple pregnancies require more frequent monitoring.",
    },
    {
      q: "Can twins be delivered normally?",
      a: "In some cases yes, but it depends on the babies’ position and health conditions.",
    },
    {
      q: "Do I need special care?",
      a: "Yes, more nutrition, rest, and regular check-ups are important.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Multiple Pregnancy Care
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Comprehensive care and monitoring for twin or multiple pregnancies
            to ensure the health of both mother and babies.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          What is a Multiple Pregnancy?
        </h2>
        <p className="text-gray-600 mb-4">
          A multiple pregnancy occurs when a woman is carrying more than one baby,
          such as twins or triplets.
        </p>
        <p className="text-gray-600">
          These pregnancies require closer monitoring as they involve additional
          physical and medical considerations compared to single pregnancies.
        </p>
      </section>

      {/* TYPES */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Types of Multiple Pregnancy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-50 p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Identical Twins</h3>
              <p className="text-sm text-gray-600">
                Develop from a single fertilized egg that splits. Babies are
                genetically identical.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Fraternal Twins</h3>
              <p className="text-sm text-gray-600">
                Develop from two separate eggs. Babies are genetically different,
                like siblings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY IMPORTANT */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why Special Care is Needed?
        </h2>
        <p className="text-gray-600">
          Multiple pregnancies place extra demand on the mother’s body and
          require closer monitoring to ensure healthy development of all babies.
        </p>
      </section>

      {/* MONITORING PLAN */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Monitoring During Multiple Pregnancy
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Frequent Scans</h3>
              <p className="text-sm text-gray-600">
                More ultrasounds to monitor growth and development.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Growth Tracking</h3>
              <p className="text-sm text-gray-600">
                Each baby’s growth is monitored individually.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Placenta Check</h3>
              <p className="text-sm text-gray-600">
                Placental health and blood flow are assessed regularly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Possible Risks (Managed with Care)
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Preterm birth</li>
          <li>Low birth weight</li>
          <li>High blood pressure in mother</li>
          <li>Increased need for medical monitoring</li>
        </ul>
      </section>

      {/* CARE TIPS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Care Tips for Multiple Pregnancy
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Maintain a balanced and nutritious diet</li>
            <li>Attend regular prenatal check-ups</li>
            <li>Get adequate rest</li>
            <li>Follow doctor’s advice carefully</li>
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
          Get Expert Care for Multiple Pregnancy
        </h2>
        <p className="mb-6">
          Ensure the best care for you and your babies with regular monitoring.
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