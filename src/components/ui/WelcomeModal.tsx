"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal 1 second after homepage loads — every time
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-xl"
          />

          {/* Modal */}
          <div className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="pointer-events-auto relative flex max-h-[92svh] w-full max-w-[620px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b0c] shadow-[0_30px_120px_rgba(0,0,0,0.55)] md:rounded-[28px]"
            >
              {/* Ambient brand glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-1/2 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[130px]" />
                <div className="absolute -bottom-24 -right-16 h-[260px] w-[360px] rounded-full bg-blue-500/10 blur-[110px]" />
              </div>

              {/* Top gradient line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

              {/* Close */}
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03] text-white/60 backdrop-blur-md transition duration-200 hover:border-white/20 hover:text-white sm:right-5 sm:top-5"
              >
                <X size={16} strokeWidth={2} />
              </button>

              {/* Scrollable content */}
              <div className="relative flex-1 overflow-y-auto p-6 sm:p-8 md:p-10">
                {/* Logo */}
                <div className="mb-8 flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-[13px] border border-white/10 bg-white/[0.04] p-1.5">
                    <Image
                      src="/fancy-digitals-logo.png"
                      alt="Fancy Digitals"
                      fill
                      sizes="44px"
                      className="object-contain brightness-0 invert"
                      priority
                    />
                  </div>

                  <div>
                    <div className="text-base font-semibold tracking-tight text-white sm:text-[17px]">
                      Fancy Digitals
                    </div>
                    <div className="text-[11px] font-medium text-white/45 sm:text-xs">
                      Digital Transformation Partner
                    </div>
                  </div>
                </div>

                {/* Badge */}

                {/* Headline */}
                <h2 className="mb-5 text-[26px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[30px] md:text-[34px]">
                  Welcome to the future of{" "}
                  <span className="bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-transparent">
                    BookMyDJ.
                  </span>
                </h2>

                {/* Body */}
                <div className="space-y-4 text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8">
                  <p>
                    This experience has been reimagined by{" "}
                    <span className="font-medium text-white">
                      Fancy Digitals
                    </span>{" "}
                    to demonstrate how your entertainment business can become a{" "}
                    <span className="font-medium text-blue-200">
                      premium digital brand
                    </span>{" "}
                 built for growth, visibility, automation, and the
                    AI-powered future of search.
                  </p>

                  <div className="my-5 h-px w-16 bg-gradient-to-r from-blue-400/60 to-transparent" />

                  <p>
                    We don&apos;t simply design websites. We{" "}
                    <span className="font-medium text-white">
                      engineer digital businesses
                    </span>
                    .
                  </p>

                  <p>
                    We combine premium UI design, software engineering,
                    marketplace architecture, AI integration, SEO, automation,
                    and performance optimization into one scalable ecosystem.
                  </p>

                  <p>
                    Your customers won&apos;t just find you, {" "}
                    <span className="font-medium text-white">
                      they&apos;ll trust you
                    </span>
                    . Search engines will understand your brand better, and
                    modern AI systems will have clearer, richer information
                    about your business through{" "}
                    <span className="font-medium text-blue-200">
                      strong technical SEO, structured data, and authoritative
                      content
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Footer / Actions */}
              <div className="relative border-t border-white/10 bg-black/30 p-5 backdrop-blur-md sm:p-6">
                <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                  <button
                    onClick={handleClose}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-blue-500"
                  >
                    Continue Experience
                    <ArrowRight size={15} />
                  </button>

                  <a
                    href="https://fancydigitals.com.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/30"
                  >
                    Discover Fancy Digitals
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="mt-4 text-center text-[11px] text-white/35">
                  Crafted with precision by Fancy Digitals
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}