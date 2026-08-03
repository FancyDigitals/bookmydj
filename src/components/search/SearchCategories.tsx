"use client";

const items = [
  "DJs",
  "MCs",
  "Bands",
  "Photographers",
  "Videographers",
  "Lighting",
  "Sound",
  "Equipment",
];

export default function SearchCategories() {
  return (
    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {items.map((item) => (

            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 hover:border-blue-500 transition cursor-pointer"
            >

              <h3 className="text-2xl font-semibold">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}