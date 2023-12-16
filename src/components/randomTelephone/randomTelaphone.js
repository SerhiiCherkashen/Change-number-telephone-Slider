import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateNumber } from "./randomTSlice";
import "./randomTelephone.css";

const RandomTelephone = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.randomTelephoneReducer);

  const map1 = new Map([
    [{ min: 0, max: 10 }, "000000"],
    [{ min: 10, max: 100 }, "00000"],
    [{ min: 100, max: 1000 }, "0000"],
    [{ min: 1000, max: 10000 }, "000"],
    [{ min: 10000, max: 100000 }, "00"],
    [{ min: 100000, max: 1000000 }, "0"],
    [{ min: 1000000, max: 10000000 }, ""],
  ]);

  const fnMap = (tel) => {
    return Array.from(map1.keys()).find((el) => {
      return tel >= el.min && tel <= el.max;
    });
  };

  const map2 = new Map([
    [{ min: 0, max: 10 }, "00"],
    [{ min: 10, max: 100 }, "0"],
    [{ min: 100, max: 1000 }, ""],
  ]);

  const fnMapT = (tel) => {
    return Array.from(map2.keys()).find((el) => {
      return tel >= el.min && tel < el.max;
    });
  };

  return (
    <div>
      <h1> --- RandomTelephone ---</h1>
      <div className="vivodNumber">
        <h1>
          My Telephone :{state.code < 10 ? "+38 (00" : "+38 (0"}
          {state.code}){" "}
          {fnMapT(state.tri) ? map2.get(fnMapT(state.tri)) : "asd"}
          {state.tri}-
          {state.firstTwo < 10 ? "0" + state.firstTwo : state.firstTwo}-
          {state.lastTwo < 10 ? "0" + state.lastTwo : state.lastTwo}
        </h1>

        {/* {fnMap(state.number) ? (
          <h1> {map1.get(fnMap(state.number))} </h1>
        ) : (
          "asd"
        )} */}
        {/* <h1>{state.number}</h1> */}
        <button
          className="buttonRandom"
          onClick={() => dispatch(generateNumber())}>
          More
        </button>
      </div>
    </div>
  );
};

export default RandomTelephone;
