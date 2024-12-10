import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLogin = create(
  persist((set, get) => ({
    userName: "",
    email: "",
    password: "",
    isLoggedIn: false,
    setUserName: (userName) => set({ userName }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setLoginStatus: (status) => {
      localStorage.setItem("isLoggedIn", status.toString());
      set({ isLoggedIn: status });
    },

    login: () => {
      const { userName, email, password } = get();
      const storedUser = localStorage.getItem("userData");

      if (storedUser) {
        const {
          userName: storedUserName,
          email: storedEmail,
          password: storedPassword,
        } = JSON.parse(storedUser);

        if (
          userName === storedUserName &&
          email === storedEmail &&
          password === storedPassword
        ) {
          localStorage.setItem("isLoggedIn", "true");
          set({ isLoggedIn: true });
          return true;
        }
      }

      return false;
    },
    logout: () => {
      set({
        userName: "",
        email: "",
        password: "",
        isLoggedIn: false,
      });
      localStorage.removeItem("isLoggedIn");
    },
  }))
);

export default useLogin;
