import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUser,
  getUsers,
  updateUser,
} from "../../../services/api/userService";

// Create user
export const createUserData = createAsyncThunk(
  "user/createUserData",
  async (userData, { rejectWithValue }) => {
    try {
      const createdUser = await createUser(userData);
      return createdUser; // This will be passed to the slice's `fulfilled` case
    } catch (error) {
      return rejectWithValue(error.message); // This will be passed to the slice's `rejected` case
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const users = await getUsers();
      const user = users.find(
        (u) =>
          u.userName === userData.userName &&
          u.email === userData.email &&
          u.password === userData.password
      );

      if (user) {
        return user;
      } else {
        return rejectWithValue("Invalid username, email, or password");
      }
    } catch (error) {
      return rejectWithValue("Failed to fetch user data");
    }
  }
);

// Update user data
export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (userData, { rejectWithValue }) => {
    try {
      const updatedUser = await updateUser(userData);
      return updatedUser; // This will be passed to the slice's `fulfilled` case
    } catch (error) {
      return rejectWithValue(error.message); // This will be passed to the slice's `rejected` case
    }
  }
);

// Logout action (doesn't need async logic)
export const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userData");
  return { type: "user/logout" };
};
