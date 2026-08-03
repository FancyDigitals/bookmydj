"use client";

const items = [
  "Wedding DJs",
  "Corporate DJs",
  "Birthday DJs",
  "Festival DJs",
  "MCs",
  "Photographers",
  "Videographers",
  "Live Bands",
];

export default function TrendingSearches() {
  return (
    <section className="pb-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold">
          Trending Searches
        </h2>

        <div className="flex flex-wrap gap-4 mt-10">

          {items.map((item) => (

            <button
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 hover:bg-blue-600 transition"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
}