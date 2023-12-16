import { configureStore } from "@reduxjs/toolkit";
import telephoneReducer from "./sliceTelaphone";
import sliderReducer from "../sliderRedux/sliderSlice";
import sliderTOReducer from "../sliderTelephoneOperator/sliceTO";
import moreLessReducer from "../moreLess/moreLessSlice";
import randomTelephoneReducer from "../randomTelephone/randomTSlice";
import checkBoxReducer from "../checkBox/checkBoxSlice";
import dialPhoneReducer from "../disckTelephon/dialPhoneSlice";

export const store = configureStore({
  reducer: {
    telephoneReducer,
    sliderReducer,
    sliderTOReducer,
    moreLessReducer,
    randomTelephoneReducer,
    checkBoxReducer,
    dialPhoneReducer,
  },
});
