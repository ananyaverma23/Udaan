import Container from "./Container";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Initial Consultation",
      desc: "Comprehensive evaluation and personalized plan",
    },
    {
      number: "2",
      title: "Diagnostic Testing",
      desc: "Advanced tests for accurate diagnosis",
    },
    {
      number: "3",
      title: "Treatment Plan",
      desc: "Tailored medical treatment approach",
    },
    {
      number: "4",
      title: "Treatment & Support",
      desc: "Ongoing care and monitoring",
    },
  ];

  return (
    <div className="py-14 bg-[#f6f8fc]">
      <Container>

        <h2 className="text-center text-blue-600 font-semibold mb-10">
          Treatment Process
        </h2>

        <div className="grid grid-cols-4 gap-6 text-center">

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* Circle */}
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold mb-3">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold mb-1">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 max-w-[180px]">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </div>
  );
}