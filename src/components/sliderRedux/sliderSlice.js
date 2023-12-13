import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    minValue: 0,
    maxValue: 1000,
    currentValue: 0,
  },
  reducers: {
    changeValue: (state, action) => {
      console.log(action.payload.target);
      console.log(action.payload.target.value);
      state.currentValue = action.payload.target.value;
      //   setSliderValue(parseInt(event.target.value, 10));
    },
  },
});

export const { changeValue } = sliderSlice.actions;
export default sliderSlice.reducer;
