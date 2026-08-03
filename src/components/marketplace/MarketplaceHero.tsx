"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Music2,
  Mic2,
  Camera,
  Drum,
  Star,
  MapPin,
} from "lucide-react";

const trending = [
  "Wedding DJs",
  "Corporate Events",
  "Live Bands",
  "MCs",
  "Photographers",
  "Afrobeats",
];

const floatingCards = [
  {
    icon: Music2,
    name: "DJ Marcus Kane",
    role: "Wedding DJ",
    rating: "4.9",
    location: "London",
    pos: "top-0 left-0 sm:left-4",
  },
  {
    icon: Mic2,
    name: "MC Olivia",
    role: "Event MC",
    rating: "5.0",
    location: "Manchester",
    pos: "top-24 right-0 sm:right-2",
  },
  {
    icon: Camera,
    name: "Lens Studio",
    role: "Photographer",
    rating: "4.8",
    location: "Birmingham",
    pos: "bottom-28 left-0 sm:left-10",
  },
  {
    icon: Drum,
    name: "The Groove Band",
    role: "Live Band",
    rating: "5.0",
    location: "Liverpool",
    pos: "bottom-0 right-0 sm:right-6",
  },
];

export default function MarketplaceHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0b0c] pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1800&q=80"
        alt="Live event atmosphere"
        fill
        priority
        className="-z-20 object-cover object-center opacity-60"
      />

      {/* Dark cinematic overlays */}
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,11,12,0.45)_0%,rgba(11,11,12,0.65)_45%,rgba(11,11,12,0.98)_100%)]" />

      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[320px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:mt-8 md:text-7xl lg:text-[5rem] lg:leading-[1.02]">
            Find entertainment{" "}
            <span className="bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-transparent">
              you'll love.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:mt-8 md:text-lg md:leading-9">
            Browse verified DJs, MCs, live bands, photographers, and
            entertainment professionals for weddings, birthdays, corporate
            events, and unforgettable experiences.
          </p>

          {/* Search */}
          <div className="mt-8 flex overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl md:mt-10">
            <div className="flex items-center px-4 sm:px-5">
              <Search className="text-white/60" size={18} />
            </div>

            <input
              className="flex-1 bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/45 sm:py-5 sm:text-base"
              placeholder="Search DJs, Bands, MCs..."
            />

            <button className="bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-500 sm:px-8 sm:text-base">
              Search
            </button>
          </div>

          {/* Trending */}
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            {trending.map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200 sm:px-4 sm:py-2 sm:text-sm"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Floating cards */}
        <div className="relative hidden h-[620px] lg:block">
          {floatingCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
                className={`absolute w-72 overflow-hidden rounded-[26px] border border-white/10 bg-black/40 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl ${card.pos}`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10">
                    <Icon className="text-blue-300" size={22} />
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-white/80">
                    <Star
                      size={12}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                    {card.rating}
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-medium tracking-tight text-white">
                  {card.name}
                </h3>

                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/50">
                  {card.role}
                </p>

                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-white/60">
                  <MapPin size={14} />
                  {card.location}
                </div>

                <button className="mt-5 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500">
                  View Profile
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}