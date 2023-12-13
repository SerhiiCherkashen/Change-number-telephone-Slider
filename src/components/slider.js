// import React from "react";

// const Slider = () => {
//   // this.slider = document.getElementById("myRange");
//   // output = document.getElementById("demo");
//   // innerHTML = slider.value; // Display the default slider value

//   // // Update the current slider value (each time you drag the slider handle)
//   // oninput = function () {
//   //   output.innerHTML = this.value;
//   // };
//   return (
//     <div>
//       <div>
//         <h1>Slider</h1>
//         <div class="slidecontainer">
//           <input
//             type="range"
//             min="1"
//             max="100"
//             value="50"
//             class="slider"
//             id="myRange"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React, { useState } from "react";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <h1>Slider</h1>
      <p>Value: {sliderValue}</p>
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
