import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { products } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) return notFound();

  const specs = [
    ["Category", product.category],
    ["Availability", "In Stock"],
    ["Delivery", "UK Wide"],
    ["Support", "24/7"],
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#0b0b0c] text-white">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 md:pb-32 md:pt-36">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs text-white/45 sm:text-sm">
            <Link href="/shop" className="transition hover:text-white">
              Shop
            </Link>
            <span>/</span>
            <span className="text-white/70">{product.category}</span>
            <span>/</span>
            <span className="truncate text-white">{product.name}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] md:rounded-[32px] lg:aspect-auto lg:h-[720px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute left-5 top-5">
                <span className="inline-flex rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:rounded-[32px] md:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45 sm:text-sm">
                  {product.category}
                </p>

                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                  {product.name}
                </h1>

                <div className="mt-8 flex items-baseline gap-3 border-y border-white/10 py-6">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                    From
                  </span>
                  <span className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                    £{product.price}
                  </span>
                  <span className="text-sm text-white/45">/ day</span>
                </div>

                <p className="mt-6 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  Premium professional equipment suitable for weddings,
                  festivals, corporate events, and private celebrations.
                  Delivered, tested, and fully supported by our team.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button className="inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-medium text-black transition duration-300 hover:bg-white/90 sm:text-base">
                    Rent Equipment
                  </button>
                  <button className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:border-white/30 sm:text-base">
                    Request a Quote
                  </button>
                </div>
              </div>

              {/* Specs */}
              <div className="mt-4 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:rounded-[28px]">
                <div className="grid grid-cols-2 gap-px md:grid-cols-4">
                  {specs.map(([label, value]) => (
                    <div key={label} className="bg-[#111214] p-4 sm:p-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-[11px]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white sm:text-base">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}