import apiClient from "./apiClient";

export const createOrder = async (order) => {
  try {
    const response = await apiClient.post("/orders", JSON.stringify(order));
    return response.data;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const response = await apiClient.get("/orders");
    return response.data;
  } catch (error) {
    console.error("Failed to get orders:", error);
    throw error;
  }
};
