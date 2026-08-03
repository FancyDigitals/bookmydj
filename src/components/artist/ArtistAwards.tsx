"use client";

const awards = [
  "Top Wedding DJ 2025",
  "Verified Professional",
  "500+ Successful Events",
  "Highly Recommended",
];

export default function ArtistAwards() {
  return (
    <section className="py-24">

      <h2 className="text-4xl font-bold mb-10">
        Awards & Recognition
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {awards.map((award) => (

          <div
            key={award}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            🏆 {award}
          </div>

        ))}

      </div>

    </section>
  );
}