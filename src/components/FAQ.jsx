import { useState } from "react";
import Container from "./Container";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is IUI & its success rate?",
      a: "IUI or Intrauterine Insemination is a fertility treatment where sperm is placed directly into women's uterus to increase the chances of fertilization.The success rate of IUI on the first try usually range around 10% to 20%. You can expect to undergo about 3-4 IUI cycles to get pregnant.",
    },
    {
      q: "What is IVF?",
      a: "In Vitro Fertilization (IVF) is a process where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The resulting embryos are then transferred to the uterus.",
    },
    {
      q: "How long does the IVF process take?",
      a: "A complete IVF cycle typically takes 4-8 weeks, including initial consultation, ovarian stimulation, egg retrieval, fertilization, and embryo transfer, although the exact duration can vary depending on individual factors.",
    },
    {
      q: "What are the success rates?",
      a: "Success rates vary depending on various factors including age, medical history, and treatment type. Our clinic maintains a success rate of around 50% for women under 35.",
    },
    {
      q: "What is NT Scan?",
      a: "A prenatal screening test performed during the first trimester of pregnancy typically 11 to 14 weeks.",
    },
    {
      q: "What is Anomaly Scan?",
      a: "Anomaly scan, also known as Level II scan or TIFFA scan, is a detailed ultrasound performed during the second trimester of pregnancy, typically between 18 and 22 weeks.",
    },
    {
      q: "What is Fetal Echo?",
      a: "A Fetal echo or fetal echocardiogram is a specialized ultrasound test during pregnancy that provides a detailed view of the baby's heart. It's typically performed when there's a concern about the baby's heart or if the pregnancy has a high risk factor for congenital heart disease.",
    },
    {
      q: "What is Fetal Growth & Doppler Scan?",
      a: "Fetal Growth & Doppler Scans are pregnancy ultrasound procedures used to access the baby's size and well being.",
    },
    { q: "What is Fetal Neurosonogram?",
      a: "A fetal neurosonogram is a prenatal ultrasound procedure that examines the fetal brain and spine for any abnormalities or malformations."
    },
    {
      q: "What is Amniocentesis?",
      a: "Aminocentesis is a prenatal diagnostic test where a small sample of amniotic fluid, which surrounds and protects the developing fetus, is extracted from the womb. Aminocentesis is typically performed between 15 and 20 weeks of pregnancy.",
    },
    {
      q: "What is Chorionic Villus Sampling?",
      a: "Chorionic Villus Sampling(CVS) is a prenatal diagnostic test performed during early pregnancy(11-14 weeks) to detect genetic disorders and chromosomal abnormalities in the developing fetus.",
    },
    {
      q: "What is Selective fetal reduction?",
      a: "Selective fetal reducing(SFR) is a procedure to reduce the number of fetuses in multiple pregnancy(e.g., triplets, quadruplets) to a twin or singleton pregnancy.",
    },
  ];

  return (
    <div className="py-14 bg-[#f6f8fc]">
      <Container>

        {/* Title */}
        <h2 className="text-center text-blue-600 font-semibold mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4 max-w-[900px] mx-auto">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-sm border cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {/* Question */}
              <h3 className="text-sm font-semibold text-purple-600">
                {item.q}
              </h3>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}

        </div>

      </Container>
    </div>
  );
}