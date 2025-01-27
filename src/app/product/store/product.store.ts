import { create } from "zustand";
import { Product, ProductState } from "../type/product.type";

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
  product: {
    name: "",
    description: "",
    slug: "",
    gsic: "",
    price: 0,
    stock: 0,
    category: "",
    imageUrl: "",
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
  findProductBySlugAndGsic: async (
    slug: string,
    gsic: string
  ): Promise<Product | undefined> => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/products/${slug}/${gsic}`
      );

      console.log("Buscando produto...");
      console.log("response", response);
      const result: Product = await response.json();

      console.log("Produto encontrado:", result); // Log do produto encontrado
      set({ product: result });
      return result;
    } catch (error) {
      console.error("Falha ao buscar produto", error);
      set({ product: undefined });
      return undefined;
    }
  },
}));
