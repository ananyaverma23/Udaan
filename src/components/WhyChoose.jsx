import Container from "./Container";

export default function WhyChoose() {
  return (
    <div className="py-12">
      <Container>
        
        <h2 className="text-center text-blue-600 font-semibold mb-8">
          Why Choose UDAAN?
        </h2>

        <div className="grid grid-cols-3 gap-6">
          
          {["Expert Team", "Modern Technology", "Personalized Care"].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border text-center">
              
              <div className="w-10 h-10 bg-blue-100 rounded-full mx-auto mb-3"></div>

              <h3 className="text-sm font-semibold mb-2">{item}</h3>

              <p className="text-xs text-gray-500 leading-relaxed">
                High-quality medical care with expert support.
              </p>

            </div>
          ))}

        </div>

      </Container>
    </div>
  );
}