import Container from "./Container";

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-14">
      <Container>

        <div className="text-center max-w-[700px] mx-auto">
          
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Start Your Journey?
          </h2>

          <p className="text-sm text-white/90 mb-6">
            Book your consultation today and take the first step toward parenthood with expert care.
          </p>

          <button className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm font-medium">
            Book Appointment
          </button>

        </div>

      </Container>
    </div>
  );
}