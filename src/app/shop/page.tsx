import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ShopHero from "@/components/shop/ShopHero";
import ShopCategories from "@/components/shop/ShopCategories";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#0b0b0c] text-white">
        <ShopHero />
        <ShopCategories />
        <ProductGrid />
      </main>

      <Footer />
    </>
  );
}