import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Counter",
    initialState: { counter: 0 },
    reducers: {
      Add: (state, action) => {
  
        state.counter += Number(action.payload)
      },
      Sub: (state, action) => {
        state.counter -= Number(action.payload)
  
      },
      Increment: (state) => {
        state.counter++;
      },
      Decrement: (state) => {
        state.counter--;
      },
    },
  });

  export const counterAction = counterSlice.actions;
  export default counterSlice