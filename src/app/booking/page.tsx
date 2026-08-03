import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import BookingWizard from "@/components/booking/BookingWizard";

export default function BookingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-36 pb-24">
        <BookingWizard />
      </main>

      <Footer />
    </>
  );
}