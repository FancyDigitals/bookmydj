"use client";

import { Grid2X2, Map, ArrowUpDown } from "lucide-react";

export default function MarketplaceToolbar() {
  return (
    <div className="mb-6 overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:mb-8 sm:rounded-[24px]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
            Directory
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl">
            Explore artists
          </h2>
          <p className="mt-1 text-xs text-white/50 sm:text-sm">
            2,500+ verified entertainment professionals
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-200 transition hover:bg-blue-500/15 sm:px-4 sm:py-2.5 sm:text-sm">
            <Grid2X2 size={15} />
            Grid
          </button>

          <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/75 transition hover:border-white/25 hover:text-white sm:px-4 sm:py-2.5 sm:text-sm">
            <Map size={15} />
            Map
          </button>

          <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/75 transition hover:border-white/25 hover:text-white sm:px-4 sm:py-2.5 sm:text-sm">
            <ArrowUpDown size={15} />
            Popular
          </button>
        </div>
      </div>
    </div>
  );
}