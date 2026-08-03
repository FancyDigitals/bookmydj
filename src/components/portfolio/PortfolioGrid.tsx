"use client";

import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    title: "Live Session",
    category: "Performance",
    desktopHeight: "md:h-[420px]",
  },
  {
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80",
    title: "Crowd Energy",
    category: "Festival",
    desktopHeight: "md:h-[560px]",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
    title: "Stage Presence",
    category: "Concert",
    desktopHeight: "md:h-[460px]",
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    title: "Night Atmosphere",
    category: "Event",
    desktopHeight: "md:h-[540px]",
  },
  {
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80",
    title: "Motion & Light",
    category: "Editorial",
    desktopHeight: "md:h-[400px]",
  },
  {
    src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&q=80",
    title: "Finale",
    category: "Showcase",
    desktopHeight: "md:h-[500px]",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="bg-[#0b0b0c] py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-white/45 sm:text-sm">
              Portfolio
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-5xl">
              A refined visual showcase of sound, atmosphere, and presence.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/55 md:text-base">
            Designed to feel cinematic and elevated minimal in style, rich in
            presentation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {images.map((image, index) => (
            <article
              key={image.src}
              className={`group relative isolate h-[210px] sm:h-[260px] ${
                image.desktopHeight
              } overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.22)] sm:rounded-[22px] md:rounded-[28px] ${
                index === 1 || index === 4 ? "xl:translate-y-10" : ""
              } transition duration-500 ease-out hover:-translate-y-1`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-6">
                <div className="mb-2 inline-flex rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 backdrop-blur-md sm:px-3 sm:text-[11px]">
                  {image.category}
                </div>

                <h3 className="max-w-[90%] text-sm font-medium tracking-tight text-white sm:text-base md:text-2xl">
                  {image.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}