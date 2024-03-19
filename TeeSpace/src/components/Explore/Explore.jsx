//import React from 'react'
import { hoodie, long, sweater, tanktop, tshirt } from "../../assets";
import "./Explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
//import View from "../View/View.jsx";
import {   Link  } from "react-router-dom";
const Explore = () => {
  const images = [
    { src: tshirt, name: "T-shirts", number: "6" },
    { src: long, name: "Long-sleeves", number: "15" },
    { src: sweater, name: "Sweater", number: "18" },
    { src: hoodie, name: "Hoodies", number: "9" },
    { src: tanktop, name: "Tanktop", number: "6" },
  ];
  return (
    <div className="explore-wrapper">
      <h2 className="heading">Shopping by Categories</h2>
      <div className="image-row">
       
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.src} alt={image.name} className="gallery-image" />
              <Link to="/view" className="image-name">
                {image.name}
                <sup>{image.number}</sup>
              </Link>
            </div>
          ))}
        
      </div>
      <div className="navigationnew">
        <button className="upButton">
          <FontAwesomeIcon icon={faAngleUp} className="caretup" />
        </button>
      </div>
    </div>
  );
};

export default Explore;
