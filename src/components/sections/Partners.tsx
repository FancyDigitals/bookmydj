"use client";

import { partners } from "@/lib/data";

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-16 border-y border-white/[0.05]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-[12px] uppercase tracking-[2px] text-white/40 font-600 mb-8">
          Trusted By Leading Brands
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-scroll-partners w-max">
            {doubled.map((p, i) => (
              <span
                key={i}
                className="text-white/25 hover:text-white/60 text-[18px] font-700 tracking-tight whitespace-nowrap transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}