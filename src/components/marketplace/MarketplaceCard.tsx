"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Star, BadgeCheck } from "lucide-react";

export default function MarketplaceCard({ artist }: { artist: any }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 sm:rounded-[24px] md:rounded-[28px]">
      {/* Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/4]">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute left-2.5 top-2.5 sm:left-3 sm:top-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-blue-400/30 bg-blue-500/15 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-blue-200 backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[10px]">
            <BadgeCheck size={10} />
            Verified
          </span>
        </div>

        <button className="absolute right-2.5 top-2.5 rounded-full border border-white/15 bg-black/40 p-1.5 backdrop-blur-md transition hover:bg-black/60 sm:right-3 sm:top-3 sm:p-2">
          <Heart size={14} className="text-white/80" />
        </button>

        {/* Bottom info overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-2 py-0.5 text-[10px] text-white backdrop-blur-md sm:text-xs">
              <Star size={11} fill="currentColor" className="text-yellow-400" />
              {artist.rating}
            </div>

            <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-2 py-0.5 text-[10px] text-white/85 backdrop-blur-md sm:text-xs">
              <MapPin size={11} />
              {artist.location}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <p className="text-[10px] uppercase tracking-[0.14em] text-white/45 sm:text-[11px]">
          {artist.category}
        </p>

        <h3 className="mt-1.5 text-sm font-medium tracking-tight text-white sm:text-lg md:text-xl">
          {artist.name}
        </h3>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 sm:mt-6 sm:pt-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.14em] text-white/40 sm:text-[11px]">
              From
            </p>
            <p className="mt-0.5 text-base font-semibold text-white sm:mt-1 sm:text-xl md:text-2xl">
              £{artist.price}
            </p>
          </div>

          <Link
            href={`/marketplace/${artist.id}`}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-blue-500 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}