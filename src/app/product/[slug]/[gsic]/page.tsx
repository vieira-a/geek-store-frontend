"use client";

import AppHeader from "@/module/shared/component/AppHeader";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useProductStore } from "../../store/product.store";
import { useCartStore } from "@/app/cart/store/cart.store";

export default function ProductDetail() {
  const { slug, gsic } = useParams();
  const { createCart, cart, updateCart } = useCartStore();

  const { product, findProductBySlugAndGsic } = useProductStore();

  const handleCreateCart = (productSlug: string, productGsic: string) => {
    const localStorageCart = localStorage.getItem("cart");

    if (localStorageCart) {
      console.log("ProductDetail > Atualizando carrinho");
      const { sessionId, gsic } = JSON.parse(localStorageCart);

      updateCart(sessionId, gsic, {
        items: [{ slug: productSlug, gsic: productGsic, quantity: 1 }],
      });
    }

    createCart(productSlug, productGsic);
  };

  useEffect(() => {
    if (slug && gsic) {
      findProductBySlugAndGsic(slug as string, gsic as string);
    }
  }, [slug, gsic]);

  if (!product) {
    return <div>Carregando detalhes do produto...</div>;
  }

  return (
    <div className="mx-auto px-60 py-12 min-h-screen">
      <div className="grid grid-cols-2 gap-8 max-w-[800px] mx-auto">
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <img
            width={400}
            src={product.imageUrl}
            alt={product.name}
            className="mt-8 rounded-lg"
          />
          <p className="text-lg mt-4">{product.description}</p>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex-grow"></div>
          <p className="text-2xl font-semibold text-zinc-600 mt-4">
            R$ {product.price.toFixed(2)}
          </p>
          <button
            onClick={() => handleCreateCart(product.slug, product.gsic)}
            className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-4 rounded text-xs font-bold uppercase"
          >
            Adicionar à sacola
          </button>
        </div>
      </div>
    </div>
  );
}
