import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import UserReducer from "./user/userSlice";

// Configuration for redux-persist
const persistConfig = {
  key: "user", // Key for the persisted reducer
  storage,     // Storage to use (localStorage)
};

const persistedUserReducer = persistReducer(persistConfig, UserReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid errors with redux-persist
    }).concat(logger),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
