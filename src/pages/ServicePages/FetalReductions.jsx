import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaQuestionCircle,
} from "react-icons/fa";

export default function SelectiveReduction() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is selective fetal reduction?",
      a: "It is a medical procedure used to reduce the number of fetuses in a multiple pregnancy to improve overall outcomes.",
    },
    {
      q: "Why is it done?",
      a: "It may be recommended to reduce risks such as preterm birth or complications in multiple pregnancies.",
    },
    {
      q: "When is it performed?",
      a: "Usually in early pregnancy, around 11–14 weeks.",
    },
    {
      q: "Is it safe?",
      a: "It is generally safe when performed by experienced specialists, but like any procedure, it carries some risks.",
    },
    {
      q: "Will I need emotional support?",
      a: "Yes, counseling and emotional support are often recommended as this can be a difficult decision.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-12 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Selective Fetal Reduction
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A specialized procedure that may be recommended in multiple pregnancies
            to improve the chances of a healthy outcome for the remaining babies.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          What is Selective Fetal Reduction?
        </h2>
        <p className="text-gray-600 mb-4">
          Selective fetal reduction is a medical procedure used in multiple
          pregnancies, such as twins or triplets, to reduce the number of fetuses.
        </p>
        <p className="text-gray-600">
          The goal is to improve the chances of a safer pregnancy and better
          outcomes for the remaining babies.
        </p>
      </section>

      {/* WHY RECOMMENDED */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Why is it Recommended?
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>High-risk multiple pregnancy (triplets or more)</li>
          <li>To reduce risk of preterm birth</li>
          <li>Medical complications affecting one fetus</li>
          <li>To improve overall pregnancy outcomes</li>
        </ul>
      </section>

      {/* PROCEDURE */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-10">
            Procedure Overview
          </h2>

          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-4 items-stretch">

            {[
              {
                title: "Evaluation",
                desc: "Ultrasound is performed to assess the pregnancy.",
              },
              {
                title: "Guidance",
                desc: "Procedure is guided using real-time ultrasound.",
              },
              {
                title: "Procedure",
                desc: "A precise medical technique is used to reduce selected fetus.",
              },
              {
                title: "Monitoring",
                desc: "Remaining babies are monitored carefully.",
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

      {/* RISKS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Possible Risks (Discussed with Your Doctor)
        </h2>

        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Risk of miscarriage</li>
          <li>Infection (rare)</li>
          <li>Emotional impact</li>
        </ul>
      </section>

      {/* EMOTIONAL SUPPORT (VERY IMPORTANT ADDITION) */}
      <section className="bg-violet-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-violet-700 mb-4">
            Emotional Support & Guidance
          </h2>

          <p className="text-gray-700 leading-relaxed">
            This can be a deeply personal and emotional decision. It is important
            to discuss all concerns with your doctor and consider counseling
            support. You are not alone — medical teams are there to guide and
            support you through every step.
          </p>

        </div>
      </section>

      {/* AFTERCARE */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            After the Procedure
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Regular follow-up scans are required</li>
            <li>Rest and monitoring are important</li>
            <li>Doctor will guide further care</li>
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
          Consult a Specialist
        </h2>
        <p className="mb-6">
          Get expert guidance and compassionate care tailored to your situation.
        </p>
        <Link to="/appointment" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Book an Appointment
        </Link>
      </section>

    </div>
  );
}