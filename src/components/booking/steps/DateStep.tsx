"use client";

export default function DateStep() {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Choose Date
      </h2>

      <input
        type="date"
        className="mt-10 w-full rounded-2xl bg-white/5 border border-white/10 p-5"
      />
    </>
  );
}