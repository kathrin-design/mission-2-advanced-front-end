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

export const updateUser = async (userData) => {
  try {
    const response = await apiClient.put(`/users/${userData.userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const deleteUser = async (userData) => {
  try {
    const response = await apiClient.delete(`/users/${userData.userId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw error;
  }
};
