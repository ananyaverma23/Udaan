import Container from "./Container";

export default function WhyChoose() {
  const data = [
    {
      title: "Expert Team",
      desc: "Our team of fertility specialists, embryologists, fetal medicine experts, geneticists and support staff bring years of experience and expertise to provide the best care.",
    },
    {
      title: "Modern Technology",
      desc: "State-of-the-art facilities and advanced reproductive technologies to ensure the highest success rates.",
    },
    {
      title: "Personalized Care",
      desc: "Tailored treatment plans and compassionate support throughout your fertility journey.",
    },
  ];

  return (
    <div className="py-12 md:py-16 bg-[#f6f8fc]">
      <Container>

        {/* TITLE */}
        <h2 className="text-center text-[22px] sm:text-[26px] md:text-[34px] font-bold text-blue-600 mb-10 md:mb-14">
          Why Choose UDAAN?
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">

          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              
              {/* ICON */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 md:mb-6">
                <span className="text-blue-600 text-lg md:text-xl">✓</span>
              </div>

              {/* TITLE */}
              <h3 className="text-[18px] md:text-[20px] font-semibold text-purple-600 mb-3 md:mb-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </div>
  );
}