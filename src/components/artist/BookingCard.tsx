"use client";
import Link from "next/link";

export default function BookingCard({
  artist,
}: {
  artist: any;
}) {
  return (
    <aside className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 h-fit">

      <p className="text-white/50">
        Starting From
      </p>

      <h2 className="mt-2 text-5xl font-bold">
        £{artist.price}
      </h2>

      <Link
  href="/booking"
  className="mt-10 flex w-full items-center justify-center rounded-2xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-500"
>
  Book This Artist
</Link>

      <button className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 py-4">

        Send Message

      </button>

      <div className="mt-10 space-y-5 text-white/60">

        <div className="flex justify-between">

          <span>Response Time</span>

          <span>12 mins</span>

        </div>

        <div className="flex justify-between">

          <span>Availability</span>

          <span>{artist.available}</span>

        </div>

        <div className="flex justify-between">

          <span>Reviews</span>

          <span>{artist.reviews}</span>

        </div>

      </div>

    </aside>
  );
}