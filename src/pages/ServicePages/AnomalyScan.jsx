import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";

export default function AnomalyScan() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is an anomaly scan?",
      a: "It is a detailed ultrasound done in the second trimester to examine the baby’s organs and overall development.",
    },
    {
      q: "When should anomaly scan be done?",
      a: "Between 18 and 22 weeks of pregnancy.",
    },
    {
      q: "Is anomaly scan safe?",
      a: "Yes, it is a safe, non-invasive ultrasound procedure.",
    },
    {
      q: "Can anomaly scan detect all problems?",
      a: "It detects most structural abnormalities, but not all conditions can be identified.",
    },
    {
      q: "How long does the scan take?",
      a: "Usually 30–45 minutes depending on baby’s position.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-600 to-[#1E293B] text-white py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Anomaly Scan (Level 2 Scan)
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A detailed second-trimester ultrasound that examines your baby’s
            growth and checks for structural abnormalities.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">
          What is an Anomaly Scan?
        </h2>
        <p className="text-gray-600 mb-4">
          The anomaly scan, also known as the Level 2 scan, is a detailed
          ultrasound performed during the second trimester. It evaluates your
          baby’s anatomy and development.
        </p>
        <p className="text-gray-600">
          It carefully examines organs such as the brain, heart, spine, kidneys,
          limbs, and face to ensure normal growth and detect any structural
          abnormalities.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is this Scan Important?
        </h2>
        <p className="text-gray-600 mb-3">
          This scan provides a detailed picture of your baby’s physical
          development.
        </p>
        <p className="text-gray-600">
          It helps detect structural issues early, allowing doctors to plan
          appropriate care and management if needed.
        </p>
      </section>

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

      {/* WHAT IT CHECKS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
            <FaHeartbeat /> What the Anomaly Scan Checks
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Brain and skull development</li>
            <li>Heart structure and function</li>
            <li>Spine alignment</li>
            <li>Kidneys and bladder</li>
            <li>Limbs and movements</li>
            <li>Facial features (like cleft lip)</li>
            <li>Placenta position and amniotic fluid</li>
          </ul>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-violet-700 mb-4 flex items-center gap-2">
          <FaUserMd /> Limitations
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Cannot detect all genetic or developmental conditions</li>
          <li>Depends on baby’s position during scan</li>
          <li>May require repeat scan if visibility is unclear</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-center text-teal-600 mb-10">
            Anomaly Scan Process
          </h2>

          <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-4 items-stretch">

            {[
              {
                title: "Preparation",
                desc: "You lie comfortably. A full bladder may help improve visibility.",
              },
              {
                title: "Gel Application",
                desc: "Gel is applied to enhance ultrasound contact.",
              },
              {
                title: "Detailed Imaging",
                desc: "Multiple images of baby’s organs are captured.",
              },
              {
                title: "Organ Examination",
                desc: "Each organ is checked carefully for abnormalities.",
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

      {/* EXPECT */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-teal-600 font-semibold mb-3">
              During the Scan
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>May take longer than routine scans</li>
              <li>Multiple angles are checked</li>
              <li>Baby’s movement may affect timing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-violet-700 font-semibold mb-3">
              After the Scan
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Results explained in detail</li>
              <li>Further tests only if needed</li>
              <li>No recovery required</li>
            </ul>
          </div>

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
          Book Your Anomaly Scan
        </h2>
        <p className="mb-6">
          Get a detailed check of your baby’s development for peace of mind.
        </p>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
          Book Appointment
        </button>
      </section>

    </div>
  );
}


