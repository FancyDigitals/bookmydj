"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-white/20 md:rounded-[28px]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="inline-flex rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-md sm:text-[11px]">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-medium tracking-tight text-white sm:text-xl">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/50">
          Professional-grade equipment available for UK-wide delivery.
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/40 sm:text-[11px]">
              From
            </p>
            <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">
              £{product.price}
            </p>
          </div>

          <span className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition duration-300 group-hover:bg-white/90 sm:px-5 sm:py-3">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}