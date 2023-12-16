// src/components/DialPhone.js
import React from "react";
import "./dialPhone.css";

const DialPhone = ({ number, onDial }) => {
  const handleDial = (digit) => {
    onDial(digit);
  };

  return (
    <div className="dial-phone">
      <div className="dial-number">{number}</div>
      <div className="dial-pad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((digit) => (
          <button key={digit} onClick={() => handleDial(digit)}>
            {digit}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DialPhone;
