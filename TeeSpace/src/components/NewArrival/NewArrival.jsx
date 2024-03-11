//import React from 'react'
import "./NewArrival.css";
import { arrival1, arrival2, arrival3, arrival4 } from "../../assets";
const NewArrival = () => {
  const imagesData = [
    { src: arrival1, name: "Zone Sweatshirt", price: "$19.95 – $159.95" },
    { src: arrival2, name: "Zoo Men’s t-shirt", price: "$14.95 – $119.95" },
    { src: arrival3, name: "Toddler T-shirt", price: "$26.00", isHot: true },
    {
      src: arrival4,
      name: "Fine Jersey Tee",
      oldPrice: "$30.00",
      newPrice: "$28.00",
      discountLabel: "-10%",
      isHot: true,
    },
  ];
  return (
    <div className="arrival-wrapper">
      <div className="arrival-header">
        <p className="new">New Arrivals</p>
        <p className="salearrival">Best Seller</p>
        <p className="salearrival">Sale</p>
      </div>
      <div className="arrival-container">
        {imagesData.map((image, index) => (
          <div key={index}>
            {image.discountLabel && (
              <div className="discount-label">{image.discountLabel}</div>
            )}

            {image.isHot && (
              <div
                className={`hot-label ${
                  image.discountLabel ? "hot-label-with-discount" : ""
                }`}
              >
                Hot
              </div>
            )}

            <img src={image.src} alt={image.name} className="arrivalimage" />
            <div className="image-details">
              <h3 className="arrivalimage-name">{image.name}</h3>
              <div className="price">
                <p
                  className={`arrivalimage-price ${
                    image.oldPrice ? "newPrice" : ""
                  }`}
                >
                  {image.newPrice ? image.newPrice : image.price}
                </p>
                {image.oldPrice && <p className="oldPrice">{image.oldPrice}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;

//  <p className="arrivalimage-price">{image.price}</p>
//{image.isHot && image.oldPrice && <div className="hot-label1">Hot</div>}
