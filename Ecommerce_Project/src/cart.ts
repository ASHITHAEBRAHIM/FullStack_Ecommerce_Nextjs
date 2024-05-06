import create from 'zustand';

interface CartProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
}

interface CartState {
  cartItems: CartProduct[];
  addToCart: (item: CartProduct) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemQuantity: (itemId: number, newQuantity: number) => void;
  setCartItems: (items: CartProduct[]) => void;
}

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (itemId) =>
    set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== itemId) })),
    updateCartItemQuantity: (itemId, newQuantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    })),
  setCartItems: (items) => set({ cartItems: items }),
}));

export default useCartStore;
