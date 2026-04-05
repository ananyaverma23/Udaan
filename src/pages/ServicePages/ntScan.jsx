import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";

export default function NtScan() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is NT scan safe for my baby?",
      a: "Yes, it is a completely safe ultrasound procedure with no radiation exposure. It has been used for many years in pregnancy care.",
    },
    {
      q: "Can NT scan confirm Down syndrome?",
      a: "No. It only tells the risk. A higher NT value does not confirm the condition. Further tests are needed for confirmation.",
    },
    {
      q: "What is considered a normal NT value?",
      a: "Usually less than 3.0 mm is considered normal, but this may vary slightly depending on the baby's size and gestational age.",
    },
    {
      q: "What happens if my NT is high?",
      a: "Your doctor may recommend additional tests like NIPT, CVS, or amniocentesis. Many babies with higher NT values are still healthy.",
    },
    {
      q: "Is this scan mandatory?",
      a: "It is not mandatory but highly recommended as it helps in early risk assessment and planning.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-600 to-[#1E293B] text-white py-12 px-4 text-center">
        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Nuchal Translucency (NT) Scan
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            An early pregnancy screening that helps assess your baby’s health and
            identify possible risks — giving you clarity, reassurance, and time
            to make informed decisions.
          </p>
        </Motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">
          What is an NT Scan?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Nuchal Translucency (NT) scan is a specialized ultrasound performed
          during the first trimester, usually between 11 and 14 weeks of pregnancy.
          It measures the thickness of the fluid-filled space at the back of your
          baby’s neck.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This measurement, combined with maternal age and sometimes blood tests,
          helps estimate the risk of chromosomal abnormalities such as Down syndrome,
          Trisomy 18, and Trisomy 13.
        </p>
      </section>

      {/* WHY IMPORTANT */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is this Scan Important?
        </h2>
        <p className="text-gray-600 mb-3">
          Many genetic conditions do not show visible signs in early pregnancy.
          The NT scan helps detect potential risks at a very early stage.
        </p>
        <p className="text-gray-600">
          It gives parents time to understand the situation, consult specialists,
          and plan further care if needed. It is not a diagnosis, but a valuable
          early screening tool.
        </p>
      </section>

      {/* WHAT IT DETECTS */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
            <FaHeartbeat /> What NT Scan Can Indicate
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Risk of Down syndrome (Trisomy 21)</li>
            <li>Risk of Trisomy 18 and Trisomy 13</li>
            <li>Early signs of congenital heart defects</li>
            <li>Major structural abnormalities</li>
            <li>General fetal development assessment</li>
          </ul>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-violet-700 mb-4 flex items-center gap-2">
          <FaUserMd /> Limitations of NT Scan
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>It is a screening test, not a diagnostic test</li>
          <li>Cannot confirm genetic disorders</li>
          <li>May require additional tests for confirmation</li>
          <li>Accuracy depends on correct timing and expertise</li>
        </ul>
      </section>

      {/* NT VALUES */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Understanding NT Measurements
          </h2>

          <p className="text-gray-600 mb-6">
            The NT value is measured in millimeters (mm). The interpretation depends
            on the baby's size and gestational age.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
              <h3 className="font-semibold mb-2">Normal</h3>
              <p className="text-sm text-gray-600">
                Less than 3.0 mm. Most babies fall in this range and are healthy.
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
              <h3 className="font-semibold mb-2">Borderline</h3>
              <p className="text-sm text-gray-600">
                Slightly increased values may need closer monitoring.
              </p>
            </div>

            <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500">
              <h3 className="font-semibold mb-2">High</h3>
              <p className="text-sm text-gray-600">
                Higher values suggest increased risk, but do not confirm any condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS*/}
        <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

            <h2 className="text-2xl md:text-3xl font-semibold text-center text-teal-600 mb-10">
            NT Scan Process
            </h2>

            {/* Scroll container for mobile */}
            <div className="relative">
              <div className="hidden md:block absolute top-14 left-8 right-8 h-1 bg-gradient-to-r from-[#D4AF37] to-[#0D9488] opacity-70 -z-10" />

              <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-4 pt-8 md:pt-0">
                {[
                  {
                    title: "Preparation",
                    desc: "You lie comfortably. Sometimes a full bladder is required for better imaging.",
                  },
                  {
                    title: "Gel Application",
                    desc: "A safe gel is applied on the abdomen to improve contact.",
                  },
                  {
                    title: "Ultrasound Imaging",
                    desc: "Probe moves gently to capture baby's images.",
                  },
                  {
                    title: "NT Measurement",
                    desc: "Fluid behind baby's neck is measured carefully.",
                  },
                  {
                    title: "Result Evaluation",
                    desc: "Doctor evaluates results with reports and explains risk.",
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

                    {/* Card */}
                    <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition w-full h-full flex flex-col justify-between">
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

        </div>
        </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-teal-600 font-semibold mb-3">
              During the Scan
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Non-invasive and painless</li>
              <li>Takes around 20–30 minutes</li>
              <li>You may be asked to change position</li>
            </ul>
          </div>

          <div>
            <h3 className="text-violet-700 font-semibold mb-3">
              After the Scan
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Results are explained clearly</li>
              <li>No recovery time needed</li>
              <li>Further tests may be suggested if required</li>
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
          Book Your NT Scan Today
        </h2>
        <p className="mb-6">
          Early screening helps you stay informed and confident throughout your pregnancy journey.
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


