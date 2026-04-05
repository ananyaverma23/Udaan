import { useRef, useState } from "react";
import {
  CalendarDays,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Container from "../components/Container";
import { openWhatsAppChat } from "../utils/whatsapp";

const appointmentTypes = [
  "Fertility Consultation",
  "Pregnancy / Fetal Scan",
  "IVF / IUI",
  "General Checkup",
  "Other",
];

const formFieldClassName =
  "w-full rounded-2xl border border-slate-200 bg-[#f8fbfa] px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-100";

const formLabelClassName =
  "mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500";

const WHATSAPP_PHONE = "917866819192";

export default function Appointment() {
  const dateInputRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    date: "",
    message: "",
  });
  const [dateDisplay, setDateDisplay] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const formatDateForDisplay = (isoDate) => {
    if (!isoDate) return "";

    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  const normalizeDateInput = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);

    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;

    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  };

  const parseDisplayDate = (value) => {
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);

    if (!match) return null;

    const [, day, month, year] = match;
    const isoDate = `${year}-${month}-${day}`;
    const parsedDate = new Date(`${isoDate}T00:00:00`);

    if (Number.isNaN(parsedDate.getTime())) return null;

    const isExactMatch =
      parsedDate.getFullYear() === Number(year) &&
      parsedDate.getMonth() + 1 === Number(month) &&
      parsedDate.getDate() === Number(day);

    return isExactMatch ? isoDate : null;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleDateTextChange = (event) => {
    const normalizedValue = normalizeDateInput(event.target.value);
    const parsedDate = parseDisplayDate(normalizedValue);

    setDateDisplay(normalizedValue);
    setForm((currentForm) => ({
      ...currentForm,
      date: parsedDate && parsedDate >= today ? parsedDate : "",
    }));
  };

  const handleDatePickerChange = (event) => {
    const isoDate = event.target.value;

    setDateDisplay(formatDateForDisplay(isoDate));
    setForm((currentForm) => ({
      ...currentForm,
      date: isoDate,
    }));
  };

  const openDatePicker = () => {
    if (typeof dateInputRef.current?.showPicker === "function") {
      dateInputRef.current.showPicker();
      return;
    }

    dateInputRef.current?.focus();
    dateInputRef.current?.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.date) {
      alert("Please enter a valid preferred date in DD/MM/YYYY format.");
      return;
    }

    const preferredDate = dateDisplay || formatDateForDisplay(form.date);

    const text = `
Hi Udaan, I want to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Appointment Type: ${form.type}
Preferred Date: ${preferredDate}

Concern: ${form.message || "Not specified"}
`.trim();

    openWhatsAppChat({
      phone: WHATSAPP_PHONE,
      text,
    });
  };

  return (
    <div className="bg-[#eff7f4] pb-20 pt-28 font-['Quicksand'] text-slate-800">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <section className="rounded-[2rem] bg-gradient-to-br from-[#12353c] via-teal-700 to-[#0f766e] p-8 text-white shadow-[0_24px_70px_rgba(15,118,110,0.22)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
              <Stethoscope size={14} />
              Appointment Request
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-[2.8rem]">
              Book your visit in a simple, clean way.
            </h1>

            <p className="mt-5 text-sm leading-7 text-white/82 md:text-base">
              Fill in your details, choose the type of consultation, and send
              the request on WhatsApp. Our team will review it and guide you
              with the next available slot.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.4rem] border border-white/12 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/14">
                    <CalendarDays size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Faster coordination</p>
                    <p className="mt-1 text-sm leading-6 text-white/76">
                      Send your preferred date directly so the team can respond
                      with the closest available appointment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-white/12 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/14">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">One clear handoff</p>
                    <p className="mt-1 text-sm leading-6 text-white/76">
                      Your message opens in WhatsApp prefilled, so you can review
                      it before sending.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-white/12 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/14">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Focused on essentials</p>
                    <p className="mt-1 text-sm leading-6 text-white/76">
                      We only ask for the details needed to help the clinic
                      prepare for your visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
            <div className="mb-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-teal-600">
                Booking Form
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Request an appointment
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Please complete the form below and continue on WhatsApp to share
                your appointment request with Udaan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="appointment-name" className={formLabelClassName}>
                  Full Name
                </label>
                <input
                  id="appointment-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className={formFieldClassName}
                />
              </div>

              <div>
                <label htmlFor="appointment-phone" className={formLabelClassName}>
                  Phone Number
                </label>
                <input
                  id="appointment-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  required
                  className={formFieldClassName}
                />
              </div>

              <div>
                <label htmlFor="appointment-type" className={formLabelClassName}>
                  Appointment Type
                </label>
                <select
                  id="appointment-type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                  className={formFieldClassName}
                >
                  <option value="">Select appointment type</option>
                  {appointmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="appointment-date" className={formLabelClassName}>
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    id="appointment-date"
                    type="text"
                    inputMode="numeric"
                    value={dateDisplay}
                    onChange={handleDateTextChange}
                    placeholder="DD/MM/YYYY"
                    required
                    className={`${formFieldClassName} pr-14`}
                  />
                  <button
                    type="button"
                    onClick={openDatePicker}
                    aria-label="Open date picker"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-teal-700"
                  >
                    <CalendarDays size={18} />
                  </button>
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={form.date}
                    onChange={handleDatePickerChange}
                    min={today}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 h-0 w-0 opacity-0"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Use format <span className="font-semibold">DD/MM/YYYY</span>.
                </p>
              </div>

              <div>
                <label htmlFor="appointment-message" className={formLabelClassName}>
                  Concern or Notes
                </label>
                <textarea
                  id="appointment-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share any symptoms, scan requirement, treatment concern, or previous reports."
                  className={`${formFieldClassName} min-h-32 resize-none py-4`}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-[1.2rem] bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-[0_16px_36px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#20ba59]"
              >
                <MessageCircle size={20} />
                Continue on WhatsApp
              </button>

              <p className="text-center text-xs leading-6 text-slate-400">
                WhatsApp will open with your details prefilled so you can review
                them before sending.
              </p>
            </form>
          </section>
        </div>
      </Container>
    </div>
  );
}
