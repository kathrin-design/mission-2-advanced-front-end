import apiClient from "./apiClient";

export const getCourses = async () => {
  try {
    const response = await apiClient.get("/courses");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
};
