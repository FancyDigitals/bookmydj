"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Sparkles, ChevronDown, MapPin } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=2400&q=90&auto=format&fit=crop"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-bg/60" />

      {/* Gradient Overlay - Top to Bottom */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />

      {/* Radial Vignette */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 0%, rgba(5,8,22,0.6) 70%, rgba(5,8,22,0.95) 100%)",
        }}
      />

      {/* Blue Ambient Glows */}
      <div className="absolute inset-0 z-[4] bg-hero-gradient pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-[5] hero-grid-bg opacity-40 pointer-events-none" />

      {/* Floating Orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] animate-float-slow pointer-events-none z-[6]" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-highlight/15 blur-[100px] animate-float-reverse pointer-events-none z-[6]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 py-24 pt-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center text-[42px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-800 tracking-[-2.5px] leading-[1.05] gradient-text max-w-[900px] mx-auto mb-7 text-balance"
        >
          Find The Perfect Entertainment For Every Event.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[16px] sm:text-[19px] text-white/70 max-w-[580px] mx-auto mb-12 leading-relaxed"
        >
          Book DJs, MCs, musicians, photographers, equipment and more all from
          one premium platform.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-[720px] mx-auto mb-16"
        >
          <div className="glass-strong rounded-2xl p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-1 focus-within:border-accent transition-all shadow-card-xl">
            <div className="flex-1 flex items-center gap-3 px-4 py-3">
              <Search className="w-5 h-5 text-white/40 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search DJs, artists, equipment..."
                className="flex-1 bg-transparent text-[15px] text-white placeholder:text-white/40 outline-none"
              />
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <button className="flex items-center gap-2 px-4 py-3 text-[14px] text-white/70 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all">
              <MapPin className="w-4 h-4" />
              All UK
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="px-6 py-3 bg-gradient-to-br from-accent to-accent-light text-white text-[15px] font-600 rounded-xl hover:shadow-glow transition-all">
              Search
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-14"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[32px] sm:text-[40px] font-800 tracking-tight accent-gradient-text leading-none">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[13px] text-white/50 font-500 mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}