import { create } from "zustand";
import { CartState } from "../type/cart.type";
import { useEffect } from "react";

export const useCartStore = create<CartState>((set) => ({
  cart: {
    sessionId: "",
    gsic: "",
    items: [],
    totalItems: 0,
    totalPrice: 0,
    status: "",
  },

  createCart: async (productSlug: string, productGsic: string) => {
    const GEEKSTORE_API = process.env.NEXT_PUBLIC_GEEKSTORE_API_URL;
    try {
      const requestBody = {
        items: [{ slug: productSlug, gsic: productGsic, quantity: 1 }],
      };

      const localStorageCart = localStorage.getItem("cart");

      if (!localStorageCart) {
        const response = await fetch(`${GEEKSTORE_API}/carts`, {
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
    const GEEKSTORE_API = process.env.NEXT_PUBLIC_GEEKSTORE_API_URL;
    try {
      const response = await fetch(
        `${GEEKSTORE_API}/carts/${sessionId}/${gsic}`,
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

  loadCartFromLocalStorage: () => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        set({ cart: JSON.parse(storedCart) });
      }
    }
  },
}));

export const useInitializeCart = () => {
  useEffect(() => {
    useCartStore.getState().loadCartFromLocalStorage();
  }, []);
};
