"use client";

const steps = [
  {
    title: "Choose Entertainment",
    desc: "Explore verified DJs, performers, and packages.",
  },
  {
    title: "Select Date",
    desc: "Pick your event date and availability window.",
  },
  {
    title: "Confirm Details",
    desc: "Add venue, extras, and personal preferences.",
  },
  {
    title: "Secure Booking",
    desc: "Complete payment and receive full confirmation.",
  },
];

export default function BookingProcess() {
  return (
    <section className="bg-[#0b0b0c] pb-20 sm:pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45 sm:text-sm">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Booking made simple.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            A refined four-step process designed to feel effortless from
            discovery to confirmation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:mt-16 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-4 transition duration-500 hover:-translate-y-1 hover:border-white/20 sm:rounded-[24px] sm:p-6 md:rounded-[28px] md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-xs">
                  Step 0{index + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70 transition duration-300 group-hover:bg-blue-400" />
              </div>

              <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-semibold text-blue-200 sm:mt-8 sm:h-14 sm:w-14 sm:text-lg">
                {index + 1}
              </div>

              <h3 className="mt-5 text-sm font-medium tracking-tight text-white sm:mt-6 sm:text-base md:text-lg">
                {step.title}
              </h3>

              <p className="mt-2 hidden text-sm leading-6 text-white/55 sm:block">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}