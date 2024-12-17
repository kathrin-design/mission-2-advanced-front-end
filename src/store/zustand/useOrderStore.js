import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getOrders } from "../../services/api/orderService";

const useOrder = create(
  persist(
    (set) => ({
      orders: [],

      fetchOrders: async () => {
        try {
          const ordersData = await getOrders();
          set({ orders: ordersData });
        } catch (error) {
          console.error("Failed to fetch orders:", error);
        }
      },

      addOrderToLocalStorage: (order) =>
        set((state) => ({
          orders: [...state.orders, order],
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

export default useOrder;
