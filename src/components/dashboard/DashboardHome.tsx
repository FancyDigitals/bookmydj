"use client";

const cards = [
  {
    title: "Upcoming Bookings",
    value: 8,
  },
  {
    title: "Messages",
    value: 14,
  },
  {
    title: "Saved Artists",
    value: 23,
  },
  {
    title: "Invoices",
    value: 6,
  },
];

export default function DashboardHome() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

        {cards.map((card) => (

          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >

            <p className="text-white/60">
              {card.title}
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {card.value}
            </h2>

          </div>

        ))}

      </div>

    </section>
  );
}