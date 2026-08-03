import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

const stats = [
  ["500+", "Events Delivered"],
  ["120+", "Trusted Artists"],
  ["50+", "Cities Covered"],
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#0b0b0c] text-white">
        {/* Hero */}
        <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
          {/* Ambient brand glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />
            <div className="absolute top-40 right-0 h-[320px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 75%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
              {/* Left */}
              <div>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:mt-8 md:text-7xl lg:text-[5.5rem] lg:leading-[1.02]">
                  Unforgettable events.
                  <br />
                  <span className="bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-transparent">
                    Exceptional experiences.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 md:mt-8 md:text-lg md:leading-9">
                  Explore weddings, festivals, birthdays, corporate events, and
                  private celebrations powered by BookMyDJ professionals across
                  the UK.
                </p>
              </div>

              {/* Right — Stats card */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-6 md:rounded-[32px] md:p-8">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

                  <div className="flex items-center justify-between">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 sm:text-xs">
                      Highlights
                    </p>
                    <span className="inline-flex h-6 items-center rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-blue-200 sm:text-[11px]">
                      Live
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                    {stats.map(([value, label], i) => (
                      <div
                        key={label}
                        className={`rounded-2xl border border-white/10 bg-[#111214] p-4 sm:p-5 ${
                          i === 2 ? "col-span-2" : ""
                        }`}
                      >
                        <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                          {value}
                        </div>
                        <div className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <p className="text-[11px] text-white/50 sm:text-xs">
                      Curated from bookings across the UK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioGrid />
      </main>

      <Footer />
    </>
  );
}