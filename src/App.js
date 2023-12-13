import logo from "./logo.svg";
import "./App.css";
import Select from "./components/select";
import Slider from "./components/slider";
import SliderRedux from "./components/sliderRedux/sliderRedux";
import SliderTelephone from "./components/sliderTelephone/sliderT";

function App() {
  return (
    <div className="App">
      <h1>--- Telefone-Numbers ---</h1>
      <Select />
      <Slider />
      <SliderRedux />
      <SliderTelephone />
    </div>
  );
}

export default App;
