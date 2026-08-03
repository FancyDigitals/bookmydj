"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  Music2,
  Camera,
  Mic2,
  Speaker,
} from "lucide-react";

const bookings = [
  {
    icon: Music2,
    customer: "Sarah Williams",
    action: "Booked DJ Marcus Kane",
    location: "London",
    time: "2 mins ago",
    price: "£650",
  },
  {
    icon: Mic2,
    customer: "Corporate Event",
    action: "Booked MC Jordan Reeves",
    location: "Manchester",
    time: "5 mins ago",
    price: "£450",
  },
  {
    icon: Camera,
    customer: "Lens Studio",
    action: "Photography Package",
    location: "Leeds",
    time: "8 mins ago",
    price: "£900",
  },
  {
    icon: Speaker,
    customer: "Elite Weddings",
    action: "Sound & Lighting",
    location: "Liverpool",
    time: "11 mins ago",
    price: "£1200",
  },
];

export default function LiveActivity() {
  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-blue-400 font-semibold">
            LIVE BOOKINGS
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Bookings Happening Right Now
          </h2>

          <p className="text-white/60 mt-6 max-w-xl mx-auto">
            Thousands of customers trust BookMyDJ every month.
          </p>
        </div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 22,
          }}
          className="flex gap-8 w-max"
        >
          {[...bookings, ...bookings].map((booking, index) => {
            const Icon = booking.icon;

            return (
              <div
                key={index}
                className="min-w-[360px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                    <Icon className="text-blue-400" />
                  </div>

                  <span className="text-green-400 text-sm flex items-center gap-2">
                    <CalendarCheck2 size={15} />
                    Confirmed
                  </span>
                </div>

                <h3 className="text-xl font-semibold mt-8">
                  {booking.customer}
                </h3>

                <p className="text-white/70 mt-3">
                  {booking.action}
                </p>

                <div className="flex justify-between mt-8 text-sm text-white/50">
                  <span>{booking.location}</span>
                  <span>{booking.time}</span>
                </div>

                <div className="mt-6 text-blue-400 font-bold text-xl">
                  {booking.price}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}