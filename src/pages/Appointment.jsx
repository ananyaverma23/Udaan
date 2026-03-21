import Container from "../components/Container";
import { MessageCircle } from "lucide-react";

export default function Appointment() {
  const whatsappUrl = "https://wa.me/7866819192?text=Hi Udaan, I want to book an appointment.";

  return (
    <div className="py-20 bg-blue-50/30 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-blue-100 text-center border border-blue-50">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle size={40} />
          </div>
          
          <h2 className="text-3xl font-bold text-blue-900 mb-4 tracking-tight">
            Book via WhatsApp
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            To provide the fastest service and personalized care, we handle all our bookings through our official WhatsApp Business account.
          </p>
          
          <ul className="text-left space-y-3 mb-10 inline-block mx-auto">
            <li className="flex items-center gap-2 text-gray-500 text-sm italic">
              <span className="text-blue-500">✓</span> Instant confirmation
            </li>
            <li className="flex items-center gap-2 text-gray-500 text-sm italic">
              <span className="text-blue-500">✓</span> Send reports directly
            </li>
            <li className="flex items-center gap-2 text-gray-500 text-sm italic">
              <span className="text-blue-500">✓</span> Direct chat with our team
            </li>
          </ul>

          <a 
            href={whatsappUrl}
            className="block w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#20ba59] transition-all shadow-lg shadow-green-100 active:scale-95"
          >
            Chat with us on WhatsApp
          </a>
          
          <p className="mt-6 text-[12px] text-gray-400">
            Clicking this will open WhatsApp on your device.
          </p>
        </div>
      </Container>
    </div>
  );
}