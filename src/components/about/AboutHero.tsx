"use client";

import Image from "next/image";

const highlights = [
  "Verified talent",
  "Seamless booking",
  "Nationwide network",
];

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden bg-[#0b0b0c] md:min-h-[92svh]">
      <Image
        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1800&q=80"
        alt="Concert crowd enjoying a live performance"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,12,0.10)_0%,rgba(11,11,12,0.42)_42%,rgba(11,11,12,0.92)_100%)]" />

      {/* Added top padding so hero content sits below the fixed navbar */}
      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-end px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 md:min-h-[92svh] md:pb-20 md:pt-36">
        <div className="w-full max-w-5xl rounded-[28px] border border-white/10 bg-black/25 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8 md:rounded-[36px] md:p-10">

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:mt-8 md:text-7xl lg:text-8xl">
            Connecting great events with extraordinary entertainment.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:mt-8 md:text-xl md:leading-9">
            BookMyDJ makes discovering and booking trusted entertainment
            professionals feel effortless from intimate celebrations to
            large-scale occasions.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-3xl sm:grid-cols-3 md:mt-10">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}