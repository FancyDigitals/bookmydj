import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import MarketplaceHero from "@/components/marketplace/MarketplaceHero";
import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import MarketplaceToolbar from "@/components/marketplace/MarketplaceToolbar";
import MarketplaceGrid from "@/components/marketplace/MarketplaceGrid";

export default function MarketplacePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#0b0b0c] text-white">
        <MarketplaceHero />

        <section className="pb-20 sm:pb-24 md:pb-32">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:gap-8 xl:gap-10">
            {/* Filters (hidden on mobile, can be replaced with a drawer button if needed) */}
            <div className="hidden lg:block">
              <MarketplaceFilters />
            </div>

            <div>
              <MarketplaceToolbar />
              <MarketplaceGrid />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}