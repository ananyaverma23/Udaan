import React from "react";
import { Link } from "react-router-dom";
import { Apple, HeartPulse, Droplets, Phone, MessageCircle } from "lucide-react";

export default function NutritionalGuidance() {
  return (
    <div className="bg-gray-50 w-full">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Nutritional Guidance
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-lg opacity-90">
          Proper nutrition plays a vital role in improving fertility, supporting pregnancy, and enhancing overall reproductive health.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

        {/* WHAT IS */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-3">
            Why Nutrition Matters in Fertility
          </h2>

          <p className="text-gray-600 mb-3">
            A balanced diet helps regulate hormones, improve egg and sperm quality, and support a healthy reproductive system.
          </p>

          <p className="text-gray-600">
            Proper nutrition also prepares the body for pregnancy and reduces complications during fertility treatments.
          </p>
        </section>

        {/* KEY NUTRIENTS */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-6">
            Key Nutrients for Fertility
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-blue-50 p-5 rounded-xl">
              <Apple className="text-blue-600 mb-3" />
              <p className="font-semibold mb-2">Folic Acid</p>
              <p className="text-sm text-gray-600">
                Supports healthy egg development and reduces risk of birth defects.
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-xl">
              <HeartPulse className="text-purple-600 mb-3" />
              <p className="font-semibold mb-2">Iron</p>
              <p className="text-sm text-gray-600">
                Improves ovulation and supports healthy blood flow.
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-xl">
              <Droplets className="text-green-600 mb-3" />
              <p className="font-semibold mb-2">Omega-3</p>
              <p className="text-sm text-gray-600">
                Helps regulate hormones and improves reproductive health.
              </p>
            </div>

          </div>
        </section>

        {/* FOODS */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-6">
            Foods That Support Fertility
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="font-semibold mb-3">Recommended Foods</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Fresh fruits and vegetables</li>
                <li>• Whole grains</li>
                <li>• Lean proteins (eggs, fish, legumes)</li>
                <li>• Nuts and seeds</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="font-semibold mb-3">Foods to Limit</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Processed foods</li>
                <li>• Excess sugar</li>
                <li>• Trans fats</li>
                <li>• High caffeine intake</li>
              </ul>
            </div>

          </div>
        </section>

        {/* LIFESTYLE */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-6">
            Healthy Lifestyle Tips
          </h2>

          <div className="bg-blue-50 p-5 rounded-xl">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Maintain a healthy weight</li>
              <li>• Stay physically active</li>
              <li>• Manage stress effectively</li>
              <li>• Get adequate sleep</li>
            </ul>
          </div>
        </section>

        {/* WHO NEEDS */}
        <section>
          <h2 className="text-teal-700 text-xl font-semibold mb-4">
            Who Should Consider Nutritional Guidance?
          </h2>

          <p className="text-gray-600">
            Nutritional guidance is beneficial for individuals trying to conceive, undergoing fertility treatments like IUI or IVF, or looking to improve overall reproductive health.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl flex flex-col md:flex-row justify-between gap-6 items-center">

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Improve Your Fertility Through Nutrition
            </h2>
            <p className="text-sm opacity-90 mb-4">
              Get personalized dietary guidance from our experts.
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
              Speak with our nutrition specialists.
            </p>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-md">
                <Phone size={16} /> Call
              </button>

              <a
                href="https://wa.me/9304984291?text=Hi%20Udaan%20Team%2C%20I%20would%20like%20more%20information%20about%20Nutritional%20Guidance."
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