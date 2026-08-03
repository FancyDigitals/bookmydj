"use client";

const stats = [
  ["2500+", "Bookings"],
  ["500+", "Artists"],
  ["98%", "Client Satisfaction"],
  ["50+", "Cities"],
];

export default function AboutStats() {
  return (
    <section className="bg-[#0b0b0c] pb-20 sm:pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45 sm:text-sm">
            By The Numbers
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10">
          <div className="grid grid-cols-2 gap-px md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-[#111214] p-5 sm:p-7 md:p-10">
                <div className="mb-8 h-px w-10 bg-white/10" />

                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                  {value}
                </h3>

                <p className="mt-3 text-sm text-white/55 sm:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}