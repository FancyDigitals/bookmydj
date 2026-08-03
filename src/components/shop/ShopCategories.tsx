"use client";

import { useState } from "react";

const items = [
  "All",
  "DJ Equipment",
  "Lighting",
  "Speakers",
  "Microphones",
  "Accessories",
];

export default function ShopCategories() {
  const [active, setActive] = useState("All");

  return (
    <section className="bg-[#0b0b0c] py-8 sm:py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45 sm:text-sm">
            Browse Categories
          </p>

          <p className="hidden text-xs text-white/40 sm:block">
            {items.length} categories
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = active === item;
            return (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition duration-300 sm:px-5 sm:py-3 ${
                  isActive
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-white/[0.04] text-white/70 hover:border-white/25 hover:text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}