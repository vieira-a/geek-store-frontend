"use client";

import ProductCartCard from "./component/ProductCartCard";
import { useCartStore } from "./store/cart.store";
import { useInitializeCart } from "./store/cart.store";

export default function CartPage() {
  useInitializeCart();

  const { cart } = useCartStore();

  return (
    <section className="px-60 py-8">
      <div>
        <h4 className="text-2xl font-bold">Carrinho</h4>
      </div>
      {cart.items.map((item) => (
        <>
          <div className="mt-4">
            <ProductCartCard
              name={item.name}
              gsic={item.gsic}
              quantity={item.quantity}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </div>
          <hr />
        </>
      ))}
      <div className="flex flex-col gap-3 text-right mt-4">
        <h4 className="text-lg">Produtos ({cart.totalItems})</h4>
        <h4 className="text-2xl font-semibold">
          Total: R$ {cart.totalPrice.toFixed(2)}
        </h4>
      </div>
    </section>
  );
}
