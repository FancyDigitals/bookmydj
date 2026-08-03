"use client";

import Link from "next/link";
import {
  Headphones,
  Mic,
  Music,
  Guitar,
  Camera,
  Video,
  Speaker,
  Lightbulb,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { categories } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Headphones,
  Mic,
  Music,
  Guitar,
  Camera,
  Video,
  Speaker,
  Lightbulb,
  PartyPopper,
};

export default function Categories() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Browse</SectionLabel>
            <h2 className="text-[32px] sm:text-[48px] font-800 tracking-[-1.5px] gradient-text mb-4">
              Popular Categories
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white/60 max-w-[560px] mx-auto">
              Find exactly what you need for your next event.
            </p>
          </div>
        </FadeIn>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.iconName];
            return (
              <FadeIn key={cat.name} delay={i * 0.05}>
                <Link
                  href={cat.href}
                  className="flex-shrink-0 w-[180px] lg:w-full group block p-6 lg:p-8 rounded-2xl glass hover:bg-surface-hover hover:border-border-hover transition-all duration-300 text-center hover:-translate-y-1"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-[14px] bg-gradient-to-br from-accent/15 to-accent-light/5 border border-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    {Icon && <Icon className="w-6 h-6 text-accent-light" strokeWidth={1.75} />}
                  </div>
                  <div className="text-[15px] font-600 tracking-tight mb-1">
                    {cat.name}
                  </div>
                  <div className="text-[12px] text-white/40">{cat.count}</div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}