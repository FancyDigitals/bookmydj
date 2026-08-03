"use client";

import { useState } from "react";
import EventStep from "./steps/EventStep";
import DateStep from "./steps/DateStep";
import ExtrasStep from "./steps/ExtrasStep";
import SummaryStep from "./steps/SummaryStep";

const stepLabels = ["Event", "Date", "Extras", "Summary"];

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const progress = (step / stepLabels.length) * 100;

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-blue-200 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          Booking Wizard
        </span>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Book entertainment.
        </h1>

        <p className="mt-3 text-sm text-white/60 sm:text-base">
          Complete a few simple steps to secure your event.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
          <span>
            Step {step} of {stepLabels.length}
          </span>
          <span className="text-white/70">{stepLabels[step - 1]}</span>
        </div>

        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {stepLabels.map((label, i) => {
            const active = i + 1 === step;
            const done = i + 1 < step;
            return (
              <div
                key={label}
                className={`rounded-xl border px-2 py-2 text-center text-[10px] font-medium uppercase tracking-[0.14em] transition sm:text-xs ${
                  active
                    ? "border-blue-400/40 bg-blue-500/10 text-blue-200"
                    : done
                    ? "border-white/15 bg-white/[0.05] text-white/70"
                    : "border-white/10 bg-white/[0.02] text-white/35"
                }`}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>

      {/* Wizard body */}
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md sm:p-8 md:rounded-[32px] md:p-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        {step === 1 && <EventStep />}
        {step === 2 && <DateStep />}
        {step === 3 && <ExtrasStep />}
        {step === 4 && <SummaryStep />}

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-6 sm:mt-10">
          <button
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-40 sm:px-6"
          >
            Back
          </button>

          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-blue-500 sm:px-8"
            >
              Continue
            </button>
          ) : (
            <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-blue-500 sm:px-8">
              Complete Booking
            </button>
          )}
        </div>
      </div>
    </section>
  );
}