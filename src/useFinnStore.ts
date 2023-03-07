import { create } from "zustand";

interface StoreState {
    checkoutItems: number
    increaseItems: (by: number) => void
}

export const useFinnStore = create<StoreState>()((set) => ({
    checkoutItems: 0,
    increaseItems: (by) => set((state) => ({ checkoutItems: state.checkoutItems + by }))
}))