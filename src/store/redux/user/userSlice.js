import { createSlice } from "@reduxjs/toolkit";
import {
  createUserData,
  getUserData,
  updateUserData,
  deleteUserData,
} from "./userActions";

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(createUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        console.log("Login Success - Payload:", action.payload);
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(deleteUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
