import React, { useState } from "react";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <h1> --- Slider --- </h1>
      <h1>Value: {sliderValue}</h1>
      <input
        type="range"
        min="0"
        max="1000
        "
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Slider;
