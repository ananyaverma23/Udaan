import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, FlaskConical, Phone, MessageCircle } from "lucide-react";

export default function SpermBanking() {
  return (
    <div className="bg-gray-50 w-full">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Sperm Banking
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-lg opacity-90">
          Preserve your fertility by safely freezing and storing sperm for future use.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

        {/* WHAT IS SPERM BANKING */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-3">
            What is Sperm Banking?
          </h2>

          <p className="text-gray-600 mb-3">
            Sperm banking, also known as sperm cryopreservation, is a process where sperm is collected, frozen, and stored for future use.
          </p>

          <p className="text-gray-600">
            It allows individuals to preserve their fertility, especially in situations where their ability to produce healthy sperm may be affected later in life.
          </p>
        </section>

        {/* WHY CONSIDER */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-6">
            Why Consider Sperm Banking?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-blue-50 p-5 rounded-xl">
              <FlaskConical className="text-blue-600 mb-3" />
              <p className="font-semibold mb-2">Medical Treatments</p>
              <p className="text-sm text-gray-600">
                Chemotherapy or radiation can affect fertility.
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-xl">
              <Clock className="text-purple-600 mb-3" />
              <p className="font-semibold mb-2">Future Planning</p>
              <p className="text-sm text-gray-600">
                Delay parenthood while preserving fertility.
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-xl">
              <ShieldCheck className="text-green-600 mb-3" />
              <p className="font-semibold mb-2">Safety Backup</p>
              <p className="text-sm text-gray-600">
                Provides a backup in case of fertility decline.
              </p>
            </div>

          </div>
        </section>

      </div>

      {/* PROCESS */}
      <section className="w-full bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-teal-700 text-xl font-semibold mb-4">
            The Sperm Banking Process
          </h2>

          <p className="text-gray-600 mb-6">
            The process is simple, safe, and usually completed in a few steps.
          </p>

          <div className="flex flex-col gap-4">

            {[
              {
                title: "Initial Consultation & Screening",
                desc: "You first visit a fertility clinic where your medical history is reviewed and basic tests are done. This usually includes a semen analysis to check sperm quality and blood tests to screen for infections like HIV or hepatitis.",
              },
              {
                title: "Sample Collection",
                desc: "The sperm sample is typically collected through masturbation in a private room at the clinic using a sterile container. In some cases, you may be allowed to collect it at home if it can be delivered to the lab within a short time.",
              },
              {
                title: "Semen Analysis & Preparation",
                desc: "The collected sample is examined in a lab to evaluate sperm count, movement (motility), and shape (morphology). A special solution called a cryoprotectant is then added to protect the sperm from damage during freezing.",
              },
              {
                title: "Freezing (cryopreservation)",
                desc: "The prepared sperm is gradually cooled and frozen using liquid nitrogen at extremely low temperatures (around −196°C). This process preserves the sperm in a stable state for long-term storage.",
              },
              {
                title: "Storage & future use",
                desc: "The frozen sperm is stored securely in labeled containers and can remain viable for many years. When needed, it is thawed and used in fertility treatments such as IVF or IUI to help achieve pregnancy.",
              },
                
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm border w-fit max-w-full"
              >
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

        {/* HOW LONG */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-4">
            How Long Can Sperm Be Stored?
          </h2>

          <div className="bg-blue-50 p-5 rounded-xl">
            <p className="text-gray-700 text-sm">
              Sperm can be stored for many years without significant loss of quality. Successful pregnancies have been achieved using sperm stored for over a decade.
            </p>
          </div>
        </section>

        {/* SUCCESS */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-6">
            Success Rates
          </h2>

          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

            {[
              { label: "Frozen Sperm Survival Rate", value: 80 },
              { label: "Fertilization Success", value: 60 },
              { label: "Pregnancy Success (IUI/IVF)", value: 30 },
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

        {/* FAQs */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-sm text-gray-700">

            <div>
              <p className="font-semibold">Is sperm banking safe?</p>
              <p>Sperm freezing is a well-established and safe procedure.</p>
            </div>

            <div>
              <p className="font-semibold">Does freezing affect sperm quality?</p>
              <p>Some sperm may not survive thawing, but many remain viable for fertilization.</p>
            </div>

            <div>
              <p className="font-semibold">Who should consider sperm banking?</p>
              <p>Men undergoing medical treatments, delaying parenthood, or with fertility concerns.</p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl flex flex-col md:flex-row justify-between gap-6 items-center">

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Preserve Your Fertility Today
            </h2>
            <p className="text-sm opacity-90 mb-4">
              Take control of your future with safe and reliable sperm banking.
            </p>

            <Link to="/appointment">
              <button className="bg-white text-black px-6 py-2 rounded-full font-medium transition hover:bg-blue-600 hover:text-white hover:shadow-lg">
                Book Consultation
              </button>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur p-5 rounded-xl">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm mb-3 opacity-90">
              Our experts are here to guide you.
            </p>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-md">
                <Phone size={16} /> Call
              </button>

              <a
                href="https://wa.me/78668191921?text=Hi%20Udaan%20Team%2C%20I%20would%20like%20more%20information%20about%sperm%20freezing."
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