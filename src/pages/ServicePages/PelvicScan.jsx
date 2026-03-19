import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFemale,
  FaHeartbeat,
  FaUserMd,
  FaStethoscope,
  FaQuestionCircle,
} from "react-icons/fa";

export default function FemalePelvicScan() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is pelvic scan painful?",
      a: "Abdominal scan is painless. Transvaginal scan may cause mild discomfort but is generally safe.",
    },
    {
      q: "Do I need a full bladder?",
      a: "Yes, for abdominal scans a full bladder helps improve image clarity.",
    },
    {
      q: "How long does it take?",
      a: "Usually 15–30 minutes depending on the case.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-14 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Female Pelvic Scan
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          A comprehensive ultrasound to evaluate reproductive health and diagnose
          common gynecological conditions.
        </p>
      </section>

      {/* QUICK INFO CARDS */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <FaStethoscope />,
            title: "Purpose",
            desc: "Evaluate uterus, ovaries & pelvic organs",
          },
          {
            icon: <FaHeartbeat />,
            title: "Used For",
            desc: "PCOS, fibroids, pain & fertility issues",
          },
          {
            icon: <FaUserMd />,
            title: "Type",
            desc: "Non-invasive ultrasound imaging",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-blue-600 text-2xl mb-3">
              {item.icon}
            </div>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* VIDEO + INFO */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        
        <iframe width="560" height="315" className="rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/2B1KRrid-b4?si=p0HzoiD8YdtI3DCN" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            What is a Pelvic Scan?
          </h2>
          <p className="text-gray-600 mb-3">
            A pelvic scan is an ultrasound that examines the uterus, ovaries,
            and surrounding structures to diagnose gynecological conditions.
          </p>
          <p className="text-gray-600">
            It is commonly used for menstrual issues, pelvic pain, infertility,
            and early pregnancy evaluation.
          </p>
        </div>

      </section>

      {/* TYPES */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Types of Pelvic Scan
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold mb-2">Abdominal Scan</h3>
              <p className="text-sm text-gray-600">
                Performed over the abdomen. Requires a full bladder for better
                visualization.
              </p>
            </div>

            <div className="p-6 bg-violet-50 rounded-xl">
              <h3 className="font-semibold mb-2">
                Transvaginal Scan (TVS)
              </h3>
              <p className="text-sm text-gray-600">
                Provides detailed internal images using a probe inserted gently
                into the vagina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS GRID */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Conditions It Helps Diagnose
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Ovarian cysts",
            "Uterine fibroids",
            "PCOS",
            "Endometrial issues",
            "Infertility causes",
            "Pregnancy conditions",
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow text-center">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHEN + DETECT (CARD STYLE) */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-violet-700 mb-3">
              When is it Needed?
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Irregular periods</li>
              <li>• Pelvic pain</li>
              <li>• PCOS evaluation</li>
              <li>• Infertility assessment</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-700 mb-3">
              What It Detects
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Cysts & fibroids</li>
              <li>• Endometrial thickness</li>
              <li>• Hormonal-related changes</li>
              <li>• Pregnancy-related issues</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROCESS */}
        <section className="py-14 px-4 bg-white">
        <h2 className="text-2xl text-center font-semibold text-blue-700 mb-10">
            How the Pelvic Scan is Performed
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">

            {[
            "Full bladder may be required for better imaging",
            "You lie comfortably; gel or probe is used",
            "Ultrasound captures real-time pelvic images",
            "Doctor evaluates uterus, ovaries & structures",
            "Report is generated with further guidance",
            ].map((step, i) => (
            <div
                key={i}
                className="bg-gray-50 p-5 rounded-xl shadow text-center hover:shadow-lg transition"
            >
                <div className="w-10 h-10 mx-auto mb-3 bg-blue-600 text-white rounded-full flex items-center justify-center">
                {i + 1}
                </div>

                <p className="text-sm text-gray-600 leading-snug">
                {step}
                </p>
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
          Book Your Pelvic Scan
        </h2>
        <Link to="/appointment">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Book Appointment
          </button>
        </Link>
      </section>

    </div>
  );
}