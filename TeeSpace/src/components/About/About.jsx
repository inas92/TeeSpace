//import React from 'react'
import "./About.css";
import {symbol1,symbol2,symbol3,symbol4} from "../../assets/index.js"; 
const About = () => {
  return (
    <div className="About-container">
      <div className="About-left">
        <div className="text-box">
          <p className="textbox-head">Design your next favorite custom shirt</p>
          <div className="iconbar">
            <img src={symbol1} alt="icon" />
            <img src={symbol2} alt="icon" className="symbol"/>
            <img src={symbol3} alt="icon" className="symbol"/>
            <img src={symbol4} alt="icon" className="symbol"/>
          </div>
        </div>
      </div>

      <div className="address1">
        <p className="addresstext">Get in touch</p>
        <p className="emailaddress">hello@teespace.io</p>
        <p className="number">+02 036 038 3996</p>
        <p className="emailaddress">3665 Paseo Place, Suite 0960 San Diego</p>
      </div>
      <div className="address2">
        <p className="addresstext">Infomation</p>

        <div className="abox">
          <a href="#" className="abouttext">
            About Us
          </a>
          <a href="#" className="abouttext">
            Our Blog
          </a>
          <a href="#" className="abouttext">
            Start a Return
          </a>
          <a href="#" className="abouttext">
            Contact Us
          </a>
          <a href="#" className="abouttext">
            Shipping FAQ
          </a>
        </div>
      </div>
      <div className="address3">
        <p className="addresstext">Useful Links</p>
        <div className="abox">
          <a href="#" className="abouttext">
            My Account
          </a>
          <a href="#" className="abouttext">
            Shipping
          </a>
          <a href="#" className="abouttext">
            Contact & Support
          </a>
          <a href="#" className="abouttext">
            All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
