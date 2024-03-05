//import React from 'react'
import Demobutton from "../Demobutton/Demobutton.jsx";
import "./Intro.css";
import { Service1 ,Service2 ,Service3, Service4 } from "../../assets/index.js";
const Intro = () => {
  return (
    <div className="Introwrapper">
      <div className="leftintro">
        <p className="first"> Lets configure you own print product</p>
        <p className="second">The easiest way to get your print as you want</p>
        <div className="btnwrap">
          <Demobutton text="Print Your Own" />
        </div>
      </div>
      <div className="rightintro">
        <div className="grid-container">
          <div className="grid-item column1">
            <img src={Service1} alt="Image 1" />
            <img src={Service2} alt="Image 2" />
          </div>
          <div className="grid-item column2">
            <img src={Service3} alt="Image 3" />
            <img src={Service4} alt="Image 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
