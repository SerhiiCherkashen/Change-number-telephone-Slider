import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { defClick, lessClick, moreClick } from "./moreLessSlice";

const MoreLess = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.moreLessReducer);

  const moreLessFn = (tel) => {
    return Array.from(mapMoreLess.keys()).find((el) => {
      return tel >= el.min && tel <= el.max;
    });
  };
  const mapMoreLess = new Map([
    [
      {
        min: 0,
        max: 10,
      },
      "00000000",
    ],
    [
      {
        min: 10,
        max: 100,
      },
      "0000000",
    ],
    [
      {
        min: 100,
        max: 1000,
      },
      "000000",
    ],
    [
      {
        min: 1000,
        max: 10000,
      },
      "00000",
    ],
    [
      {
        min: 10000,
        max: 100000,
      },
      "0000",
    ],
    [
      {
        min: 100000,
        max: 1000000,
      },
      "000",
    ],
    [
      {
        min: 1000000,
        max: 10000000,
      },
      "00",
    ],
    [
      {
        min: 10000000,
        max: 100000000,
      },
      "0",
    ],
    [
      {
        min: 100000000,
        max: 999999999,
      },
      "",
    ],
  ]);

  return (
    <div>
      <div className="more less">
        <h1> --- More or Less ---</h1>
        <div className="moreLess">
          <h1>My Telephone : +380</h1>
          <h1>
            {/* {console.log("moreLess.current ??? : ", state.current)}
            {console.log(
              "moreLessFn(moreLess.current) ??? : ",
              moreLessFn(state.current)
            )} */}
            {moreLessFn(state.current)
              ? mapMoreLess.get(moreLessFn(state.current))
              : "asd"}
            {state.current}
          </h1>
        </div>
        <button className="mlButton" onClick={() => dispatch(moreClick())}>
          More
        </button>
        <button className="mlButton" onClick={() => dispatch(lessClick())}>
          Less
        </button>
        <button className="mlButton" onClick={() => dispatch(defClick())}>
          Def
        </button>
      </div>
    </div>
  );
};

export default MoreLess;
