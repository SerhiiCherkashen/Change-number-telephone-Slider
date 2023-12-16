import { createSlice } from "@reduxjs/toolkit";

const randomTelephoneSlice = createSlice({
  name: "randomTelephone",
  initialState: {
    code: "0",
    number: "0",
    tri: "0",
    firstTwo: "0",
    lastTwo: "0",
  },
  reducers: {
    generateNumber: (state) => {
      let code = Math.round(Math.random() * 99);
      state.code = code;
      let number = Math.round(Math.random() * 10000000);
      state.number = number;
      let tri = Math.round(Math.random() * 999);
      state.tri = tri;
      let firstTwo = Math.round(Math.random() * 99);
      state.firstTwo = firstTwo;
      let lastTwo = Math.round(Math.random() * 99);
      state.lastTwo = lastTwo;
    },
  },
});

export const { generateNumber } = randomTelephoneSlice.actions;
export default randomTelephoneSlice.reducer;
