import apiClient from "./apiClient";

export const getUsers = async () => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await apiClient.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await apiClient.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
