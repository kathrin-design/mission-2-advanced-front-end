import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} from "../../../services/api/userService";

export const createUserData = createAsyncThunk(
  "user/createUserData",
  async (userData, { rejectWithValue }) => {
    try {
      const createdUser = await createUser(userData);
      return createdUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  "user/getUserData",
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

export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (userData, { rejectWithValue }) => {
    try {
      const updatedUser = await updateUser(userData);
      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUserData = createAsyncThunk(
  "user/deleteUserData",
  async (userData, { rejectWithValue }) => {
    try {
      const deletedUser = await deleteUser(userData);
      return deletedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userData");
  return { type: "user/logout" };
};
