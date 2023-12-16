import logo from "./logo.svg";
import "./App.css";
import Select from "./components/select/select";
import Slider from "./components/sliderUseState/slider";
import SliderRedux from "./components/sliderRedux/sliderRedux";
import SliderTelephone from "./components/sliderTelephoneAll/sliderT";
import SliderTO from "./components/sliderTelephoneOperator/sliderTO";
import MoreLess from "./components/moreLess/moreLess";
import RandomTelephone from "./components/randomTelephone/randomTelaphone";
import CheckBox from "./components/checkBox/checkBox";
import AppPhone from "./components/disckTelephon/appPhone";

function App() {
  return (
    <div className="App">
      <h1>--- Telephone-Numbers ---</h1>
      <Select />
      <hr></hr>
      <Slider />
      <hr></hr>
      <SliderRedux />
      <hr></hr>
      <SliderTelephone />
      <hr></hr>
      <SliderTO />
      <hr></hr>
      <MoreLess />
      <hr></hr>
      <RandomTelephone />
      <hr></hr>
      <CheckBox />
      <hr></hr>
      <AppPhone />
      <hr></hr>
    </div>
  );
}

export default App;
