import { create } from "zustand";

interface StoreState {
    cartItems: number
    increaseCartItems: (by: number) => void
    cartSidebar: boolean
    openCartSidebar: (cartSidebar: boolean) => void
}

export const useFinnStore = create<StoreState>()((set) => ({
    cartItems: 0,
    increaseCartItems: (by) => set((state) => ({ cartItems: state.cartItems + by })),
    cartSidebar: false,
    openCartSidebar: () => set((state) => ({ cartSidebar: !state.cartSidebar}))
}))