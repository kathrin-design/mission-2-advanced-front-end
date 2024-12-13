import { create } from "zustand";
import { createUser } from "../services/api/userService";

export const useRegister = create((set) => ({
  userName: "",
  email: "",
  gender: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",

  setUserName: (userName) => set(() => ({ userName })),
  setEmail: (email) => set(() => ({ email })),
  setGender: (gender) => set(() => ({ gender })),
  setPhoneNumber: (phoneNumber) => set(() => ({ phoneNumber })),
  setPassword: (password) => set(() => ({ password })),
  setConfirmPassword: (confirmPassword) => set(() => ({ confirmPassword })),

  saveToLocalStorage: () => {
    set((state) => {
      const userData = {
        userName: state.userName,
        email: state.email,
        gender: state.gender,
        phoneNumber: state.phoneNumber,
        password: state.password,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      return state;
    });
  },

  saveToAPI: async () => {
    set((state) => {
      const userData = {
        userName: state.userName,
        email: state.email,
        gender: state.gender,
        phoneNumber: state.phoneNumber,
        password: state.password,
      };
      createUser(userData)
        .then((response) => {
          console.log("User successfully registered:", response);
        })
        .catch((error) => {
          console.error("Error registering user:", error);
        });

      return state;
    });
  },
}));
