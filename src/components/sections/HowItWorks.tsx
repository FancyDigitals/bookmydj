"use client";

import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  CalendarCheck,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Browse verified DJs, MCs, musicians, photographers, videographers and event professionals.",
  },
  {
    icon: SlidersHorizontal,
    title: "Compare",
    description:
      "Compare prices, reviews, experience, availability and portfolios before making a decision.",
  },
  {
    icon: CalendarCheck,
    title: "Book",
    description:
      "Secure your booking with a simple, transparent and trusted booking process.",
  },
  {
    icon: PartyPopper,
    title: "Celebrate",
    description:
      "Relax while your event comes alive with carefully selected entertainment professionals.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 uppercase tracking-[0.35em] text-xs font-semibold">
            HOW IT WORKS
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Booking Entertainment Has
            <br />
            Never Been This Easy
          </h2>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-8">
            BookMyDJ makes finding trusted entertainment professionals simple,
            transparent and stress free.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 relative">

          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .15,
                  duration: .6,
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 h-full hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-500">

                  <div className="w-16 h-16 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-8">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>

                  <span className="text-blue-400 text-sm font-semibold">
                    Step {index + 1}
                  </span>

                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-white/60 leading-8">
                    {step.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}