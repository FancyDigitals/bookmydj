"use client";

import MarketplaceCard from "@/components/marketplace/MarketplaceCard";
import { artists } from "@/lib/artists";

export default function SearchResults() {
  return (
    <section className="pb-32">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Popular Results
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {artists.map((artist) => (

            <MarketplaceCard
              key={artist.id}
              artist={artist}
            />

          ))}

        </div>

      </div>

    </section>
  );
}