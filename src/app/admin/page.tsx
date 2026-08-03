import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AdminPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-32">

        <h1 className="text-5xl font-bold">
          Admin Dashboard
        </h1>

      </main>

      <Footer />
    </>
  );
}