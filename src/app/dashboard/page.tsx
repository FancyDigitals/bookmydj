import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DashboardHome from "@/components/dashboard/DashboardHome";

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <DashboardHome />

      <Footer />
    </>
  );
}