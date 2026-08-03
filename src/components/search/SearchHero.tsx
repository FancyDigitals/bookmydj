"use client";

import { Search } from "lucide-react";

export default function SearchHero() {
  return (
    <section className="pt-40 pb-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="rounded-full border border-blue-500/20 bg-blue-500/20 px-5 py-2 text-blue-300">
          Search
        </span>

        <h1 className="mt-8 text-7xl font-bold">
          Find The Perfect
          Entertainment.
        </h1>

        <p className="mt-8 text-xl text-white/70 leading-9">
          Search thousands of verified entertainment professionals.
        </p>

        <div className="mt-12 flex rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden">

          <div className="flex items-center px-6">
            <Search />
          </div>

          <input
            placeholder="Search DJs, Bands, MCs..."
            className="flex-1 bg-transparent p-6 outline-none"
          />

          <button className="bg-blue-600 px-10">
            Search
          </button>

        </div>

      </div>

    </section>
  );
}