//import React from 'react'
//import Demobutton from "../Demobutton/Demobutton.jsx";
import "./Intro.css";
import { Service1 ,Service2 ,Service3, Service4,arrow ,arrow2, arrow3, polygon} from "../../assets/index.js";
const Intro = () => {
  return (
    <div className="Introwrapper">
      <div className="leftintro">
        <p className="first"> Lets configure you own print product</p>
        <img className="arrow3" src={arrow3} alt="arrow3" />
        <img className="arrow2" src={arrow2} alt="arrow2" />
        <img className="arrow" src={arrow} alt="arrow" />
        
        <p className="second">The easiest way to get your print as you want</p>
        
        <div className="btnwrap">
        <button className="btnintro">
        <span className="button-text" > Print Your Own</span>
    </button>
          
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
      <img src={polygon} alt="polygon" className="polygon1" />
      <img src={polygon} alt="polygon" className="polygon2" />
<img src={polygon} alt="polygon" className="polygon3" />
    </div>
  );
};

export default Intro;
