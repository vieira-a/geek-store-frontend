import { useEffect, useState } from "react";
import { useCartStore } from "../store/cart.store";
import { Cart } from "../type/cart.type";
import Image from "next/image";

type ProductCartCardProps = {
  slug: string;
  name: string;
  gsic: string;
  quantity: number;
  price: number;
  imageUrl: string;
  cart: Cart;
};

export default function ProductCartCard(productProps: ProductCartCardProps) {
  const { updateCart } = useCartStore();
  const [quantity, setQuantity] = useState(productProps.quantity);

  const handleQuantityChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);

    updateCartQuantityLocally(newQuantity);
  };

  const updateCartQuantityLocally = async (newQuantity: number) => {
    if (newQuantity !== productProps.quantity) {
      await updateCart(productProps.cart.sessionId, productProps.cart.gsic, {
        items: [
          {
            slug: productProps.slug || "",
            gsic: productProps.gsic,
            quantity: newQuantity,
          },
        ],
      });
    }
  };

  useEffect(() => {
    if (quantity !== productProps.quantity) {
      updateCartQuantityLocally(quantity);
    }
  }, [quantity, productProps.quantity, updateCartQuantityLocally]);

  return (
    <div className="flex justify-between h-full p-6 gap-6">
      <div className="flex gap-4 max-w-[350px]">
        <Image
          width={24}
          height={24}
          src={productProps.imageUrl}
          alt="Product"
          className="object-cover"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{productProps.name}</h3>
          <h4 className="text-sm">Código do produto: {productProps.gsic}</h4>
        </div>
      </div>
      <div>
        <select
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <h2 className="text-zinc-600 text-lg font-semibold text-right">
          R$ {(productProps.price * quantity).toFixed(2)}
        </h2>
      </div>
    </div>
  );
}
