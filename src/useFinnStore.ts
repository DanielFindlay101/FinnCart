import { create } from "zustand";

interface StoreState {
    checkoutItems: number
    increaseItems: (by: number) => void
    cartSidebar: boolean
    openCartSidebar: (cartSidebar: boolean) => void
}

export const useFinnStore = create<StoreState>()((set) => ({
    checkoutItems: 0,
    increaseItems: (by) => set((state) => ({ checkoutItems: state.checkoutItems + by })),
    cartSidebar: false,
    openCartSidebar: () => set((state) => ({ cartSidebar: !state.cartSidebar}))
}))