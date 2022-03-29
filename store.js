import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./src/features/car/carSlice";

export const store = configureStore({
  reducer: {
    carReducer,
  },
});
