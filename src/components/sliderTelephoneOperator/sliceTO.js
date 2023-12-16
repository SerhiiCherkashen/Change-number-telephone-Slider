import { createSlice } from "@reduxjs/toolkit";

const sliderTOSlice = createSlice({
  name: "sliderTO",

  initialState: {
    min: 0,
    max: 9999999,
    current: 0,
    currentCode: "050",
    codes: [
      {
        nameCode: "Vodafone 050",
        codeValue: "050",
      },
      {
        nameCode: "Vodafone 066",
        codeValue: "066",
      },
      {
        nameCode: "Vodafone 095",
        codeValue: "095",
      },
      {
        nameCode: "Vodafone 099",
        codeValue: "099",
      },
      {
        nameCode: "Life 063",
        codeValue: "063",
      },
      {
        nameCode: "Life 073",
        codeValue: "073",
      },
      {
        nameCode: "Life 093",
        codeValue: "093",
      },
      {
        nameCode: "Kyivstar 067",
        codeValue: "067",
      },
      {
        nameCode: "Kyivstar 068",
        codeValue: "068",
      },
      {
        nameCode: "Kyivstar 096",
        codeValue: "096",
      },
      {
        nameCode: "Kyivstar 097",
        codeValue: "097",
      },
      {
        nameCode: "Kyivstar 098",
        codeValue: "098",
      },
    ],
  },
  reducers: {
    changeOperator: (state, actions) => {
      console.log("actions : ", actions);
      state.current = actions.payload.target.value;
    },
    selectChange: (state, e) => {
      state.currentCode = e.payload.target.value;
      console.log("E : ", e.payload.target.value);
    },
  },
});

export const { changeOperator, selectChange } = sliderTOSlice.actions;
export default sliderTOSlice.reducer;
