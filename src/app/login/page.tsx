import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center px-6 py-32">

        <LoginForm />

      </main>

      <Footer />
    </>
  );
}