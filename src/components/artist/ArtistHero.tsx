"use client";

import Image from "next/image";
import {
  BadgeCheck,
  MapPin,
  Star,
  Heart,
  Share2,
  Clock3,
} from "lucide-react";

export default function ArtistHero({ artist }: { artist: any }) {
  return (
    <section className="relative h-[900px] overflow-hidden">

      <Image
        src={artist.image}
        alt={artist.name}
        fill
        priority
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/50 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#040816]/70 via-transparent to-transparent" />

      <div className="absolute bottom-24 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6">

        <div className="max-w-4xl">

          <div className="flex flex-wrap gap-3">

            <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold">
              VERIFIED
            </span>

            <span className="rounded-full bg-blue-600/80 px-4 py-2 text-sm">
              Available This Weekend
            </span>

          </div>

          <h1 className="mt-8 text-7xl font-black leading-none">
            {artist.name}
          </h1>

          <p className="mt-6 text-2xl text-white/75">
            {artist.category}
          </p>

          <div className="mt-10 flex flex-wrap gap-8">

            <div className="flex items-center gap-2">

              <Star
                fill="currentColor"
                className="text-yellow-400"
              />

              <span className="font-semibold">
                {artist.rating}
              </span>

              <span className="text-white/60">
                ({artist.reviews} Reviews)
              </span>

            </div>

            <div className="flex items-center gap-2">

              <MapPin size={18} />

              {artist.location}

            </div>

            <div className="flex items-center gap-2">

              <Clock3 size={18} />

              Responds in 12 mins

            </div>

            <div className="flex items-center gap-2">

              <BadgeCheck size={18} />

              Trusted Professional

            </div>

          </div>

          <div className="mt-12 flex flex-wrap gap-4">

            <button className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-500 transition">

              Book Artist

            </button>

            <button className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4">

              <Heart />

            </button>

            <button className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4">

              <Share2 />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}