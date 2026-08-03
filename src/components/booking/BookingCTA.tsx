"use client";

export default function BookingCTA() {
  return (
    <section className="bg-[#0b0b0c] pb-20 sm:pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111214] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)] sm:p-8 md:rounded-[40px] md:p-14 lg:p-16">
          {/* Brand ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 -top-24 h-[380px] w-[520px] rounded-full bg-blue-600/25 blur-[130px]" />
            <div className="absolute -bottom-24 -left-20 h-[300px] w-[420px] rounded-full bg-blue-500/10 blur-[110px]" />
          </div>

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-blue-200 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Ready When You Are
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:mt-6 md:text-6xl">
                Ready to book your next event?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8 md:mt-6 md:text-lg md:leading-9">
                Let BookMyDJ connect you with the perfect entertainment
                for your next unforgettable event — trusted, verified, and
                ready.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-blue-500 sm:px-8 sm:text-base">
                Book Your Event
              </button>
              <button className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:border-white/30 sm:px-8 sm:text-base">
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}