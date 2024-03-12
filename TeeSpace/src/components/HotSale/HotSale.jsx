//import React from 'react'
import "./HotSale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import { hot1, hot2, hot3, arrival4 } from "../../assets";
const HotSale = () => {
  const Saleimages = [
    {
      src: hot1,
      name: "Adult Quantity Tee",
      price: "$26.00 – $29.00",
      discountLabel: "Sale!",
      newLabel: "New",
    },
    {
      src: hot2,
      name: "All-Over-Print Hoodie",
      price: "$26.00 – $29.00",
      discountLabel: "Sale!",
      newLabel: "New",
    },
    {
      src: hot3,
      name: "AOP Cut & Sew Tee",
      price: "$26.00 – $29.00",
      discountLabel: "Sale!",
      newLabel: "New",
    },
    {
      src: arrival4,
      name: "Fine Jersey Tee",
      oldPrice: "$31.00",
      newPrice: "$28.00",
      isHot: true,
      discountLabel: "-10%",
    },
  ];
  return (
    <div className="Hotwrapper">
      <div className="Hotheading">
        <div className="leftheadhot">
          <p className="hot-text">Hot under $39</p>
        </div>
        <div className="rightheadhot">
          <button className="salesbutton">
            View All <FontAwesomeIcon icon={faArrowRight} />{" "}
          </button>
        </div>
      </div>

      <div className="hotimagerow">
        {Saleimages.map((saleid, index) => (
          <div key={index}>
            {saleid.discountLabel && (
              <div className="discount-label">{saleid.discountLabel}</div>
            )}
            {saleid.newLabel && (
              <div className="new-label">{saleid.newLabel}</div>
            )}
            {saleid.isHot && (
              <div
                className={`new-label ${
                  saleid.discountLabel ? "hot-label-withdiscount" : ""
                }`}
              >
                Hot
              </div>
            )}
            <img src={saleid.src} alt={saleid.name} className="arrivalimage" />
            <div className="image-details">
              <h3 className="arrivalimage-name">{saleid.name}</h3>
              <div className="price">
                <p
                  className={`arrivalimage-price ${
                    saleid.oldPrice ? "newPrice" : ""
                  }`}
                >
                  {saleid.newPrice ? saleid.newPrice : saleid.price}
                </p>
                {saleid.oldPrice && (
                  <p className="oldPrice">{saleid.oldPrice}</p>
                )}
            
              </div>
              {index < 3 && (
              <div className="color-row">
                <div className="color-samplewrap">
                  <div className="color-sample1"></div>
                </div>
                <div className="color-samplewrap">
                  <div className="color-sample2"></div>
                </div>
                <p className="three">+3</p>
              </div>
  )}
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="prevButton"></button>
        <button className="nextButton"></button>
      </div>
    </div>
  );
};

export default HotSale;
