import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Calendar } from "lucide-react";

export default function Doctors() {
  const [active, setActive] = useState("All");

  const doctors = [
    {
      name: "Dr. Sandip Mondal",
      dept: "Gynecology & Obstetrics",
      desc: "MBBS(HONS)(Gold Medalist), MS (G&O), MRCOG - I (UK)(LONDON), Fellowship in Fetal Medicine (ICOG)(TN), Fellowship in Reproductive Medicine (NOVA-WINGS IVF, AHMEDABAD), Fellowship in Advanced Laproscopic Surgery (FALS)",
      img: "/Sandip Mondal.jpeg",
    },
    {
      name: "Dr. Dipanjana Datta",
      dept: "Genetic Counseling",
      desc: "Consultant Genetic Counselor State Co-ordinator (WB) Organization of Rare Disease India (ORDI).",
    },
    {
      name: "Dr. Ruchika Kar Chaudhuri",
      dept: "Gynecology & Obstetrics",
      desc: "MBBS, MS (G&O)",
    },
    {
      name: "Dr. Sukanta Dutta",
      dept: "Internal Medicine",
      desc: "MBBS, MD (MEDICINE)",
    },
    {
      name: "Dr. Ipsita Ghosh",
      dept: "Pediatrics",
      desc: "MBBS(HONS) MD(PAEDIATRICS)",
    },
    {
      name: "Dr. Arka Banerjee",
      dept: "General Surgery",
      desc: "MBBS, MS (SURGERY), DNB (SURGERY)",
    },
    {
      name: "Dr. Dibyajyoti Gupta",
      dept: "Cardiology",
      desc: "MBBS, Dip Cardiology (PGDCC)",
    },
  ];

  const categories = [
    "All",
    "Gynecology & Obstetrics",
    "Genetic Counseling",
    "Internal Medicine",
    "Pediatrics",
  ];

  const filtered =
    active === "All"
      ? doctors
      : doctors.filter((d) => d.dept === active);

  return (
    <div className="bg-[#f6f8fc]">

      {/* HERO */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-14 md:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-[26px] sm:text-[34px] md:text-[42px] font-bold mb-4">
              Meet Our Expert Team of Doctors
            </h1>

            <p className="text-white/90 text-[14px] md:text-[17px] mb-6">
              Our team of highly qualified specialists brings together decades of experience in fertility care, ensuring you receive the best possible treatment and support on your journey to parenthood.
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
                      ? "bg-teal-600 text-white border-teal-600"
                      : "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
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
                <div className="relative h-[240px] overflow-hidden bg-slate-100">

                  {doc.img ? (
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      style={{ objectPosition: "center 10%" }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-gray-300 text-sm text-gray-500">
                      Doctor Image
                    </div>
                  )}

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* NAME */}
                  <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-black">
                    <h3 className="text-[15px] font-bold">{doc.name}</h3>
                    <p className="text-xs font-semibold text-black">{doc.dept}</p>
                  </div>

                  {/* HOVER BUTTON */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                    <Link
                      to="/appointment"
                      className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-teal-600 shadow-md transition hover:scale-105 active:scale-95"
                    >
                      <Calendar size={16} />
                      Book Appointment
                    </Link>
                  </div>

                </div>

                {/* DESC */}
                <div className="p-4 text-center">
                  <p className="text-[13px] text-black leading-relaxed line-clamp-3">
                    {doc.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </Container>
      </div>

      {/* FLOAT BUTTON */}
      <button className="fixed bottom-6 right-6 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
        <Calendar size={20} />
      </button>

    </div>
  );
}


