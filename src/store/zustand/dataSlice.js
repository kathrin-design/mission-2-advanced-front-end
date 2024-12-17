import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    list: [],
  },
  reducers: {
    setData: (state, action) => {
      state.list = action.payload;
    },
    addItem: (state, action) => {
      state.list.unshift(action.payload);
    },
    updateItem: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setData, addItem, updateItem, deleteItem } = dataSlice.actions;
export default dataSlice.reducer;
