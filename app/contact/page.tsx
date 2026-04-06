"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

const services = [
  "Irrigation Design & Engineering",
  "Hydrology & Water Resources",
  "Geotechnical Studies",
  "Solar-Pump Systems",
  "GIS & Surveying",
  "Environmental Impact Assessment",
  "Construction Supervision",
  "Feasibility Study",
  "Other",
];

function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", organization: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Please enter a valid email";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("loading");
    // Simulate form submission (replace with Formspree or API endpoint)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", organization: "", service: "", message: "" });
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-[20px] font-700 text-[#0A2540] mb-2" style={{ fontWeight: 700 }}>
          Message Sent Successfully!
        </h3>
        <p className="text-[#64748B] text-[15px] max-w-sm">
          Thank you for reaching out. Our team will review your enquiry and respond within 2 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#0066CC] font-600 text-[14px] hover:text-[#FF6600] transition-colors"
          style={{ fontWeight: 600 }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputBase = "w-full px-4 py-3 rounded-lg border text-[14.5px] text-[#0A2540] bg-white focus:outline-none transition-all";
  const inputNormal = "border-[#E2E8F0] focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/10";
  const inputError = "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-[13px] font-600 text-[#0A2540] mb-1.5" style={{ fontWeight: 600 }}>
            Full Name <span className="text-[#FF6600]">*</span>
          </label>
          <input
            id="name" name="name" type="text"
            value={form.name} onChange={handleChange}
            placeholder="Dr. Ahmed Hassan"
            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-red-500 text-[12px] mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-[13px] font-600 text-[#0A2540] mb-1.5" style={{ fontWeight: 600 }}>
            Email Address <span className="text-[#FF6600]">*</span>
          </label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handleChange}
            placeholder="ahmed@organization.org"
            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-red-500 text-[12px] mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-[13px] font-600 text-[#0A2540] mb-1.5" style={{ fontWeight: 600 }}>
            Phone Number
          </label>
          <input
            id="phone" name="phone" type="tel"
            value={form.phone} onChange={handleChange}
            placeholder="+251 90 000 0000"
            className={`${inputBase} ${inputNormal}`}
          />
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-[13px] font-600 text-[#0A2540] mb-1.5" style={{ fontWeight: 600 }}>
            Organization / Company
          </label>
          <input
            id="organization" name="organization" type="text"
            value={form.organization} onChange={handleChange}
            placeholder="FAO Ethiopia"
            className={`${inputBase} ${inputNormal}`}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-[13px] font-600 text-[#0A2540] mb-1.5" style={{ fontWeight: 600 }}>
          Service Required <span className="text-[#FF6600]">*</span>
        </label>
        <select
          id="service" name="service"
          value={form.service} onChange={handleChange}
          className={`${inputBase} ${errors.service ? inputError : inputNormal} appearance-none cursor-pointer`}
          aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="">Select a service...</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p id="service-error" className="text-red-500 text-[12px] mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-[13px] font-600 text-[#0A2540] mb-1.5" style={{ fontWeight: 600 }}>
          Project Description / Message <span className="text-[#FF6600]">*</span>
        </label>
        <textarea
          id="message" name="message"
          value={form.message} onChange={handleChange}
          rows={5}
          placeholder="Briefly describe your project, location, scope, and any specific requirements..."
          className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none`}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className="text-red-500 text-[12px] mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center text-[15px] py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        id="contact-submit"
      >
        {status === "loading" ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0066CC 100%)" }}
        aria-label="Contact page header"
      >
        <div className="relative z-10 container-custom text-white text-center">
          <span className="section-label text-[#FF6600] block mb-3">Get In Touch</span>
          <h1
            className="text-[clamp(32px,5vw,58px)] font-900 leading-tight mb-5"
            style={{ fontWeight: 900, letterSpacing: "-0.025em" }}
          >
            Contact HAGEC
          </h1>
          <p className="text-white/75 text-[17px] max-w-xl mx-auto leading-relaxed">
            Have a project to discuss? Send us an enquiry and our engineering team will respond within
            2 business days.
          </p>
        </div>
      </section>

      {/* ── Contact Section ───────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Contact details and form">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-[22px] font-700 text-[#0A2540] mb-6" style={{ fontWeight: 700 }}>
                Our Office
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#0066CC]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-600 text-[#0A2540] mb-0.5" style={{ fontWeight: 600 }}>Address</div>
                    <div className="text-[14px] text-[#64748B] leading-relaxed">
                      Jigjiga, Somali Region<br />
                      Federal Democratic Republic of Ethiopia
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#0066CC]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-600 text-[#0A2540] mb-0.5" style={{ fontWeight: 600 }}>Phone</div>
                    <a href="tel:+251900000000" className="text-[14px] text-[#64748B] hover:text-[#0066CC] transition-colors">+251 90 000 0000</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#0066CC]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-600 text-[#0A2540] mb-0.5" style={{ fontWeight: 600 }}>Email</div>
                    <a href="mailto:info@hagec.et" className="text-[14px] text-[#64748B] hover:text-[#0066CC] transition-colors">info@hagec.et</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#0066CC]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-600 text-[#0A2540] mb-0.5" style={{ fontWeight: 600 }}>Working Hours</div>
                    <div className="text-[14px] text-[#64748B]">Mon – Fri: 8:00 AM – 5:00 PM EAT</div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-8 rounded-xl overflow-hidden border border-[#E2E8F0] shadow-card h-[220px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123456!2d42.7910!3d9.3500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJigjiga%2C+Ethiopia!5e0!3m2!1sen!2set!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HAGEC Office Location – Jigjiga, Ethiopia"
                  aria-label="Google map showing HAGEC office in Jigjiga, Ethiopia"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E2E8F0] shadow-lg p-8 md:p-10">
              <h2 className="text-[22px] font-700 text-[#0A2540] mb-2" style={{ fontWeight: 700 }}>
                Send Us an Enquiry
              </h2>
              <p className="text-[#64748B] text-[14px] mb-6">
                Fill in the form below and our engineering team will get back to you within 2 business days.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
