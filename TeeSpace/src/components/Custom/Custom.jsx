//import React from 'react'
import { custom } from "../../assets";
import "./Custom.css";
const Custom = () => {
  return (
    <div className="custom-wrapper">
      <div className="custom-header">
        <h2>How to design and order custom T-shirts</h2>
      </div>
      <div className="custombody">
        <div className="custom-left">
          <div className="first-custom">
            <div className="one">
              <div className="custom-one">1</div>
              <div className="dash"></div>
            </div>
            <p className="custom-text">
              Choose from 412 custom products in our catalog
            </p>
          </div>
          <div className="first-custom">
            <div className="one">
              <div className="custom-two">2</div>
              <div className="dash"></div>
            </div>
            <p className="custom-text">
              Customize your design with graphics, text or your own uploaded
              images.
            </p>
          </div>
          <div className="first-custom">
            <div className="custom-two">3</div>

            <p className="custom-text">
              Get your order sent to your door with free standard shipping.
            </p>
          </div>
        </div>
        <div className="custom-right">
          <img className="customimage" src={custom} alt="customimage" />
        </div>
      </div>
    </div>
  );
};

export default Custom;
