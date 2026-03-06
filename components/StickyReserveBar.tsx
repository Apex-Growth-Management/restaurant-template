"use client";

import { Phone, CalendarDays } from "lucide-react";

export default function StickyReserveBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-white/10 bg-stone-950 shadow-lg">
      <a
        href="tel:5550000000"
        className="flex-1 flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold py-4 text-sm transition-colors"
      >
        <Phone className="w-4 h-4" /> Call
      </a>
      <a
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 text-sm transition-colors"
      >
        <CalendarDays className="w-4 h-4" /> Reserve
      </a>
    </div>
  );
}
