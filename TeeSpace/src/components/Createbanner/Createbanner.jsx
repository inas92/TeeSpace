//import React from 'react'

import { banner1, banner2 } from "../../assets";
import Demobutton from "../Demobutton/Demobutton";
import "./Createbanner.css";
const Createbanner = () => {
  return (
    <div className="createwrapper">
      <div className="leftchild">
        <div
          className="leftbanner"
          style={{ backgroundImage: `url(${banner1})` }}
        >
        <div className="text1">
            <p className="headcreate">Thousands of free templates</p>
            <p className="textleft">
              Free and easy way to bring your ideas to life
            </p>
            <Demobutton text="Explore More" />
            </div>
        </div>
      </div>
      <div className="rightchild">
        <div
          className="rightbanner"
          style={{ backgroundImage: `url(${banner2})` }}
        >
            <div className="text2">
          <p className="headcreate">Create your unique style</p>
          <p className="textright">
            Free and easy way to create your ideas to life
          </p>
          <Demobutton text="Shop Now"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Createbanner;
