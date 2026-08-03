"use client";

const services = [
  "Wedding DJ",
  "Birthday Parties",
  "Corporate Events",
  "Luxury Events",
  "Festival Performance",
  "Private Parties",
];

export default function ArtistServices() {
  return (
    <section className="py-24">

      <h2 className="text-4xl font-bold mb-10">
        Services
      </h2>

      <div className="flex flex-wrap gap-4">

        {services.map((service) => (

          <div
            key={service}
            className="rounded-full border border-white/10 bg-white/[0.05] px-6 py-4"
          >

            {service}

          </div>

        ))}

      </div>

    </section>
  );
}