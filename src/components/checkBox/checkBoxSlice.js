import { createSlice } from "@reduxjs/toolkit";

const checkBoxSlice = createSlice({
  name: "checkBox",
  initialState: {
    boxArrayG: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      ,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
    ],
    arrayObj: [
      { id: 0, checked: false },
      { id: 1, checked: false },
      { id: 2, checked: false },
      { id: 3, checked: false },
      { id: 4, checked: false },
      { id: 5, checked: false },
      { id: 6, checked: false },
      { id: 7, checked: false },
      { id: 8, checked: false },
      { id: 9, checked: false },
      { id: 10, checked: false },
      { id: 11, checked: false },
      { id: 12, checked: false },
      { id: 13, checked: false },
      { id: 14, checked: false },
      { id: 15, checked: false },
      { id: 16, checked: false },
      { id: 17, checked: false },
      { id: 18, checked: false },
      { id: 19, checked: false },
      { id: 20, checked: false },
      { id: 21, checked: false },
      { id: 22, checked: false },
      { id: 23, checked: false },
      { id: 24, checked: false },
      { id: 25, checked: false },
      { id: 26, checked: false },
      { id: 27, checked: false },
      // { id: 28, checked: false },
    ],
    boxArrayV: [1, 2, 3, 4, 5, 6, 7],
    telNumbersArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    arraysForNumbers: [[], [], [], [], [], [], [], [], [], []],
    indexDel: 0,
  },
  reducers: {
    clickBox: (state, actions) => {
      console.log("click box : ", actions.payload);
      console.log("click box target.id : ", actions.payload.target.id);
      console.log("click box target.value : ", actions.payload.target.value);
      console.log(
        "click box target.checked : ",
        actions.payload.target.checked
      );
      let value = actions.payload.target.value;

      actions.payload.target.checked
        ? (state.arraysForNumbers[value] = [
            ...state.arraysForNumbers[value],
            actions.payload.target.id,
          ])
        : // ((state.indexDel = actions.payload.target.id),
          (state.arraysForNumbers[value] = state.arraysForNumbers[value].filter(
            (item) => item !== actions.payload.target.id
          ));

      state.arraysForNumbers[value] = state.arraysForNumbers[value].sort(
        (a, b) => a - b
      );
      // console.log("state.arraysForNumbers  : ", state.arraysForNumbers);
      // console.log("state.arraysForNumbers[0]  : ", state.arraysForNumbers[0]);
      // console.log("state.arraysForNumbers[1]  : ", state.arraysForNumbers[1]);
      // console.log("state.arraysForNumbers :  ", state.arraysForNumbers[value]);
      // console.log("state.indexDel : ", state.indexDel);
    },
  },
});

export const { clickBox } = checkBoxSlice.actions;
export default checkBoxSlice.reducer;
