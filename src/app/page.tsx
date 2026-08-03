import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import FeaturedArtists from "@/components/sections/FeaturedArtists";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import HowItWorks from "@/components/sections/HowItWorks";
import LiveActivity from "@/components/sections/LiveActivity";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />

<HowItWorks />

<Categories />

<LiveActivity />

<FeaturedArtists />

<Testimonials />

<Partners />

<Footer />
    </>
  );
}