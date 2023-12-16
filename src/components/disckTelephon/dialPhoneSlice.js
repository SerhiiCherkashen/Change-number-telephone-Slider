// src/features/phone/phoneSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dialPhoneSlice = createSlice({
  name: "dialPhone",
  initialState: {
    number: "",
  },
  reducers: {
    dial: (state, action) => {
      state.number += action.payload;
    },
    clearNumber: (state) => {
      state.number = "";
    },
  },
});

export const { dial, clearNumber } = dialPhoneSlice.actions;
export default dialPhoneSlice.reducer;
