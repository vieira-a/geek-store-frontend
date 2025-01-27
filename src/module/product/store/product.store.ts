import { create } from "zustand";
import { ProductState } from "../type/product.type";

export const useProductStore = create<ProductState>()((set) => ({
  data: [],
  meta: {
    page: 1,
    take: 10,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: false,
  },
  fetchProducts: async (page: number = 1, take: number = 10) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/products?page=${page}&take=${take}`
      );
      const result = await response.json();

      set({
        data: result.data,
        meta: {
          page: result.meta.page,
          take: result.meta.take,
          itemCount: result.meta.itemCount,
          pageCount: result.meta.pageCount,
          hasPreviousPage: result.meta.hasPreviousPage,
          hasNextPage: result.meta.hasNextPage,
        },
      });
    } catch (error) {
      console.error("Falha ao buscar produtos", error);
    }
  },
}));
