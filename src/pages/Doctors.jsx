import { useState } from "react";
import Container from "../components/Container";
import { Calendar } from "lucide-react";

export default function Doctors() {
  const [active, setActive] = useState("All");

  const doctors = [
    {
      name: "Dr. Sandip Mondal",
      dept: "Gynecology & Obstetrics",
      desc: "MBBS(HONS), MS (G&O), MRCOG (UK), Fellowship in Fetal Medicine & Reproductive Medicine.",
      // img: doc1
    },
    {
      name: "Dr. Dipanjana Datta",
      dept: "Genetic Counseling",
      desc: "Consultant Genetic Counselor, State Coordinator (WB), ORDI.",
    },
    {
      name: "Dr. Ruchika Kar Chaudhuri",
      dept: "Gynecology & Obstetrics",
      desc: "MBBS, MS (G&O), Specialist in women’s health.",
    },
    {
      name: "Dr. Sukanta Dutta",
      dept: "Internal Medicine",
      desc: "MBBS, MD (Medicine), expert in internal disorders.",
    },
    {
      name: "Dr. Ipsita Ghosh",
      dept: "Pediatrics",
      desc: "MBBS(HONS), MD (Pediatrics), child specialist.",
    },
    {
      name: "Dr. Arka Banerjee",
      dept: "General Surgery",
      desc: "MBBS, MS, DNB Surgery.",
    },
    {
      name: "Dr. Dibyajyoti Gupta",
      dept: "Cardiology",
      desc: "MBBS, Dip Cardiology.",
    },
  ];

  const categories = [
    "All",
    "Gynecology & Obstetrics",
    "Genetic Counseling",
    "Internal Medicine",
    "Pediatrics",
    "General Surgery",
    "Cardiology",
  ];

  const filtered =
    active === "All"
      ? doctors
      : doctors.filter((d) => d.dept === active);

  return (
    <div className="bg-[#f6f8fc]">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-14 md:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-[26px] sm:text-[34px] md:text-[42px] font-bold mb-4">
              Meet Our Expert Team of Doctors
            </h1>

            <p className="text-white/90 text-[14px] md:text-[17px] mb-6">
              Our team of highly qualified specialists brings together decades of experience.
            </p>

            <div className="inline-block bg-white/20 px-5 py-3 rounded-full backdrop-blur">
              <p className="font-semibold">24/7</p>
              <p className="text-xs text-white/80">Service Available</p>
            </div>

          </div>
        </Container>
      </div>

      {/* FILTER CHIPS */}
      <div className="py-6">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">

            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition
                  ${
                    active === cat
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}

          </div>
        </Container>
      </div>

      {/* DOCTORS GRID */}
      <div className="pb-12 md:pb-16">
        <Container>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filtered.map((doc, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >

                {/* IMAGE */}
                <div className="h-[220px] relative overflow-hidden">

                  {/* PLACEHOLDER */}
                  <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
                    Doctor Image
                  </div>

                  {/* USE THIS WHEN ADDING REAL IMAGE */}
                  {/*
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  */}

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* NAME */}
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                    <h3 className="font-semibold text-[15px]">{doc.name}</h3>
                    <p className="text-xs text-white/80">{doc.dept}</p>
                  </div>

                  {/* HOVER BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20">
                    <button className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 active:scale-95 transition">
                      <Calendar size={16} />
                      Book Appointment
                    </button>
                  </div>

                </div>

                {/* DESC */}
                <div className="p-4 text-center">
                  <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-3">
                    {doc.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </Container>
      </div>

      {/* FLOAT BUTTON */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
        <Calendar size={20} />
      </button>

    </div>
  );
}