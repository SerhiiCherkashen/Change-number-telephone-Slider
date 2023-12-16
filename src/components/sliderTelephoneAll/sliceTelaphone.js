import { createSlice } from "@reduxjs/toolkit";

const telephoneSlice = createSlice({
  name: "telephone",
  initialState: {
    min: 0,
    max: 9999999999,
    current: 0,
    operator: {
      min: 0,
      max: 9999999,
      current: 0,
      code: "050",
    },
    moreLess: {
      min: 0,
      max: 999999999,
      minDuplicates: 0,
      maxDuplicates: 999999999,
      current: 0,
      countClick: 0,
    },
  },
  reducers: {
    change: (state, actions) => {
      state.current = actions.payload.target.value;
    },
    changeOperator: (state, actions) => {
      console.log("actions : ", actions);
      state.operator.current = actions.payload.target.value;
    },
    plusOperator: (state) => {
      state.operator.current -= 1;
      state.operator.current += 1;
      state.operator.current += 1;
    },
    minusOperator: (state) => {
      //   state.operator.current = state.operator.current;
      state.operator.current -= 1;
    },
    selectChange: (state, e) => {
      state.operator.code = e.payload.target.value;
      // console.log("E : ", e.payload);
      // console.log("E : ", e.payload.value);
      // console.log("E : ", e.payload.target);
      console.log("E : ", e.payload.target.value);
    },
    plus: (state) => {
      state.current -= 1;
      state.current += 1;
      state.current += 1;
    },
    minus: (state) => {
      //   state.current = state.current;
      state.current -= 1;
    },
  },
});

export const {
  change,
  plus,
  minus,
  changeOperator,
  plusOperator,
  minusOperator,
  selectChange,
  moreClick,
  lessClick,
  defClick,
} = telephoneSlice.actions;
export default telephoneSlice.reducer;
