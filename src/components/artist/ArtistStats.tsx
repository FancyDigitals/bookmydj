"use client";

const stats = [
  ["10+", "Years Experience"],
  ["520+", "Events"],
  ["98%", "Happy Clients"],
  ["4.9", "Average Rating"],
];

export default function ArtistStats() {
  return (
    <section className="py-24">

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {stats.map(([number, title]) => (

          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center"
          >

            <h3 className="text-5xl font-bold text-blue-400">

              {number}

            </h3>

            <p className="mt-4 text-white/60">

              {title}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}