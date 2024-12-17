import { create } from "zustand";
import { updateUser } from "../../services/api/userService";
import { persist } from "zustand/middleware";
import { getUsers } from "../../services/api/userService";

const useProfile = create(
  persist((set, get) => ({
    user: {
      userName: "",
      email: "",
      avatarUrl: "",
      fullName: "",
      gender: "",
      phoneNumber: "",
    },

    setUser: async () => {
      const { userName } = get();
      try {
        const users = await getUsers();
        const user = users.find((user) => user.userName === userName);
        if (user) {
          set({ user });
        }
      } catch (error) {
        console.error("Error while fetching users:", error);
      }
    },

    updateUser: (key, value) =>
      set((state) => ({
        user: { ...state.user, [key]: value },
      })),

    updateUserToApi: async (userData) => {
      try {
        const updatedUser = await updateUser(userData);
        set({ user: updatedUser });
        return updatedUser;
      } catch (error) {
        console.error("Error updating user:", error);
        throw error;
      }
    },
  }))
);

export default useProfile;
