type CartItem = {
  gsic: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  subtotal: number;
  imageUrl: string;
};

type UpdateCartItem = {
  slug: string;
  gsic: string;
  quantity: number;
};

export type Cart = {
  sessionId: string;
  gsic: string;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  status: string;
};

export type UpdateCart = {
  items: UpdateCartItem[];
};

export type CartState = {
  cart: Cart;
  createCart: (productSlug: string, productGsic: string) => Promise<Cart>;
  updateCart: (
    sessionId: string,
    gsic: string,
    updateCart: UpdateCart
  ) => Promise<Cart>;
  loadCartFromLocalStorage: () => void;
};
