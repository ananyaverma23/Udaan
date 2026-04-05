import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-[#F0F7F4] px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 text-center shadow-lg">
        <p className="mb-3 font-['Quicksand'] text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
          404
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mx-auto mb-8 max-w-xl font-['Quicksand'] text-base leading-relaxed text-slate-600">
          The page you requested is unavailable or may have moved. You can go
          back to the homepage or book an appointment from here.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-teal-600 px-6 py-3 font-['Quicksand'] font-semibold text-white transition hover:bg-teal-700"
          >
            Go Home
          </Link>
          <Link
            to="/appointment"
            className="rounded-full border border-slate-200 px-6 py-3 font-['Quicksand'] font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
