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
    // Reservation form submission — connect to your backend or email service
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
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
              <div className="text-5xl mb-4">🕯️</div>
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
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold py-4 rounded-lg text-lg transition-colors mt-2"
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

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Ember & Oak Kitchen. All rights reserved.
      </footer>
    </main>
  );
}
