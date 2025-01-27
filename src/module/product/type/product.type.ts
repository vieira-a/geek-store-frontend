export type Product = {
  name: string;
  description: string;
  slug: string;
  gsic: string;
  price: number;
  stock: number;
  category: string;
  imageUrl: string;
};

export type ProductState = {
  data: Product[];
  meta: {
    page: number;
    take: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  fetchProducts: (page?: number, meta?: number) => Promise<void>;
};
