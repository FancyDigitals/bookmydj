import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import BookingHero from "@/components/booking/BookingHero";
import BookingPackages from "@/components/booking/BookingPackages";
import BookingProcess from "@/components/booking/BookingProcess";
import BookingCTA from "@/components/booking/BookingCTA";

export default function BookOnlinePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#0b0b0c] text-white">
        <BookingHero />
        <BookingPackages />
        <BookingProcess />
        <BookingCTA />
      </main>

      <Footer />
    </>
  );
}