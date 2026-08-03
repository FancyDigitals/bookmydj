"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, ArrowRight, ExternalLink } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const shown = localStorage.getItem("fd_welcome_shown");
    if (!shown) {
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("fd_welcome_shown", "true");
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
            className="fixed inset-0 z-[80] bg-[rgba(5,8,22,0.85)] backdrop-blur-2xl"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="pointer-events-auto relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[24px] bg-gradient-to-b from-[rgba(15,20,40,0.98)] to-[rgba(10,15,30,0.99)] border border-white/[0.08] p-10 no-scrollbar"
            >
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-[24px]" />

              {/* Ambient glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-[10px] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                aria-label="Close"
              >
                <X className="w-4 h-4" strokeWidth={2} />
              </button>

              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-[13px] bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-glow">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[18px] font-700 tracking-tight">Fancy Digitals</div>
                  <div className="text-[12px] text-white/40 font-500">Digital Transformation Partner</div>
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                <span className="text-[12px] font-600 text-accent-light uppercase tracking-widest">
                  Premium Presentation
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-[28px] sm:text-[32px] font-800 tracking-[-1px] leading-[1.15] gradient-text mb-5">
                Welcome to the Future of BookMyDJ
              </h2>

              {/* Body */}
              <p className="text-[15px] text-white/65 leading-[1.8] mb-4">
                This experience has been reimagined by{" "}
                <span className="text-white font-600">Fancy Digitals</span> to
                demonstrate how your entertainment business can become a{" "}
                <span className="text-highlight font-500">
                  premium digital brand
                </span>{" "}
                built for growth, visibility, automation and the AI-powered
                future of search.
              </p>

              <div className="w-12 h-px bg-gradient-to-r from-accent to-transparent my-6" />

              <p className="text-[15px] text-white/65 leading-[1.8] mb-4">
                We don&apos;t simply design websites. We{" "}
                <span className="text-white font-600">
                  engineer digital businesses
                </span>
                .
              </p>

              <p className="text-[15px] text-white/65 leading-[1.8] mb-4">
                We combine premium UI design, software engineering, marketplace
                architecture, AI integration, SEO, automation and performance
                optimization into one scalable ecosystem.
              </p>

              <p className="text-[15px] text-white/65 leading-[1.8]">
                Your customers won&apos;t just find you —{" "}
                <span className="text-white font-600">
                  they&apos;ll trust you
                </span>
                . Search engines will understand your brand better. Modern AI
                systems will have clearer, richer information about your business
                through{" "}
                <span className="text-highlight font-500">
                  strong technical SEO, structured data, and authoritative
                  content
                </span>
                .
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button onClick={handleClose} className="btn-primary flex-1 justify-center">
                  <ArrowRight className="w-4 h-4" />
                  Continue Experience
                </button>
                <a
                  href="https://fancydigitals.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Discover Fancy Digitals
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}