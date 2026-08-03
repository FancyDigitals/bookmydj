"use client";

const genres = [
  "Afrobeats",
  "Amapiano",
  "Hip Hop",
  "R&B",
  "Dancehall",
  "House",
  "EDM",
  "Open Format",
];

export default function ArtistGenres() {
  return (
    <section className="py-24">

      <h2 className="text-4xl font-bold mb-10">
        Music Genres
      </h2>

      <div className="flex flex-wrap gap-4">

        {genres.map((genre) => (

          <span
            key={genre}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-blue-300"
          >
            {genre}
          </span>

        ))}

      </div>

    </section>
  );
}