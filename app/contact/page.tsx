"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "", requests: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <main className="bg-stone-950 text-white pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Reservations</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Reserve Your Table</h1>
            <p className="text-white/50 text-lg">
              We recommend booking 48 hours in advance. For parties of 8 or more, please call us directly.
            </p>
            <a
              href="tel:9195550123"
              className="inline-block mt-4 text-amber-500 hover:text-amber-400 font-semibold transition-colors"
            >
              (919) 555-0123
            </a>
          </div>

          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Reservation Request Sent!</h2>
              <p className="text-white/50">We&apos;ll confirm your table within a few hours. We look forward to seeing you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">Full Name</label>
                <input
                  name="name" value={form.name} onChange={handleChange} required
                  type="text" placeholder="Jane Smith"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">Email</label>
                  <input
                    name="email" value={form.email} onChange={handleChange} required
                    type="email" placeholder="jane@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">Phone</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    type="tel" placeholder="(919) 000-0000"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">Preferred Date</label>
                  <input
                    name="date" value={form.date} onChange={handleChange} required
                    type="date"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">Preferred Time</label>
                  <select
                    name="time" value={form.time} onChange={handleChange} required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="" className="bg-stone-900">Select a time</option>
                    <option value="5:00 PM" className="bg-stone-900">5:00 PM</option>
                    <option value="5:30 PM" className="bg-stone-900">5:30 PM</option>
                    <option value="6:00 PM" className="bg-stone-900">6:00 PM</option>
                    <option value="6:30 PM" className="bg-stone-900">6:30 PM</option>
                    <option value="7:00 PM" className="bg-stone-900">7:00 PM</option>
                    <option value="7:30 PM" className="bg-stone-900">7:30 PM</option>
                    <option value="8:00 PM" className="bg-stone-900">8:00 PM</option>
                    <option value="8:30 PM" className="bg-stone-900">8:30 PM</option>
                    <option value="9:00 PM" className="bg-stone-900">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">Number of Guests</label>
                <select
                  name="guests" value={form.guests} onChange={handleChange} required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="" className="bg-stone-900">Select party size</option>
                  {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <option key={n} value={n} className="bg-stone-900">{n} {n === 1 ? "guest" : "guests"}</option>
                  ))}
                  <option value="8+" className="bg-stone-900">8+ guests (call us)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">Special Requests (optional)</label>
                <textarea
                  name="requests" value={form.requests} onChange={handleChange}
                  rows={3} placeholder="Allergies, anniversary, high chair, etc."
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please call us directly.</p>
              )}

              <button
                type="submit" disabled={status === "sending"}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 mt-2"
              >
                {status === "sending" ? "Sending..." : "Request Reservation"}
              </button>
            </form>
          )}

          <div className="flex flex-col items-center gap-2 mt-8 text-sm text-white/30">
            <p>Call us: <a href="tel:9195550123" className="text-amber-500 hover:text-amber-400 transition-colors">(919) 555-0123</a></p>
            <p>Mon–Thu 5–10pm · Fri–Sat 5–11pm · Sun 4–9pm</p>
            <p>123 Oak Street, Raleigh, NC 27601</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 bg-stone-950 pb-24 md:pb-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div>
            <p className="font-bold text-lg"><span className="text-amber-500">Ember &amp; Oak</span><span className="text-white/80"> Kitchen</span></p>
            <p className="text-white/30 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-white/40">
            <a href="tel:5550000000" className="hover:text-white/70 transition-colors">(555) 000-0000</a>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>Your City, ST 00000</span>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1 text-white/30 text-xs">
            <span>Mon–Thu: 5pm – 10pm</span>
            <span>Fri–Sat: 5pm – 11pm &nbsp;·&nbsp; Sun: 4pm – 9pm</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
