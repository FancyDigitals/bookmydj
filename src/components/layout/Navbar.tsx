"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Book Online", href: "/book-online" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[rgba(11,11,12,0.75)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* Subtle blue accent line when scrolled */}
        {scrolled && (
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        )}

        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <div className="relative h-9 w-32 sm:h-10 sm:w-36">
              <Image
                src="/logo.png"
                alt="BookMyDJ"
                fill
                sizes="144px"
                priority
                className="object-contain object-left brightness-0 invert transition duration-300 group-hover:opacity-90"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-[10px] px-3.5 py-2 text-sm font-medium transition-all duration-200 xl:px-4 ${
                    active
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}

                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-[10px] border border-blue-400/25 bg-blue-500/10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/search"
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-transparent text-white/60 transition duration-200 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
            >
              <Search size={17} strokeWidth={2} />
            </Link>

            <Link
              href="/login"
              aria-label="Account"
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-transparent text-white/60 transition duration-200 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
            >
              <User size={17} strokeWidth={2} />
            </Link>

            <Link
              href="/book-online"
              className="ml-1 hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-blue-500 md:inline-flex"
            >
              Book Event
              <ArrowUpRight size={14} />
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-transparent text-white/70 transition duration-200 hover:border-white/10 hover:bg-white/[0.05] hover:text-white lg:hidden"
            >
              <Menu size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-[#0b0b0c] shadow-[0_-20px_80px_rgba(0,0,0,0.5)]"
            >
              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-32 right-0 h-[280px] w-[380px] rounded-full bg-blue-600/20 blur-[120px]" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center"
                >
                  <div className="relative h-9 w-32">
                    <Image
                      src="/logo.png"
                      alt="BookMyDJ"
                      fill
                      sizes="128px"
                      className="object-contain object-left brightness-0 invert"
                    />
                  </div>
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03] text-white/70 transition hover:text-white"
                >
                  <X size={18} strokeWidth={2} />
                </button>
              </div>

              {/* Section label */}
              <div className="px-5 pb-3 pt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                  Navigate
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1 px-3">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`group flex items-center justify-between rounded-xl border px-4 py-3.5 text-[15px] font-medium transition duration-200 ${
                          active
                            ? "border-blue-400/30 bg-blue-500/10 text-blue-100"
                            : "border-transparent text-white/70 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          size={15}
                          className={`transition duration-200 ${
                            active
                              ? "text-blue-300"
                              : "text-white/30 group-hover:text-white/70"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="mx-5 my-6 h-px bg-white/[0.06]" />

              {/* Quick actions */}
              <div className="px-5">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                  Quick Access
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/search"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-white/75 transition hover:border-white/20 hover:text-white"
                  >
                    <Search size={15} />
                    Search
                  </Link>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-white/75 transition hover:border-white/20 hover:text-white"
                  >
                    <User size={15} />
                    Account
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto border-t border-white/10 p-5">
                <Link
                  href="/book-online"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-sm font-medium text-white transition duration-300 hover:bg-blue-500"
                >
                  Book Event
                  <ArrowUpRight size={15} />
                </Link>

                <p className="mt-4 text-center text-[11px] text-white/40">
                  Trusted by 2,500+ events across the UK
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}