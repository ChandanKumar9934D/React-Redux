import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./Counter";
import PrivacySlice from "./Privacy";
const CounterStore = configureStore({
  reducer: {
    Counter: counterSlice.reducer,
    Privacy:PrivacySlice.reducer
  },
});
export default CounterStore;
