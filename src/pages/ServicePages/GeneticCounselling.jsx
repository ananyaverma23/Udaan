import { Link } from "react-router-dom";

export default function GeneticCounselling() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-3">Genetic Counselling</h1>
      <p className="text-gray-600 mb-4">We provide personalized genetic counselling and risk assessment for healthy pregnancy planning.</p>
      <Link to="/appointment" className="inline-flex px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">Book Appointment</Link>
    </div>
  );
}
