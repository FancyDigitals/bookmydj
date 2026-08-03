"use client";

const packages = [
  {
    title: "Wedding",
    price: "From £850",
    desc: "Luxury wedding entertainment tailored to your day.",
    features: ["Premium DJ", "Full setup", "MC included"],
    featured: false,
  },
  {
    title: "Corporate",
    price: "From £650",
    desc: "Elevated production for business events and brand moments.",
    features: ["Professional MC", "Sound & lights", "On-site manager"],
    featured: true,
  },
  {
    title: "Birthday",
    price: "From £350",
    desc: "Celebrate unforgettable moments with tailored entertainment.",
    features: ["DJ + Speakers", "Party lighting", "Custom playlist"],
    featured: false,
  },
  {
    title: "Festival",
    price: "Custom",
    desc: "Large-scale event production built around your vision.",
    features: ["Stage production", "Multi-artist", "Full logistics"],
    featured: false,
  },
];

export default function BookingPackages() {
  return (
    <section className="bg-[#0b0b0c] py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45 sm:text-sm">
            Packages
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Choose your experience.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Premium entertainment packages built for every kind of celebration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:mt-16 xl:grid-cols-4 xl:gap-6">
          {packages.map((item) => (
            <article
              key={item.title}
              className={`group relative flex flex-col overflow-hidden rounded-[20px] border p-4 transition duration-500 hover:-translate-y-1 sm:rounded-[24px] sm:p-6 md:rounded-[28px] md:p-8 ${
                item.featured
                  ? "border-blue-400/40 bg-gradient-to-b from-blue-500/[0.12] to-white/[0.02]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              {item.featured && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium tracking-tight text-white sm:text-lg md:text-2xl">
                  {item.title}
                </h3>
                {item.featured && (
                  <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/15 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-blue-200 sm:text-[10px]">
                    Popular
                  </span>
                )}
              </div>

              <div className="mt-6 border-y border-white/10 py-4 sm:mt-8">
                <div className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
                  {item.price}
                </div>
              </div>

              <p className="mt-4 hidden text-sm leading-7 text-white/60 sm:block">
                {item.desc}
              </p>

              <ul className="mt-4 space-y-2 sm:mt-6">
                {item.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-white/70 sm:text-sm"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full rounded-xl py-3 text-xs font-medium transition duration-300 sm:mt-8 sm:py-3.5 sm:text-sm ${
                  item.featured
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "border border-white/15 bg-white/[0.04] text-white hover:border-white/30"
                }`}
              >
                Select Package
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}