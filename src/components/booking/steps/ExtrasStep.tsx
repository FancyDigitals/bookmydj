"use client";

const extras = [
  "Lighting",
  "Smoke Machine",
  "Photography",
  "Videography",
  "MC",
  "Live Band",
];

export default function ExtrasStep() {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Add Extras
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mt-10">

        {extras.map((item) => (

          <label
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 flex justify-between"
          >
            {item}

            <input type="checkbox" />
          </label>

        ))}

      </div>
    </>
  );
}