import { create } from "zustand";
import updateUser from "../services/api/apiClient";

const useProfile = create((set) => ({
  user: {
    username: "",
    email: "",
    avatarUrl: "",
    fullName: "",
    gender: "",
    phoneNumber: "",
  },

  setUser: async (newUser) => set({ user: { ...newUser } }),

  updateUser: (key, value) =>
    set((state) => ({
      user: { ...state.user, [key]: value },
    })),

  updateUserToApi: async (userData) => {
    try {
      const updatedUser = await updateUser(userData.id, userData);
      set({ user: updatedUser });
      return updatedUser;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },
}));

export default useProfile;
