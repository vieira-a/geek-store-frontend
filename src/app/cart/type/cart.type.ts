type CartItem = {
  gsic: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export type Cart = {
  sessionId: string;
  gsic: string;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  status: string;
};

export type CartState = {
  cart: Cart;
  createCart: (productSlug: string, productGsic: string) => Promise<Cart>;
};
