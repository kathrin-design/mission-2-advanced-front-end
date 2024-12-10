import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOrderStore = create(
  persist(
    (set) => ({
      orders: [],

      addOrder: (newOrder) =>
        set((state) => ({
          orders: [...state.orders, newOrder],
        })),

      removeOrder: (orderId) =>
        set((state) => ({
          orders: state.orders.filter((order) => order.orderId !== orderId),
        })),

      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: "order-storage",
    }
  )
);

export default useOrderStore;
