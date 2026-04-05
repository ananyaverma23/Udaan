import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GrowthScan() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is a fetal growth scan?",
      a: "It is an ultrasound done in the third trimester to monitor your baby’s growth, weight, and overall well-being.",
    },
    {
      q: "When is growth scan done?",
      a: "Usually between 28 and 32 weeks of pregnancy, but may be repeated later if needed.",
    },
    {
      q: "Why is growth scan important?",
      a: "It helps ensure your baby is growing properly and detects issues like low weight or excess fluid early.",
    },
    {
      q: "Is growth scan safe?",
      a: "Yes, it is a safe and non-invasive ultrasound procedure.",
    },
    {
      q: "Can growth scan detect all problems?",
      a: "No, but it gives important information about growth and overall health.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-600 to-[#1E293B] text-white py-12 px-4 text-center">
        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fetal Growth Scan
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A third-trimester ultrasound that monitors your baby’s growth,
            weight, and overall well-being.
          </p>
        </Motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">
          What is a Growth Scan?
        </h2>
        <p className="text-gray-600 mb-4">
          The growth scan is an ultrasound performed in the later stages of
          pregnancy to monitor how well your baby is growing.
        </p>
        <p className="text-gray-600">
          It measures the baby’s size, estimates weight, checks amniotic fluid,
          and evaluates placenta function to ensure a healthy pregnancy.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is this Scan Important?
        </h2>
        <p className="text-gray-600 mb-3">
          As pregnancy progresses, it is important to ensure that your baby is
          growing at a healthy rate.
        </p>
        <p className="text-gray-600">
          This scan helps detect conditions like growth restriction (baby too
          small) or macrosomia (baby too large), allowing timely medical care.
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
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy">
            </iframe> 
          </div>
        </div>

      {/* WHAT IT CHECKS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
            <FaHeartbeat /> What the Growth Scan Checks
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Baby’s weight and size</li>
            <li>Head, abdomen, and limb measurements</li>
            <li>Amniotic fluid levels</li>
            <li>Placenta position and function</li>
            <li>Baby’s movements and heartbeat</li>
            <li>Blood flow (if Doppler is included)</li>
          </ul>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-violet-700 mb-4 flex items-center gap-2">
          <FaUserMd /> Limitations
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Weight estimation may not be 100% accurate</li>
          <li>Depends on baby’s position</li>
          <li>May need repeat scans for monitoring</li>
        </ul>
      </section>

      {/* PROCESS (reuse same UI) */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-center text-teal-600 mb-10">
            Growth Scan Process
          </h2>

          <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-4 items-stretch">

            {[
              {
                title: "Preparation",
                desc: "You lie comfortably. No special preparation is usually needed.",
              },
              {
                title: "Gel Application",
                desc: "Gel is applied on the abdomen for better imaging.",
              },
              {
                title: "Measurements",
                desc: "Baby’s head, abdomen, and limbs are measured.",
              },
              {
                title: "Fluid & Placenta Check",
                desc: "Amniotic fluid and placenta are evaluated.",
              },
              {
                title: "Result Discussion",
                desc: "Doctor explains growth and overall condition.",
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
              <li>Quick and painless procedure</li>
              <li>Takes around 20–30 minutes</li>
              <li>Measurements taken from different angles</li>
            </ul>
          </div>

          <div>
            <h3 className="text-violet-700 font-semibold mb-3">
              After the Scan
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Doctor explains baby’s growth status</li>
              <li>No recovery required</li>
              <li>Follow-up scans if needed</li>
            </ul>
          </div>

        </div>
      </section>

      {/* GROWTH INTERPRETATION */}
        <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">

            <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Understanding Your Baby’s Growth
            </h2>

            <p className="text-gray-600 mb-6">
            Growth scan results are usually compared with standard charts. Your baby’s
            measurements are placed in percentiles to understand if growth is normal.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                <h3 className="font-semibold mb-2">Normal Growth</h3>
                <p className="text-sm text-gray-600">
                Between 10th and 90th percentile. Most babies fall in this range.
                </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
                <h3 className="font-semibold mb-2">Smaller Baby</h3>
                <p className="text-sm text-gray-600">
                Below 10th percentile may need closer monitoring.
                </p>
            </div>

            <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
                <h3 className="font-semibold mb-2">Larger Baby</h3>
                <p className="text-sm text-gray-600">
                Above 90th percentile may require special care planning.
                </p>
            </div>

            </div>
        </div>
        </section>

        {/* WARNING SIGNS */}
        <section className="bg-red-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">

            <h2 className="text-2xl font-semibold text-red-600 mb-4">
            When Should You Contact Your Doctor?
            </h2>

            <p className="text-gray-600 mb-4">
            While most growth scans are routine, you should contact your doctor if:
            </p>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>You notice reduced baby movements</li>
            <li>You experience unusual pain or discomfort</li>
            <li>Your doctor advises close monitoring after scan</li>
            <li>You have concerns about your baby’s growth</li>
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
          Book Your Growth Scan
        </h2>
        <p className="mb-6">
          Monitor your baby’s development and ensure a healthy pregnancy journey.
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


