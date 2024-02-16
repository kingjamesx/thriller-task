import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../lib/features/counter/counterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { countReducer },
  });
};
