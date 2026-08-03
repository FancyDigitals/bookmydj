"use client";

const reviews = [
  {
    name: "Sarah Williams",
    review:
      "Absolutely incredible. The dance floor was packed all night.",
  },
  {
    name: "James Carter",
    review:
      "Professional, punctual and worth every penny.",
  },
  {
    name: "Olivia Brown",
    review:
      "Everyone kept asking where we found this DJ.",
  },
];

export default function ArtistReviews() {
  return (
    <section className="mt-24">

      <h2 className="text-4xl font-bold mb-10">
        Reviews
      </h2>

      <div className="space-y-6">

        {reviews.map((review) => (

          <div
            key={review.name}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >

            <h3 className="font-semibold text-xl">
              {review.name}
            </h3>

            <p className="mt-4 text-white/60 leading-8">
              {review.review}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}