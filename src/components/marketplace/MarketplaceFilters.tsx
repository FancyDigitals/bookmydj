"use client";

import { Search, SlidersHorizontal, MapPin, Star } from "lucide-react";

const categories = [
  "All",
  "DJs",
  "MCs",
  "Bands",
  "Photographers",
  "Videographers",
];

const genres = [
  "Afrobeats",
  "Amapiano",
  "House",
  "Hip Hop",
  "R&B",
  "Wedding",
];

export default function MarketplaceFilters() {
  return (
    <aside className="sticky top-28 h-fit overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-xl md:rounded-[28px]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-blue-300" />
            <h3 className="text-sm font-medium text-white sm:text-base">
              Filters
            </h3>
          </div>
          <button className="text-[10px] uppercase tracking-[0.16em] text-white/45 transition hover:text-white sm:text-xs">
            Reset
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            size={16}
          />
          <input
            placeholder="Search artists..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-blue-400/50"
          />
        </div>

        <div className="space-y-6">
          {/* Category */}
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
              <MapPin size={13} />
              Location
            </p>
            <select className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white outline-none transition focus:border-blue-400/50">
              <option>All UK</option>
              <option>London</option>
              <option>Manchester</option>
              <option>Birmingham</option>
              <option>Liverpool</option>
              <option>Leeds</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
                Budget
              </p>
              <span className="text-[11px] text-white/60">£100 – £3000+</span>
            </div>
            <input
              type="range"
              min={100}
              max={3000}
              defaultValue={1500}
              className="w-full accent-blue-500"
            />
          </div>

          {/* Genre */}
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
              Genre
            </p>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/75 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
              <Star size={13} />
              Minimum Rating
            </p>
            <select className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white outline-none transition focus:border-blue-400/50">
              <option>Any Rating</option>
              <option>4★ & Above</option>
              <option>4.5★ & Above</option>
              <option>5★ Only</option>
            </select>
          </div>

          {/* Verified */}
          <label className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/80 transition hover:border-white/20">
            <span>Verified Only</span>
            <input type="checkbox" className="accent-blue-500" />
          </label>

          {/* Apply */}
          <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-blue-500">
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
}