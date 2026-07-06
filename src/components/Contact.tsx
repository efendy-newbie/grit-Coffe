/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BRAND_INFO } from "../data";
import { ContactFormInput } from "../types";
import { MapPin, Clock, Mail, Phone, Instagram, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formValues, setFormValues] = useState<ContactFormInput>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email || !formValues.message) {
      setSubmitStatus("error");
      setErrorMessage("Semua bidang formulir wajib diisi.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      setSubmitStatus("error");
      setErrorMessage("Silakan masukkan alamat email yang valid.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormValues({ name: "", email: "", message: "" });
    }, 1200);
  };

  const handleGetDirections = () => {
    const daddr = encodeURIComponent(BRAND_INFO.address);
    window.open(`https://maps.google.com/?daddr=${daddr}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-charcoal text-white relative">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left Column: Contact info & Address (5 columns out of 12) */}
          <div className="md:col-span-5 flex flex-col justify-between h-full animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div>
              <span className="text-terracotta text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                Connect With Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-8">
                Find Us.
              </h2>

              {/* Stacked Long-Spaced Info Lines */}
              <div className="space-y-8" id="contact-info-list">
                {/* Location */}
                <div className="flex gap-4 items-start" id="contact-address-block">
                  <div className="bg-white/5 p-3 rounded-sm text-terracotta border border-white/10 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-white/50 tracking-wider font-semibold mb-1">Our Location</h4>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-cream/90">{BRAND_INFO.address}</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex gap-4 items-start" id="contact-hours-block">
                  <div className="bg-white/5 p-3 rounded-sm text-terracotta border border-white/10 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-white/50 tracking-wider font-semibold mb-1">Operating Hours</h4>
                    <div className="font-sans text-sm md:text-base text-cream/90 space-y-1">
                      {BRAND_INFO.hours.map((item, idx) => (
                        <p key={idx}>
                          <span className="font-semibold text-white">{item.days}:</span> {item.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="flex gap-4 items-start" id="contact-direct-block">
                  <div className="bg-white/5 p-3 rounded-sm text-terracotta border border-white/10 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-white/50 tracking-wider font-semibold mb-1">Direct Contact</h4>
                    <p className="font-sans text-sm md:text-base text-cream/90 hover:text-terracotta transition-colors duration-150">
                      <a href={`mailto:${BRAND_INFO.email}`}>{BRAND_INFO.email}</a>
                    </p>
                    <p className="font-sans text-xs text-white/55 mt-1">{BRAND_INFO.phone}</p>
                  </div>
                </div>
              </div>

              {/* Action Button: Get Directions */}
              <div className="mt-10">
                <button
                  onClick={handleGetDirections}
                  className="bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-charcoal active:scale-97 rounded-sm py-3 px-6 font-sans text-base font-semibold transition-all duration-200 cursor-pointer"
                  id="contact-directions-btn"
                >
                  Get Directions
                </button>
              </div>
            </div>

            {/* Line-style Bold Stroke Social Media Icons */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-6" id="contact-socials">
              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-terracotta transition-colors duration-200"
                id="social-ig"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6 stroke-[2px]" />
              </a>
              <a
                href={BRAND_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-terracotta transition-colors duration-200 text-lg font-bold"
                id="social-tiktok"
                aria-label="Follow us on TikTok"
              >
                <span className="font-serif leading-none tracking-tighter">tK</span>
              </a>
              <a
                href={BRAND_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-terracotta transition-colors duration-200 text-lg font-bold"
                id="social-x"
                aria-label="Follow us on X"
              >
                <span className="font-serif leading-none tracking-tighter">𝕏</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 columns out of 12) */}
          <div className="md:col-span-7 bg-white/5 p-6 md:p-10 rounded-md border border-white/10 relative overflow-hidden animate-slide-up" style={{ animationDelay: "200ms" }} id="contact-form-container">
            {/* Background blur highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-full blur-2xl pointer-events-none" />

            <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">Have a question or request?</h3>
            <p className="font-sans text-sm text-cream/70 mb-8">Drop us a line and we will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2 block">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full h-12 bg-cream text-charcoal rounded-[4px] px-4 font-sans text-sm border border-sand focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2 block">
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                  className="w-full h-12 bg-cream text-charcoal rounded-[4px] px-4 font-sans text-sm border border-sand focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2 block">
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan Anda mengenai booking, feedback, atau kolaborasi..."
                  rows={4}
                  className="w-full bg-cream text-charcoal rounded-[4px] p-4 font-sans text-sm border border-sand focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Status Message Display */}
              {submitStatus === "success" && (
                <div className="flex gap-2 items-start bg-success/15 border border-success/30 text-emerald-400 p-4 rounded-sm text-sm" id="form-status-success">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-success" />
                  <div>
                    <p className="font-bold">Pesan Terkirim!</p>
                    <p className="text-xs text-white/80 mt-1">Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda kembali.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex gap-2 items-start bg-rose-500/15 border border-rose-500/30 text-rose-400 p-4 rounded-sm text-sm" id="form-status-error">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-bold">Gagal Mengirim Pesan</p>
                    <p className="text-xs mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-terracotta hover:bg-terracotta-dark active:scale-[0.98] disabled:opacity-50 text-white font-sans text-sm font-bold uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                id="form-submit-btn"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Kirim Pesan</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
