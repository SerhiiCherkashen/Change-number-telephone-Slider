import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOperator, selectChange } from "./sliceTO";
import "./sliderTO.css";

const SliderTO = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.sliderTOReducer);

  const map1 = new Map([
    [{ min: 0, max: 10 }, "000000"],
    [{ min: 10, max: 100 }, "00000"],
    [{ min: 100, max: 1000 }, "0000"],
    [{ min: 1000, max: 10000 }, "000"],
    [{ min: 10000, max: 100000 }, "00"],
    [{ min: 100000, max: 1000000 }, "0"],
    [{ min: 1000000, max: 10000000 }, ""],
  ]);
  const fnMap1 = (tel) => {
    return Array.from(map1.keys()).find((item) => {
      return tel >= item.min && tel <= item.max;
    });
  };

  return (
    <div>
      <h1> --- Slider Telephone Operator ---</h1>
      <div>
        <div className="wrapperOperator">
          <select
            className="selectSlider"
            onChange={(e) => dispatch(selectChange(e))}>
            {state.codes.map((element) => {
              return (
                <option value={element.codeValue}>{element.nameCode}</option>
              );
            })}
          </select>
          <h1> My Telephone : +38{state.currentCode} </h1>
          {fnMap1(state.current) ? (
            <h1> {map1.get(fnMap1(state.current))} </h1>
          ) : (
            "asd"
          )}
          <h1> {state.current} </h1>
        </div>
        <input
          className="inputTel"
          type="range"
          min={state.min}
          max={state.max}
          value={state.current}
          onChange={(e) => dispatch(changeOperator(e))}
        />
      </div>
    </div>
  );
};

export default SliderTO;
