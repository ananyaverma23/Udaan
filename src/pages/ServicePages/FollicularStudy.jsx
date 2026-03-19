import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeartbeat,
  FaUserMd,
  FaFemale,
  FaCalendarAlt,
  FaQuestionCircle,
} from "react-icons/fa";

export default function FollicularStudy() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is a follicular study?",
      a: "It is a series of ultrasound scans used to monitor follicle growth and ovulation.",
    },
    {
      q: "When is it done?",
      a: "Usually between day 9 to day 16 of the menstrual cycle.",
    },
    {
      q: "How many scans are needed?",
      a: "Typically 2–4 scans depending on follicle development.",
    },
    {
      q: "Is it painful?",
      a: "It is usually painless, especially abdominal scans. TVS may cause mild discomfort.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-14 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Follicular Study Scan
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          A specialized ultrasound to track ovulation and improve chances of conception.
        </p>
      </section>

      {/* QUICK INFO */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <FaHeartbeat />,
            title: "Purpose",
            desc: "Track follicle growth & ovulation",
          },
          {
            icon: <FaCalendarAlt />,
            title: "Timing",
            desc: "Day 9–16 of menstrual cycle",
          },
          {
            icon: <FaUserMd />,
            title: "Use",
            desc: "Fertility planning & treatment",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-blue-600 text-2xl mb-3">
              {item.icon}
            </div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* VIDEO + INFO */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">

        <iframe width="560" height="315" className="rounded-lg shadow-lg" 
            src="https://www.youtube.com/embed/6nodrF_-KWQ?si=qZqGv-jQHGqVy_Ee" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            What is Follicular Study?
          </h2>
          <p className="text-gray-600 mb-3">
            Follicular study is a series of ultrasound scans used to monitor the
            growth and development of ovarian follicles.
          </p>
          <p className="text-gray-600">
            It helps determine the exact time of ovulation, improving chances of
            natural conception or assisted treatments like IUI and IVF.
          </p>
        </div>

      </section>

      {/* WHY IMPORTANT */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Why is Follicular Study Important?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Tracks ovulation accurately",
              "Improves conception chances",
              "Helps in fertility treatments",
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-5 rounded-xl text-center">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT MONITORS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          What Does It Monitor?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-violet-700 mb-3">
              Follicle Growth
            </h3>
            <p className="text-sm text-gray-600">
              Tracks size and maturity of follicles in ovaries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-3">
              Ovulation Timing
            </h3>
            <p className="text-sm text-gray-600">
              Identifies exact time when egg is released.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-violet-700 mb-3">
              Endometrial Thickness
            </h3>
            <p className="text-sm text-gray-600">
              Checks uterus lining for implantation readiness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-3">
              Response to Treatment
            </h3>
            <p className="text-sm text-gray-600">
              Monitors response in IVF or ovulation induction cycles.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 px-4">
        <h2 className="text-2xl text-center font-semibold text-blue-700 mb-8">
          How the Study is Done
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">
          {[
            "First scan around day 9",
            "Repeated scans track follicle growth",
            "Ovulation timing is identified",
            "Doctor monitors changes",
            "Guidance for conception is given",
          ].map((step, i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-xl shadow text-center">
              <div className="w-10 h-10 mx-auto mb-3 bg-blue-600 text-white rounded-full flex items-center justify-center">
                {i + 1}
              </div>
              <p className="text-sm text-gray-600">{step}</p>
            </div>
          ))}
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
        <FaFemale className="mx-auto text-4xl mb-4" />
        <h2 className="text-2xl font-semibold mb-3">
          Book Follicular Study
        </h2>
        <p className="mb-6">
          Track ovulation accurately and improve your chances of conception.
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