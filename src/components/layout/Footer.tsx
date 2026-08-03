import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";

// Brand SVG icons
const InstagramSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);

const XSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M17.53 3H20.77L13.68 11.09L22 22H15.5L10.42 15.35L4.63 22H1.39L8.97 13.35L1 3H7.66L12.24 9.06L17.53 3ZM16.4 20.06H18.19L6.68 4.83H4.76L16.4 20.06Z"/>
  </svg>
);

const YouTubeSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8386 5.15941C21.4979 4.80824 21.0698 4.55318 20.5983 4.42C18.9028 3.99 12 3.99 12 3.99C12 3.99 5.0972 3.99 3.40167 4.42C2.93016 4.55318 2.5021 4.80824 2.16137 5.15941C1.82065 5.51057 1.57879 5.94541 1.46 6.42C1.14521 8.14721 0.991235 9.89985 1 11.65C0.991235 13.4001 1.14521 15.1528 1.46 16.88C1.5946 17.3398 1.84025 17.7574 2.17442 18.0938C2.50859 18.4302 2.92057 18.6738 3.375 18.8C5.07056 19.23 12 19.23 12 19.23C12 19.23 18.9028 19.23 20.5983 18.8C21.0698 18.6668 21.4979 18.4118 21.8386 18.0606C22.1793 17.7094 22.4212 17.2746 22.54 16.8C22.8501 15.0854 23.0022 13.3457 23 11.6C23.0084 9.85 22.8562 8.10429 22.54 6.38V6.42Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.75 14.85L15.5 11.65L9.75 8.45V14.85Z" fill="currentColor"/>
  </svg>
);

const TikTokSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const linkGroups = [
  {
    title: "Platform",
    links: [
      { label: "Marketplace", href: "/marketplace" },
      { label: "Book Online", href: "/book" },
      { label: "Shop", href: "/shop" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const socials = [
  { icon: InstagramSVG, label: "Instagram", href: "#" },
  { icon: XSVG, label: "X (Twitter)", href: "#" },
  { icon: YouTubeSVG, label: "YouTube", href: "#" },
  { icon: TikTokSVG, label: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0b0b0c]">
      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />
      </div>

      {/* Top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        {/* CTA Row */}
        <div className="mb-12 grid gap-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md sm:mb-16 sm:grid-cols-2 sm:items-center sm:gap-8 sm:p-8 md:rounded-[28px] md:p-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-blue-200/80 sm:text-xs">
              Stay In The Loop
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Get updates from the world of premium entertainment.
            </h3>
          </div>

          <form className="flex overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
            <div className="flex items-center pl-4 pr-2 text-white/50">
              <Mail size={16} />
            </div>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-white/40 sm:py-4"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-500 sm:px-6"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-3"
            >
              <div className="relative h-10 w-32">
  <Image
    src="/logo.png"
    alt="BookMyDJ"
    fill
    sizes="128px"
    className="object-contain brightness-0 invert"
    priority
  />
</div>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-white/55">
              The UK&apos;s leading premium entertainment booking platform.
              Find and book DJs, MCs, musicians, photographers, and more.
            </p>

            {/* Contact card */}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/75 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
            >
              Get in touch
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                {group.title}
              </h4>

              <div className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group inline-flex w-fit items-center gap-1.5 text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition duration-300 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/[0.06]" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-xs text-white/45">
              © {new Date().getFullYear()} BookMyDJ. All rights reserved.
            </span>
            <span className="text-[11px] text-white/25">
              Designed & Engineered by{" "}
              <a
                href="https://fancydigitals.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 transition hover:text-blue-300"
              >
                Fancy Digitals
              </a>
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/10 bg-white/[0.04] text-white/60 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}