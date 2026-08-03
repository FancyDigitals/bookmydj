"use client";

import Image from "next/image";

const trust = [
  ["4.9★", "Rated"],
  ["500+", "Events"],
  ["24/7", "Support"],
];

export default function BookingHero() {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden bg-[#0b0b0c]">
      <Image
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1800&q=80"
        alt="Live event with premium production"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Layered gradients */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,12,0.15)_0%,rgba(11,11,12,0.45)_45%,rgba(11,11,12,0.95)_100%)]" />

      {/* Brand blue ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-end px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:pb-20 md:pt-36">
        <div className="w-full max-w-5xl rounded-[28px] border border-white/10 bg-black/30 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-md sm:p-8 md:rounded-[36px] md:p-10">

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:mt-8 md:text-7xl lg:text-[5.5rem] lg:leading-[1.02]">
            Your perfect event{" "}
            <span className="bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-transparent">
              starts here.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:mt-8 md:text-lg md:leading-9">
            From intimate weddings to unforgettable festivals, BookMyDJ connects
            you with verified professionals ready to make every moment
            extraordinary.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-blue-500 sm:px-8 sm:text-base">
              Start Booking
            </button>
            <button className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-4 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-white/30 sm:px-8 sm:text-base">
              Browse Artists
            </button>
          </div>

          {/* Trust row */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:max-w-lg">
            {trust.map(([value, label]) => (
              <div key={label}>
                <div className="text-lg font-semibold text-white sm:text-xl">
                  {value}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-[11px]">
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