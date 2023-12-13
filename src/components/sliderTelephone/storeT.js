import { configureStore } from "@reduxjs/toolkit";
import telephoneReducer from "./sliceTelaphone";
import sliderReducer from "../sliderRedux/sliderSlice";

export const store = configureStore({
  reducer: {
    telephoneReducer,
    sliderReducer,
  },
});
