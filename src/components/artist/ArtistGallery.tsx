"use client";

import Image from "next/image";

export default function ArtistGallery({
  artist,
}: {
  artist: any;
}) {
  return (
    <section>

      <h2 className="text-4xl font-bold mb-10">
        Gallery
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {[1, 2, 3, 4].map((item) => (

          <div
            key={item}
            className="relative h-80 overflow-hidden rounded-3xl"
          >

            <Image
              src={artist.image}
              alt=""
              fill
              className="object-cover hover:scale-110 transition duration-700"
            />

          </div>

        ))}

      </div>

    </section>
  );
}