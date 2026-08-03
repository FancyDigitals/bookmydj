"use client";

export default function SummaryStep() {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Booking Summary
      </h2>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">

        <div className="flex justify-between py-3">
          <span>Artist</span>
          <span>DJ Marcus Kane</span>
        </div>

        <div className="flex justify-between py-3">
          <span>Event</span>
          <span>Wedding</span>
        </div>

        <div className="flex justify-between py-3">
          <span>Date</span>
          <span>12 Aug 2026</span>
        </div>

        <div className="flex justify-between py-3">
          <span>Total</span>
          <span className="font-bold text-blue-400">
            £850
          </span>
        </div>

      </div>
    </>
  );
}