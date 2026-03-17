import Container from "./Container";

export default function Services() {
  return (
    <div className="py-14 bg-[#f6f8fc]">
      <Container>

        <h2 className="text-center text-blue-600 font-semibold mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            {/* Fertility Testing */}
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <h3 className="text-sm font-semibold text-purple-600 mb-3">
                Fertility Testing
              </h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Comprehensive evaluation for both partners</li>
                <li>• Hormonal Analysis</li>
                <li>• Ultrasound Scans</li>
                <li>• Semen Analysis</li>
                <li>• Pre-conception Genetic Screening</li>
              </ul>
            </div>

            {/* Additional Services */}
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <h3 className="text-sm font-semibold text-purple-600 mb-3">
                Additional Fertility Services
              </h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Egg Freezing</li>
                <li>• Sperm Banking</li>
                <li>• Nutritional Guidance</li>
              </ul>
            </div>

            {/* Fetal Medicine (complex card) */}
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <h3 className="text-sm font-semibold text-purple-600 mb-4">
                Fetal Medicine Services
              </h3>

              <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">

                {/* Left sub-column */}
                <div>
                  <p className="font-semibold text-blue-600 mb-2">
                    A. Obstetric Scans
                  </p>
                  <ul className="space-y-1">
                    <li>• Dating Scan</li>
                    <li>• NT Scan</li>
                    <li>• Anomaly Scan</li>
                    <li>• Growth Scan</li>
                    <li>• Fetal Echo</li>
                  </ul>
                </div>

                {/* Right sub-column */}
                <div>
                  <p className="font-semibold text-blue-600 mb-2">
                    B. Interventional Procedures
                  </p>
                  <ul className="space-y-1">
                    <li>• Amniocentesis</li>
                    <li>• Chorionic Villus Sampling</li>
                    <li>• Cordocentesis</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            {/* IUI */}
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <h3 className="text-sm font-semibold text-purple-600 mb-3">
                IUI Treatment
              </h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Cost-effective first-line treatment</li>
                <li>• Ovulation Induction</li>
                <li>• Insemination Procedure</li>
              </ul>
            </div>

            {/* IVF */}
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <h3 className="text-sm font-semibold text-purple-600 mb-3">
                IVF Treatment
              </h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Controlled Ovarian Stimulation</li>
                <li>• Egg Retrieval</li>
                <li>• Embryo Transfer</li>
              </ul>
            </div>

            {/* Genetic */}
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <h3 className="text-sm font-semibold text-purple-600 mb-3">
                Genetic Counselling
              </h3>
              <p className="text-xs text-gray-600">
                Risk assessment and guidance for inherited conditions.
              </p>
            </div>

            {/* OPD */}
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <h3 className="text-sm font-semibold text-purple-600 mb-3">
                Multispeciality OPD Services
              </h3>
              <p className="text-xs text-gray-600">
                Comprehensive care including ultrasound and Doppler tests.
              </p>
            </div>

          </div>

        </div>

      </Container>
    </div>
  );
}