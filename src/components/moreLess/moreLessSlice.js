import { createSlice } from "@reduxjs/toolkit";

const morelessSlice = createSlice({
  name: "moreLess",
  initialState: {
    min: 0,
    max: 999999999,
    minDuplicates: 0,
    maxDuplicates: 999999999,
    current: 0,
    countClick: 0,
  },
  reducers: {
    moreClick: (state) => {
      state.countClick += 1;

      state.countClick < 2
        ? (state.countClick += 0)
        : (state.min = state.current);
      state.current = Math.round((state.min + state.max) / 2);
    },
    lessClick: (state) => {
      state.countClick += 1;

      state.countClick < 2
        ? (state.countClick += 0)
        : (state.max = state.current);
      state.current = Math.round((state.min + state.max) / 2);
    },
    defClick: (state) => {
      state.min = 0;
      state.max = 999999999;
      state.current = 0;
      state.countClick = 0;
    },
  },
});

export const { moreClick, lessClick, defClick } = morelessSlice.actions;
export default morelessSlice.reducer;
