import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ArtistHero from "@/components/artist/ArtistHero";
import ArtistGallery from "@/components/artist/ArtistGallery";
import ArtistReviews from "@/components/artist/ArtistReviews";
import BookingCard from "@/components/artist/BookingCard";
import ArtistAbout from "@/components/artist/ArtistAbout";
import ArtistStats from "@/components/artist/ArtistStats";
import ArtistServices from "@/components/artist/ArtistServices";

import { artists } from "@/lib/artists";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const artist = artists.find(
    (item) => item.id === Number(id)
  );

  if (!artist) return notFound();

  return (
    <>
      <Navbar />

      <main>

        <ArtistHero artist={artist} />

        <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1fr_380px] gap-16">

          <div>

            <ArtistAbout />

<ArtistStats />

<ArtistServices />

<ArtistGallery artist={artist} />

<ArtistReviews />

          </div>

          <BookingCard artist={artist} />

        </section>

      </main>

      <Footer />

    </>
  );
}