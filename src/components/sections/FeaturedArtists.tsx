"use client";

import Image from "next/image";
import { Star, MapPin, BadgeCheck, Heart } from "lucide-react";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { featuredArtists } from "@/lib/data";

export default function FeaturedArtists() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Featured</SectionLabel>
            <h2 className="text-[32px] sm:text-[48px] font-800 tracking-[-1.5px] gradient-text mb-4">
              Top Rated Artists
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white/60 max-w-[560px] mx-auto">
              Handpicked entertainment professionals trusted by thousands.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredArtists.map((artist, i) => (
            <FadeIn key={artist.id} delay={i * 0.1}>
              <article className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer border border-border hover:border-border-hover transition-all duration-500 hover:-translate-y-2 hover:shadow-card-xl">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />

                {/* Verified Badge */}
                {artist.verified && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-success/15 border border-success/30 backdrop-blur-sm">
                    <BadgeCheck className="w-3 h-3 text-success" />
                    <span className="text-[10px] font-600 text-success uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md">
                  <span className="text-[13px] font-600 text-white">
                    From £{artist.price}
                  </span>
                </div>

                {/* Favorite */}
                <button
                  onClick={(e) => toggleFav(artist.id, e)}
                  className="absolute top-14 right-4 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-error/20 hover:border-error/40 transition-all"
                  aria-label="Favorite"
                >
                  <Heart
                    className={`w-4 h-4 transition-all ${
                      favorites.includes(artist.id)
                        ? "fill-error text-error"
                        : "text-white/70"
                    }`}
                  />
                </button>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-[18px] font-700 tracking-tight text-white mb-1">
                    {artist.name}
                  </h3>
                  <p className="text-[13px] text-white/60 mb-2.5">
                    {artist.genre}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-warning">
                      <Star className="w-3.5 h-3.5 fill-warning" />
                      <span className="text-[13px] font-600">
                        {artist.rating}
                      </span>
                      <span className="text-[11px] text-white/40">
                        ({artist.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-white/50">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[12px]">{artist.location}</span>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}