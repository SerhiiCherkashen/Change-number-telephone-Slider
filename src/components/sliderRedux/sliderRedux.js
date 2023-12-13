import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "./sliderSlice";
import "./sliderRedux.css";

const SliderRedux = () => {
  const dispatch = useDispatch();
  const min = useSelector((state) => state.sliderReducer.minValue);
  const max = useSelector((state) => state.sliderReducer.maxValue);
  const current = useSelector((state) => state.sliderReducer.currentValue);
  return (
    <div className="wr">
      <h1>--- SliderRedux ---</h1>
      <div>
        <h1 className="hhh">{current}</h1>
        <input
          className="slider"
          type="range"
          min={min}
          max={max}
          value={current}
          onChange={(e) => dispatch(changeValue(e))}
        />
      </div>
    </div>
  );
};

export default SliderRedux;
