import Container from "./Container";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Initial Consultation",
      desc: "Comprehensive evaluation and treatment planning",
    },
    {
      number: "2",
      title: "Diagnostic Testing",
      desc: "Complete fertility assessment and analysis",
    },
    {
      number: "3",
      title: "Treatment Plan",
      desc: "Personalized treatment protocol development",
    },
    {
      number: "4",
      title: "Treatment & Support",
      desc: "Ongoing care and monitoring throughout the process",
    },
  ];

  return (
    <div className="py-12 md:py-16 bg-[#f6f8fc]">
      <Container>

        {/* TITLE */}
        <h2 className="text-center text-[22px] sm:text-[26px] md:text-[34px] font-bold text-teal-600 mb-12 md:mb-16">
          Treatment Process
        </h2>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* CIRCLE */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-[18px] md:text-[20px] font-semibold mb-4">
                {step.number}
              </div>

              {/* TITLE */}
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#D4AF37] mb-2">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed max-w-[220px]">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </div>
  );
}


