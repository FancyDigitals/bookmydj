"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Reviews</SectionLabel>
            <h2 className="text-[32px] sm:text-[48px] font-800 tracking-[-1.5px] gradient-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white/60 max-w-[560px] mx-auto">
              Real experiences from real customers.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <div className="glass-card p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4 text-warning">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-warning" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[15px] text-white/70 leading-[1.7] italic mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <div className="text-[14px] font-600 text-white">
                      {t.name}
                    </div>
                    <div className="text-[12px] text-white/40">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}