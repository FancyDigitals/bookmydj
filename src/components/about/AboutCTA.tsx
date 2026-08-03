"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-[#0b0b0c] pb-20 sm:pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111214] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)] sm:p-8 md:rounded-[40px] md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                Ready When You Are
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:mt-6 md:text-6xl">
                Ready to plan your next event?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 md:mt-6 md:text-lg md:leading-9">
                Discover trusted DJs, performers, and entertainment
                professionals for weddings, private celebrations, corporate
                events, and unforgettable nights.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/artists"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-black transition duration-300 hover:bg-white/90 sm:px-8 sm:py-4 sm:text-base"
              >
                Browse Artists
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}