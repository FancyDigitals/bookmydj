"use client";

const events = [
  "Wedding",
  "Birthday",
  "Corporate",
  "Festival",
  "Private Party",
  "Club Night",
];

export default function EventStep() {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Select Event Type
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {events.map((event) => (

          <button
            key={event}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-blue-500 transition"
          >
            {event}
          </button>

        ))}

      </div>
    </>
  );
}