//import React from 'react'
import { hoodie, long, sweater, tanktop, tshirt } from "../../assets";
import "./Explore.css";
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
            <p className="image-name">
              {image.name}
              <sup>{image.number}</sup>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
