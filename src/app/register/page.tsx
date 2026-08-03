import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center px-6 py-32">

        <RegisterForm />

      </main>

      <Footer />
    </>
  );
}