import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import SearchHero from "@/components/search/SearchHero";
import TrendingSearches from "@/components/search/TrendingSearches";
import SearchCategories from "@/components/search/SearchCategories";
import SearchResults from "@/components/search/SearchResults";

export default function SearchPage() {
  return (
    <>
      <Navbar />

      <main>

        <SearchHero />

        <TrendingSearches />

        <SearchCategories />

        <SearchResults />

      </main>

      <Footer />

    </>
  );
}