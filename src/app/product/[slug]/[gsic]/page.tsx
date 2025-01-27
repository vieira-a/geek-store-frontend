"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useProductStore } from "../../store/product.store";

export default function ProductDetail() {
  const { slug, gsic } = useParams();

  const { product, findProductBySlugAndGsic } = useProductStore();

  useEffect(() => {
    if (slug && gsic) {
      findProductBySlugAndGsic(slug as string, gsic as string);
    }
  }, [slug, gsic]);

  if (!product) {
    return <div>Carregando detalhes do produto...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg mt-4">{product.description}</p>
      <p className="text-2xl font-semibold text-green-600 mt-4">
        R$ {product.price.toFixed(2)}
      </p>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="mt-8 rounded-lg"
      />
    </div>
  );
}
