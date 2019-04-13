import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import bulbOn from "./assets/bulb.png";
import off from "./assets/off.jpg";
import LED from "./assets/LED.jpg";
import LEDoff from "./assets/ledOff.jpg";
import ScrollMenu from "react-horizontal-scrolling-menu";
import fanOn from "./assets/openfan.jpeg";
import closedFan from "./assets/closedFan.jpeg";
import light3 from "./assets/light3.jpeg";
import light3Off from "./assets/light3Off.jpeg";
import fan1 from "./assets/fan1.jpg";
import fan1Off from "./assets/fan1Off.jpg";
import lampOff from "./assets/lampOff.jpg";
import LampOn from "./assets/LampOn.jpg";
import "./styles.css";
const list = [
  "Dinning Room",
  "M.Bedroom",
  "M.Washroom",
  "Living Room",
  "Room4"
];
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el, key) => {
    return <MenuItem text={el} key={key} selected={selected} />;
  });
const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });
const selected = "M.Bedroom";
class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
  state = {
    open1: true,
    open2: true,
    open3: true,
    open4: true,
    open5: true,
    open6:true,
  };
  toggleImage1 = () => {
    this.setState(state => ({ open1: !state.open1 }));
  };
  toggleImage2 = () => {
    this.setState(state => ({ open2: !state.open2 }));
  };
  toggleImage3 = () => {
    this.setState(state => ({ open3: !state.open3 }));
  };
  toggleImage4 = () => {
    this.setState(state => ({ open4: !state.open4 }));
  };
  toggleImage5 = () => {
    this.setState(state => ({ open5: !state.open5 }));
  };
  toggleImage6=()=>
  {
    this.setState(state=>({open6:!state.open6}));
  }
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
    return (
      <div className="App">
        <Toolbar roomList={list} />
        <main className="space" />
        <div className="grid-container">
          <div className="grid-item">
            <img
              className="i"
              src={this.state.open1 ? bulbOn : off}
              onClick={this.toggleImage1}
              alt="bulb"
            />
            <div className={this.state.open1 ? "green" : "grey"}>
              Main Light
            </div>
            <div className={this.state.open1 ? "line" : "greyLine"} />
          </div>
          <div className="grid-item">
            <img
              className="i"
              src={this.state.open2 ? LED : LEDoff}
              onClick={this.toggleImage2}
              alt="bulb"
            />
            <div className={this.state.open2 ? "green" : "grey"}>Light2</div>

            <div className={this.state.open2 ? "line" : "greyLine"} />
          </div>
          <div className="grid-item">
            {" "}
            <img
              className="i"
              src={this.state.open3 ? fanOn : closedFan}
              onClick={this.toggleImage3}
              alt="bulb"
            />
            <div className={this.state.open3 ? "green" : "grey"}>Fan 1</div>
            <div className={this.state.open3 ? "line" : "greyLine"} />
          </div>
          <div className="grid-item">
            <img
              className="i"
              src={this.state.open4 ? light3 : light3Off}
              onClick={this.toggleImage4}
              alt="bulb"
            />
            <div className={this.state.open4 ? "green" : "grey"}>Light 3</div>

            <div className={this.state.open4 ? "line" : "greyLine"} />
          </div>
          <div className="grid-item">
          
            <img
              className="i"
              src={this.state.open5 ? fan1 : fan1Off}
              onClick={this.toggleImage5}
              alt="bulb"
            />
            <div className={this.state.open5 ? "green" : "grey"}>Light 3</div>
            <div className={this.state.open5 ? "line" : "greyLine"} />
          </div>
          <div className="grid-item"> <img
              className="i"
              src={this.state.open6 ? LampOn : lampOff}
              onClick={this.toggleImage6}
              alt="bulb"
            />
            <div className={this.state.open6 ? "green" : "grey"}>Light 4</div>
            <div className={this.state.open6 ? "line" : "greyLine"} /></div>
        </div>
        <div>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>
      </div>
    );
  }
}
export default App;
