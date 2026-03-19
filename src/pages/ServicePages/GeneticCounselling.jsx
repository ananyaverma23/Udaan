import { HeartPulse, Microscope, Users, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function GeneticCounselling() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Genetic Counselling
          </h1>
          <p className="text-sm md:text-base max-w-3xl">
            Genetic counselling is a medical service that helps individuals and families
            understand genetic conditions, inherited disorders, and risks during pregnancy.
            It provides guidance, testing options, and emotional support for informed decisions.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-violet-700 mb-4">
              What is Genetic Counselling?
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Genetic counselling involves evaluating family history, medical records,
              and risk factors to assess the chances of genetic disorders. It is commonly
              recommended during pregnancy, especially when screening tests like NT Scan
              (Nuchal Translucency Scan) indicate potential concerns.
            </p>

            <p className="text-gray-600 text-sm md:text-base">
              It helps patients understand conditions such as Down syndrome, thalassemia,
              and other inherited disorders, along with available diagnostic tests.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-blue-700 mb-3">
              Why is it Important?
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Identifies risk of genetic disorders</li>
              <li>• Helps in early diagnosis</li>
              <li>• Guides decision-making during pregnancy</li>
              <li>• Provides emotional and psychological support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-6">
            Genetic Counselling Process
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <Users className="text-violet-600 mb-3" />
              <h3 className="font-semibold text-sm mb-2">Family History Review</h3>
              <p className="text-xs text-gray-600">
                Detailed assessment of family and medical history to identify inherited risks.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <Microscope className="text-blue-600 mb-3" />
              <h3 className="font-semibold text-sm mb-2">Risk Assessment</h3>
              <p className="text-xs text-gray-600">
                Evaluation of genetic risks using screening tests like NT Scan and blood tests.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <HeartPulse className="text-violet-600 mb-3" />
              <h3 className="font-semibold text-sm mb-2">Testing Guidance</h3>
              <p className="text-xs text-gray-600">
                Recommendation of diagnostic tests such as NIPT, CVS, or amniocentesis.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <ShieldCheck className="text-blue-600 mb-3" />
              <h3 className="font-semibold text-sm mb-2">Counselling & Support</h3>
              <p className="text-xs text-gray-600">
                Explanation of results and emotional support for informed decisions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONDITIONS SECTION */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl md:text-2xl font-semibold text-violet-700 mb-6">
            Conditions Evaluated
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="bg-violet-50 p-4 rounded-lg">Down Syndrome</div>
            <div className="bg-blue-50 p-4 rounded-lg">Thalassemia</div>
            <div className="bg-violet-50 p-4 rounded-lg">Cystic Fibrosis</div>
            <div className="bg-blue-50 p-4 rounded-lg">Sickle Cell Disease</div>
            <div className="bg-violet-50 p-4 rounded-lg">Chromosomal Abnormalities</div>
            <div className="bg-blue-50 p-4 rounded-lg">Inherited Genetic Disorders</div>
          </div>

        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-6">
            Learn More About Genetic Counselling
          </h2>

          <div className="relative w-full aspect-video rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl bg-slate-900 border-4 md:border-8 border-white transition-all duration-300">
            <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Qss-agfB0qk?si=Df8_k0r5SJrFDvJL" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-violet-600 to-blue-600 text-white py-10 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          Book Your Genetic Counselling Session
        </h2>
        <p className="text-sm md:text-base mb-4">
          Get expert guidance to understand your genetic health and make informed decisions.
        </p>
        <Link to="/appointment">
          <button className="bg-white text-blue-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            Book Appointment
          </button>
        </Link>
      </section> 

    </div>
  );
}