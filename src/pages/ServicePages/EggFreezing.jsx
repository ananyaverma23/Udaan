import React from "react";
import { Link } from "react-router-dom";
import { Snowflake, Clock, ShieldCheck, AlertTriangle, Phone, MessageCircle } from "lucide-react";

export default function EggFreezing() {

  const processSteps = [
    {
      title: "Initial consultation & testing",
      desc: "You meet a fertility specialist who evaluates your reproductive health through blood tests (like AMH) and an ultrasound to check ovarian reserve and follicle count.",
    },
    {
      title: "Ovarian Stimulation",
      desc: "Hormone injections are taken for about 8–12 days to stimulate the ovaries to produce multiple eggs, with regular monitoring through ultrasounds and blood tests.",
    },
    {
      title: "Egg maturation trigger",
      desc: "Once follicles are ready, a trigger injection is given to mature the eggs and time their release for retrieval.",
    },
    {
      title: "Egg retrieval procedure",
      desc: "Eggs are collected using a thin needle guided by ultrasound under light sedation; the procedure is quick and usually takes 15–20 minutes.",
    },
    {
      title: "Freezing (vitrification)",
      desc: "The eggs are rapidly frozen using vitrification, a technique that prevents damage and preserves their quality for long-term storage.",
    },
    {
      title: "Storage & future use",
      desc: "Eggs are stored in a specialized facility and can later be thawed, fertilized via IVF, and transferred to the uterus when pregnancy is desired.",
    },
  ];

  const reasons = [
    {
      icon: <Clock className="text-purple-600" />,
      title: "Delay Parenthood",
      desc: "Preserve fertility while focusing on career or personal goals.",
    },
    {
      icon: <ShieldCheck className="text-green-600" />,
      title: "Medical Reasons",
      desc: "Protect fertility before treatments like chemotherapy or surgery.",
    },
    {
      icon: <Snowflake className="text-blue-600" />,
      title: "Fertility Preservation",
      desc: "Store healthy eggs for future family planning.",
    },
  ];

  return (
    <div className="bg-gray-50 w-full">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Egg Freezing
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-lg opacity-90">
          Preserve your fertility by freezing eggs today for a secure and flexible future.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

        {/* WHAT IS */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-3">
            What is Egg Freezing?
          </h2>

          <p className="text-gray-600 mb-3">
            Egg freezing, also known as oocyte cryopreservation, is a process where a woman's eggs are collected, frozen, and stored for future use.
          </p>

          <p className="text-gray-600">
            This allows women to preserve their fertility and plan pregnancy at a later stage in life when they are ready.
          </p>
        </section>

        {/* WHY */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-6">
            Why Consider Egg Freezing?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border">
                <div className="mb-3">{item.icon}</div>
                <p className="font-semibold mb-2">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* PROCESS */}
      <section className="w-full bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-teal-700 text-xl font-semibold mb-4">
            The Egg Freezing Process
          </h2>

          <p className="text-gray-600 mb-6">
            The process involves multiple steps over a few weeks and is designed to safely collect and preserve eggs.
          </p>

          <div className="flex flex-col gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border w-full max-w-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-semibold">
                    {i + 1}
                  </div>
                  <p className="font-semibold text-blue-600">{step.title}</p>
                </div>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

        {/* BENEFITS */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-6">
            Benefits of Egg Freezing
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-xl">
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Preserves younger, healthier eggs</li>
                <li>• Provides reproductive flexibility</li>
                <li>• Reduces pressure of biological clock</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-xl">
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Useful before medical treatments</li>
                <li>• Supports family planning decisions</li>
                <li>• Can improve chances of future pregnancy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RISKS */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-4">
            Risks & Considerations
          </h2>

          <div className="space-y-4">

            <div className="bg-yellow-50 border p-5 rounded-xl flex gap-4">
              <AlertTriangle className="text-yellow-600" />
              <div>
                <p className="font-semibold">Medication Side Effects</p>
                <p className="text-sm text-gray-600">
                  Hormonal injections may cause bloating or mood changes.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border p-5 rounded-xl flex gap-4">
              <AlertTriangle className="text-orange-600" />
              <div>
                <p className="font-semibold">Procedure Risks</p>
                <p className="text-sm text-gray-600">
                  Egg retrieval is safe but involves minor surgical risks.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SUCCESS */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-6">
            Success Rates
          </h2>

          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

            {[
              { label: "Egg Survival After Thawing", value: 85 },
              { label: "Fertilization Success", value: 70 },
              { label: "Pregnancy Success", value: 40 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.label}</span>
                  <span className="text-blue-600 font-medium">
                    {item.value}%
                  </span>
                </div>

                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl flex flex-col md:flex-row justify-between gap-6 items-center">

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Secure Your Fertility Future Today
            </h2>
            <p className="text-sm opacity-90 mb-4">
              Egg freezing gives you the freedom to plan your life on your terms.
            </p>

            <Link to="/appointment">
              <button className="bg-white text-black px-6 py-2 rounded-full font-medium transition hover:bg-blue-600 hover:text-white hover:shadow-lg">
                Book Consultation
              </button>
            </Link>
            
          </div>

          <div className="bg-white/10 backdrop-blur p-5 rounded-xl">
            <h3 className="font-semibold mb-2">Need Guidance?</h3>
            <p className="text-sm mb-3 opacity-90">
              Speak with our fertility experts.
            </p>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-md">
                <Phone size={16} /> Call
              </button>

              <a
                href="https://wa.me/9304984291?text=Hi%20Udaan%20Team%2C%20I%20would%20like%20more%20information%20about%20egg%20freezing."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-md hover:bg-white/30 transition"
              >
                <MessageCircle size={16} /> Chat
              </a>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}