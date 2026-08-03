"use client";

const values = [
  {
    title: "Trust",
    desc: "Verified professionals, clear expectations, and reliable communication at every step.",
  },
  {
    title: "Quality",
    desc: "Curated talent and elevated experiences that reflect the standard your event deserves.",
  },
  {
    title: "Innovation",
    desc: "Modern tools that make discovery, comparison, and booking feel seamless from start to finish.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-[#0b0b0c] pb-20 sm:pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45 sm:text-sm">
            What We Believe
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Principles behind every experience we create.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            A premium platform only works when it feels dependable,
            considered, and effortless from discovery to booking.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3 lg:gap-6">
          {values.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/15 sm:p-8 md:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

              <div className="mb-10 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/35 sm:text-xs">
                  0{index + 1}
                </span>

                <span className="h-2 w-2 rounded-full bg-white/20 transition duration-300 group-hover:bg-white/40" />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}