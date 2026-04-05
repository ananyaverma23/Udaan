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
    {
      q: "What is Fetal Neurosonogram?",
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

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 md:py-16 bg-[#f6f8fc]">
      <Container>

        {/* TITLE */}
        <h2 className="text-center text-[22px] sm:text-[26px] md:text-[34px] font-bold font-['Quicksand'] text-teal-600 mb-10 md:mb-14">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="max-w-3xl mx-auto space-y-4">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-5 md:px-6 py-4 text-left"
              >
                <span className="text-[15px] md:text-[17px] font-semibold font-['Quicksand'] text-[#D4AF37]">
                  {faq.q}
                </span>

                <span className="text-teal-600 text-xl font-['Quicksand']">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed font-['Quicksand']">
                  {faq.a}
                </p>
              </div>

            </div>
          ))}

        </div>

      </Container>
    </div>
  );
}