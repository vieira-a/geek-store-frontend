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

        if (response.ok) {
          const result = await response.json();

          set({ cart: result });
          localStorage.setItem("cart", JSON.stringify(result));
          return result;
        } else {
          const errorResponse = await response.json();
          console.error("Falha ao criar carrinho:", errorResponse);
        }
      }
    } catch (error) {
      throw error;
    }
  },

  updateCart: async (sessionId, gsic, updateCart) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/carts/${sessionId}/${gsic}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateCart),
        }
      );

      if (response.ok) {
        const result = await response.json();
        set({ cart: result });
        localStorage.setItem("cart", JSON.stringify(result));

        return result;
      } else {
        const errorResponse = await response.json();
        console.error("Falha ao atualizar carrinho:", errorResponse);
      }
    } catch (error) {
      throw error;
    }
  },
}));
