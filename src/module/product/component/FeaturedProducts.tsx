"use client";

import { useEffect } from "react";
import { useProductStore } from "../store/product.store";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const { data, meta, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="px-60 py-8">
      <h4 className="text-2xl font-bold">Mais vendidos em Camisetas</h4>
      <div className="grid-cols-3 grid gap-2 mt-4">
        {data.map((product) => (
          <div key={product.slug} className="mt-4">
            <ProductCard
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
