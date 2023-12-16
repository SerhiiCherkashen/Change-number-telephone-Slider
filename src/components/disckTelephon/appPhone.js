// src/App.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import DialPhone from "./components/DialPhone";
// import { dial, clearNumber } from "./features/phone/phoneSlice";
import DialPhone from "./dialPhone";
import { clearNumber, dial } from "./dialPhoneSlice";

function AppPhone() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.dialPhoneReducer.number);

  const handleDial = (digit) => {
    dispatch(dial(digit));
  };

  const handleClear = () => {
    dispatch(clearNumber());
  };

  return (
    <div className="App">
      <h1>--- AppPhone ---</h1>
      <DialPhone number={number} onDial={handleDial} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default AppPhone;
