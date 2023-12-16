import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./checkBox.css";
import { clickBox } from "./checkBoxSlice.js";

const CheckBox = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.checkBoxReducer);

  const map1 = new Map([
    [
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "7",
        "8",
        "11",
        "12",
        "15",
        "16",
        "19",
        "20",
        "23",
        "24",
        "25",
        "26",
        "27",
      ],
      0,
    ],
    [["2", "3", "5", "7", "8", "11", "15", "19", "23", "27"], 1],
    [["3", "6", "7", "9", "11", "12", "15", "19", "23", "27"], 1],
    [[3, 7, 11, 15, 19, 23, 27], 1],
    [
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "7",
        "8",
        "11",
        "15",
        "18",
        "21",
        "24",
        "25",
        "26",
        "27",
      ],
      2,
    ],
    [
      ["1", "2", "4", "7", "8", "11", "15", "18", "21", "24", "25", "26", "27"],
      2,
    ],
    [["1", "2", "4", "7", "11", "15", "18", "21", "24", "25", "26", "27"], 2],
    [[0, 1, 2, 3, 6, 9, 12, 13, 14, 15, 19, 23, 24, 25, 26, 27], 3],
    [[0, 1, 2, 3, 7, 11, 12, 13, 14, 15, 19, 23, 24, 25, 26, 27], 3],
    [["3", "6", "9", "11", "12", "13", "14", "15", "19", "23", "27"], 4],
    [
      ["0", "3", "4", "7", "8", "11", "12", "13", "14", "15", "19", "23", "27"],
      4,
    ],
    [
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "8",
        "12",
        "13",
        "14",
        "19",
        "23",
        "24",
        "25",
        "26",
      ],
      5,
    ],
    [
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "8",
        "12",
        "13",
        "14",
        "15",
        "19",
        "23",
        "24",
        "25",
        "26",
        "27",
      ],
      5,
    ],
    [
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "8",
        "12",
        "13",
        "14",
        "15",
        "16",
        "19",
        "20",
        "23",
        "24",
        "25",
        "26",
        "27",
      ],
      6,
    ],
    [[3, 6, 9, 12, 13, 14, 15, 16, 19, 20, 23, 24, 25, 26, 27], 6],
    [[0, 1, 2, 3, 7, 11, 15, 19, 23, 27], 7],

    [
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "7",
        "8",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "19",
        "20",
        "23",
        "24",
        "25",
        "26",
        "27",
      ],
      8,
    ],
    [
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "7",
        "8",
        "11",
        "12",
        "13",
        "14",
        "15",
        "18",
        "21",
        "24",
      ],
      9,
    ],
    [
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "7",
        "8",
        "11",
        "12",
        "13",
        "14",
        "15",
        "19",
        "23",
        "24",
        "25",
        "26",
        "27",
      ],
      9,
    ],
    [
      [
        "0",
        "1",
        "2",
        "3",
        "4",
        "7",
        "8",
        "11",
        "12",
        "13",
        "14",
        "15",
        "19",
        "23",
        "24",
        "25",
        "26",
        "27",
      ],
      9,
    ],
  ]);

  // console.log("map1 .keys() : ", map1.keys());
  // const doublArr = state.firstMNBox.sort((a, b) => a - b);
  // console.log("state.firstMNBox)???: ", state.firstMNBox); //true [1,2,3,6,9]

  const fnMapID = (store) => {
    // console.log("1) store : ", store);
    // console.log("2) fnMapID start");
    return Array.from(map1.keys()).find((el) => {
      // console.log("2) fnMapID el :", el);
      if (store.length !== 0) {
        // console.log(
        //   " 3)  true / false ???",
        //   store.every((value, index) => +value === el[index])
        // );
        return (
          store.every((value, index) => +value === +el[index]) &&
          store.length === el.length
        );
      }
    });
  };

  return (
    <div>
      <div className="arraysNumberAfterMap">
        {state.arraysForNumbers.map((iter) => {
          return (
            <div className="oneNumberAfterMap">
              {fnMapID(iter) ? <h1>{map1.get(fnMapID(iter))} </h1> : <h1>-</h1>}
            </div>
          );
        })}
      </div>
      <div className="wrapperBoxes">
        {state.telNumbersArray.map((el, inx) => {
          return (
            <div className="oneNumber">
              {state.arrayObj.map((em, index) => {
                return (
                  <input
                    // checked
                    value={inx}
                    id={index}
                    type="checkbox"
                    onClick={(e) => dispatch(clickBox(e))}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBox;
{
  /* {fnMapID(state.arraysForNumbers[0]) ? (
          <h1>{map1.get(fnMapID(state.arraysForNumbers[0]))} </h1>
        ) : (
          <h1>""</h1>
        )} */
}
// const array1 = [3, 7, 1];
// const array2 = [3, 7];
// const array3 = [1, 2];

// const array1I2 = array1.every((value, index) => value === array2[index]);

// console.log("array1I2 : ", array1, array2, array1I2); // true
