import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutStats from "@/components/about/AboutStats";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#0b0b0c] text-white">
        <AboutHero />
        <AboutStory />
        <AboutStats />
        <AboutValues />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}