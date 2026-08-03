import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import WelcomeModal from "@/components/ui/WelcomeModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BookMyDJ — Premium Entertainment Booking Platform",
    template: "%s | BookMyDJ",
  },
  description:
    "The UK's leading premium entertainment booking platform. Book DJs, MCs, musicians, photographers, equipment and more for any event.",
  keywords: [
    "book DJ",
    "hire DJ",
    "wedding DJ",
    "corporate DJ",
    "entertainment booking",
    "MC booking",
    "equipment rental",
    "UK entertainment",
    "DJ marketplace",
    "event entertainment",
  ],
  authors: [{ name: "BookMyDJ" }],
  creator: "BookMyDJ",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bookmydj.co.uk",
    siteName: "BookMyDJ",
    title: "BookMyDJ — Premium Entertainment Booking Platform",
    description:
      "Find and book the perfect entertainment for every event. DJs, MCs, musicians, photographers, equipment and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookMyDJ — Premium Entertainment Booking Platform",
    description:
      "Find and book the perfect entertainment for every event.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BookMyDJ",
              description:
                "The UK's leading premium entertainment booking platform",
              url: "https://bookmydj.co.uk",
              logo: "https://bookmydj.co.uk/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-20-7946-0958",
                contactType: "customer service",
                areaServed: "GB",
                availableLanguage: "English",
              },
              sameAs: [
                "https://instagram.com/bookmydj",
                "https://twitter.com/bookmydj",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BookMyDJ",
              url: "https://bookmydj.co.uk",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://bookmydj.co.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-bg text-white antialiased">
        <Navbar />
        <WelcomeModal />
        <main>{children}</main>
      </body>
    </html>
  );
}