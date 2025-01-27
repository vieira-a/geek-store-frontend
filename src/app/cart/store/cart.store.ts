import { create } from "zustand";
import { CartState } from "../type/cart.type";

export const useCartStore = create<CartState>()((set) => ({
  cart: {
    sessionId: "",
    gsic: "",
    items: [],
    totalItems: 0,
    totalPrice: 0,
    status: "",
  },

  createCart: async (productSlug: string, productGsic: string) => {
    try {
      const requestBody = {
        items: [{ slug: productSlug, gsic: productGsic, quantity: 1 }],
      };

      const localStorageCart = localStorage.getItem("cart");

      if (!localStorageCart) {
        const response = await fetch(`http://localhost:3001/api/v1/carts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        const result = await response.json();
        console.log("result", result);

        set({ cart: result });
        localStorage.setItem("cart", JSON.stringify(result));
        return result;
      }
    } catch (error) {
      console.error("Falha ao criar carrinho", error);
    }
  },
}));
