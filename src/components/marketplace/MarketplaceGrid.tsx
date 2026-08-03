"use client";

import { artists } from "@/lib/artists";
import MarketplaceCard from "./MarketplaceCard";

export default function MarketplaceGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3 xl:gap-6">
      {artists.map((artist) => (
        <MarketplaceCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}