"use client";

import ProductCard from "./ProductCard";
import { products } from "@/lib/products";

export default function ProductGrid() {
  return (
    <section className="bg-[#0b0b0c] pb-20 sm:pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/45 sm:text-sm">
              Available Now
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Featured equipment
            </h2>
          </div>

          <p className="hidden text-xs text-white/40 sm:block">
            {products.length} items
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3 xl:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}