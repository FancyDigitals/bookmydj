"use client";

export default function AboutStory() {
  return (
    <section className="bg-[#0b0b0c] py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          <div>
            <span className="text-xs uppercase tracking-[0.24em] text-white/45 sm:text-sm">
              Our Story
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:mt-6 md:text-5xl">
              More than a booking platform.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              We built BookMyDJ to remove the friction from finding
              entertainment people can actually trust.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)] sm:p-8 md:rounded-[32px] md:p-10">
            <div className="space-y-6 text-base leading-8 text-white/72 sm:text-lg sm:leading-9">
              <p>
                BookMyDJ was created to simplify the way people discover,
                compare, and book trusted entertainment professionals.
              </p>

              <p>
                From weddings and birthdays to festivals and corporate events,
                every booking should feel smooth, confident, and genuinely
                enjoyable.
              </p>

              <p>
                Our goal is to bring performers, businesses, and customers
                together through one refined experience designed around trust,
                quality, and ease.
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.18em] text-white/40 sm:text-xs">
              Trusted by weddings, private events, brands, and celebrations
              that value quality.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}