import { isRejectedWithValue } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  change,
  changeOperator,
  defClick,
  lessClick,
  minus,
  moreClick,
  plus,
  selectChange,
} from "./sliceTelaphone";
import "./sliderT.css";

const SliderTelephone = () => {
  const dispatch = useDispatch();
  const min = useSelector((state) => state.telephoneReducer.min);
  const max = useSelector((state) => state.telephoneReducer.max);
  const current = useSelector((state) => state.telephoneReducer.current);
  const operator = useSelector((state) => state.telephoneReducer.operator);
  const moreLess = useSelector((state) => state.telephoneReducer.moreLess);

  const mapTelephone = new Map([
    [
      {
        min: 0,
        max: 10,
      },
      "000000000",
    ],
    [
      {
        min: 10,
        max: 100,
      },
      "00000000",
    ],
    [
      {
        min: 100,
        max: 1000,
      },
      "0000000",
    ],
    [
      {
        min: 1000,
        max: 10000,
      },
      "000000",
    ],
    [
      {
        min: 10000,
        max: 100000,
      },
      "00000",
    ],
    [
      {
        min: 100000,
        max: 1000000,
      },
      "0000",
    ],
    [
      {
        min: 1000000,
        max: 10000000,
      },
      "000",
    ],
    [
      {
        min: 10000000,
        max: 100000000,
      },
      "00",
    ],
    [
      {
        min: 100000000,
        max: 1000000000,
      },
      "0",
    ],
    [
      {
        min: 1000000000,
        max: 9999999999,
      },
      "",
    ],
  ]);

  const telFn = (tel) => {
    return Array.from(mapTelephone.keys()).find((num) => {
      return tel >= num.min && tel < num.max;
    });
  };

  const map1 = new Map();
  const mapWeather = new Map([
    [
      { min: 800, max: 800 },
      { src: "sun", alt: "Clear Sky" },
    ],
    [
      { min: 801, max: 804 },
      { src: "clouds", alt: "Clouds" },
    ],
    [
      { min: 700, max: 799 },
      { src: "mist", alt: "Mist" },
    ],
    [
      { min: 600, max: 699 },
      { src: "snow", alt: "Snow" },
    ],
    [
      { min: 500, max: 599 },
      { src: "rain", alt: "Rain" },
    ],
    [
      { min: 200, max: 499 },
      { src: "thunderstorm", alt: "Thunderstorm" },
    ],
  ]);

  const wetherID = 566;
  // console.log("mapWeather : ", mapWeather);
  //   console.log("mapWeather.keys() : ", mapWeather.keys());
  //   console.log("mapWeather.keys(min > 700) : ", mapWeather.keys("min" > 700));
  //   console.log("Array.from (mapWeather): ", Array.from(mapWeather));
  //   console.log(
  //     "Array.from (mapWeather.keys()): ",
  //     Array.from(mapWeather.keys())
  //   );
  //   Array.from (mapWeather.keys()).find :
  const ArrFromFind = Array.from(mapWeather.keys()).find((range) => {
    return wetherID >= range.min && wetherID <= range.max;
  });
  //   ArrFromFind ? mapWeather.get(ArrFromFind).alt : "SASS";
  // console.log("ArrFromFind :", ArrFromFind);

  //   map1.set("a", 1);
  //   map1.set("b", 2);
  //   map1.set("c", 3);
  //   console.log(map1);
  //   console.log(map1.keys());
  //   console.log(map1.get("a"));
  //   console.log(map1[0]);
  //   console.log(map);

  // const mapOperatorTel = new Map([
  //   [
  //     {
  //       min: 0,
  //       max: 10,
  //     },
  //     "000000",
  //   ],
  //   [
  //     {
  //       min: 10,
  //       max: 100,
  //     },
  //     "00000",
  //   ],
  //   [
  //     {
  //       min: 100,
  //       max: 1000,
  //     },
  //     "0000",
  //   ],
  //   [
  //     {
  //       min: 1000,
  //       max: 10000,
  //     },
  //     "000",
  //   ],
  //   [
  //     {
  //       min: 10000,
  //       max: 100000,
  //     },
  //     "00",
  //   ],
  //   [
  //     {
  //       min: 100000,
  //       max: 1000000,
  //     },
  //     "0",
  //   ],
  //   [
  //     {
  //       min: 1000000,
  //       max: 99999999,
  //     },
  //     "",
  //   ],
  // ]);

  const mapOperatorTel = new Map([
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
        max: 1000000000,
      },
      "",
    ],
  ]);

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

  // console.log("mapMoreLess.get(0) : ", mapMoreLess.get(moreLessFn(0)));

  const operatorTelFn = (tel) => {
    return Array.from(mapOperatorTel.keys()).find((el) => {
      return tel >= el.min && tel <= el.max;
    });
  };
  // console.log("??? : ", telFn(current));
  // console.log("??? : ", mapTelephone.get(telFn(current)));
  // console.log("??? {}: ", mapTelephone.get({ min: 0, max: 10 }));
  // console.log("fn : ", operatorTelFn(1));
  // console.log(
  //   "mapOperatorTel.get(operatorTelFn(1) : ",
  //   mapOperatorTel.get(operatorTelFn(1))
  // );
  // console.log("fn : ", mapOperatorTel.keys());
  return (
    <div>
      <h1>--- SliderTelephone All ---</h1>
      <div>
        {/* {ArrFromFind ? <h1>{mapWeather.get(ArrFromFind).alt}</h1> : "SASS"} */}
        <h1>
          My Telephone +38
          {telFn(current) ? mapTelephone.get(telFn(current)) : "000000000"}
          {current}
        </h1>
      </div>
      <div>
        <input
          className="inputTel"
          type="range"
          min={min}
          max={max}
          value={current}
          onChange={(e) => dispatch(change(e))}
        />
        <button onClick={() => dispatch(minus())}> - </button>
        <button onClick={() => dispatch(plus())}> + </button>
      </div>
    </div>
  );
};

export default SliderTelephone;
