import Container from "./Container";

export default function Services() {
  return (
    <div className="py-12 md:py-16 bg-[#f6f8fc]">
      <Container>

        {/* TITLE */}
        <h2 className="text-center text-[22px] sm:text-[26px] md:text-[34px] font-bold text-teal-600 mb-10 md:mb-14">
          Our Services
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 h-full">

            {/* Fertility Testing */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-[#D4AF37] text-[20px] font-semibold mb-4">
                Fertility Testing
              </h3>

              <p className="text-gray-600 text-[14px] md:text-[15px] mb-4">
                Comprehensive diagnostic tests for both partners including:
              </p>

              <ul className="space-y-2 text-gray-600 text-[14px]">
                <li>• Semen Analysis</li>
                <li>• Ultrasound Scans</li>
                <li>• Hormone Testing</li>
                <li>• Tubal Patency Test (SIS)/(HSG)</li>
                <li>• Pre-conceptional genetic Screening</li>
              </ul>
            </div>

            {/* Combined Card (fills remaining height) */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition flex-1">

              {/* Additional */}
              <h3 className="text-[#D4AF37] text-[20px] font-semibold mb-3">
                Additional Fertility Services
              </h3>

              <ul className="space-y-2 text-gray-600 text-[14px] mb-6">
                <li>• Egg Freezing</li>
                <li>• Sperm Banking</li>
                <li>• Nutritional Guidance</li>
              </ul>

              {/* Fetal */}
              <h3 className="text-[#D4AF37] text-[20px] font-semibold mb-2">
                Fetal Medicine Services
              </h3>

              <p className="text-gray-600 text-[14px] mb-5">
                We provide best pregnancy scan & fetal medicine services in Purba Bardhaman.
              </p>

              {/* NESTED GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="text-teal-600 font-semibold mb-2">
                    A. Obstetric Scans
                  </h4>
                  <ul className="text-gray-600 text-[14px] space-y-1">
                    <li>• NT Scan</li>
                    <li>• Anomaly Scan</li>
                    <li>• Fetal Growth & Doppler Scan</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="text-teal-600 font-semibold mb-2">
                    B. Interventional Procedures
                  </h4>
                  <ul className="text-gray-600 text-[14px] space-y-1">
                    <li>• Amniocentesis</li>
                    <li>• Chorionic Villus Sampling</li>
                    <li>• Selective fetal reduction</li>
                    <li>• NIPT</li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 h-full">

            {/* CARD 1: IUI + IVF */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition">

              <h3 className="text-[#D4AF37] text-[20px] font-semibold mb-3">
                IUI Treatment
              </h3>

              <p className="text-gray-600 text-[14px] mb-5">
                We have facilities for both Husband and Donor sperm IUI.
              </p>

              <h3 className="text-[#D4AF37] text-[20px] font-semibold mb-3">
                IVF Treatment
              </h3>

              <p className="text-gray-600 text-[14px] mb-3">
                Advanced in-vitro fertilization techniques with high success rates. We offer:
              </p>

              <ul className="space-y-2 text-gray-600 text-[14px]">
                <li>• Conventional IVF</li>
                <li>• ICSI (Intracytoplasmic Sperm Injection)</li>
                <li>• Blastocyst Culture</li>
                <li>• Frozen Embryo Transfer</li>
              </ul>

            </div>

            {/* CARD 2: Genetic + OPD */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition flex-1">

              <h3 className="text-[#D4AF37] text-[20px] font-semibold mb-3">
                Genetic Counselling
              </h3>

              <p className="text-gray-600 text-[14px] mb-5">
                Dedicated & experienced geneticists to evaluate, diagnose and manage patients with genetic disorders.
              </p>

              <h3 className="text-[#D4AF37] text-[20px] font-semibold mb-3">
                Multispeciality OPD Services
              </h3>

              <p className="text-gray-600 text-[14px] mb-5">
                Team of physicians, nutritionists, surgeons & pediatricians to guide your journey.
              </p>

              <h3 className="text-[#D4AF37] text-[20px] font-semibold mb-2">
                General Ultrasound & Doppler Tests
              </h3>

              <p className="text-gray-600 text-[14px]">
                Comprehensive ultrasound and Doppler services for detailed insights.
              </p>

            </div>

          </div>
        </div>

      </Container>
    </div>
  );
}


