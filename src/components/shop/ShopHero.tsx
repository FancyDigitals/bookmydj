"use client";

import Image from "next/image";

const meta = [
  ["24/7", "Support"],
  ["UK-Wide", "Delivery"],
  ["Pro-Grade", "Equipment"],
];

export default function ShopHero() {
  return (
    <section className="relative isolate min-h-[82svh] overflow-hidden bg-[#0b0b0c] md:min-h-[88svh]">
      <Image
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1800&q=80"
        alt="Professional event equipment"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,12,0.15)_0%,rgba(11,11,12,0.45)_45%,rgba(11,11,12,0.95)_100%)]" />

      <div className="relative mx-auto flex min-h-[82svh] max-w-7xl items-end px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 md:min-h-[88svh] md:pb-20 md:pt-36">
        <div className="w-full max-w-5xl rounded-[28px] border border-white/10 bg-black/25 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8 md:rounded-[36px] md:p-10">

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:mt-8 md:text-7xl lg:text-8xl">
            Premium event equipment for every occasion.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:mt-8 md:text-xl md:leading-9">
            Rent professional audio, lighting, and DJ gear trusted by
            entertainers, venues, and event teams across the UK.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-2xl md:mt-10">
            {meta.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 sm:px-4"
              >
                <div className="text-sm font-medium text-white sm:text-base">
                  {value}
                </div>
                <div className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-white/50 sm:text-xs">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}