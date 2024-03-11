//import React from 'react'
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { apple, google, avatar,  testback } from "../../assets";
const Testimonial = () => {
  return (
    <div className="test-wrapper">
      <div className="testimonial-left" style={{ backgroundImage: `url(${testback})` }}>
        <p className="testhead1">Download our app</p>
        <p className="testhead2">Available for iOS and Android</p>
        <div className="download-logo">
          <img src={google} alt="logo" className="logo-class"/>
          <img src={apple} alt="logo" className="logo-class"/>
        </div>
      </div>
      <div className="testimonial-right">
        <h2 className="right-head">Testimonials</h2>
        <p className="summary">
          “For all your printing prerequisites. Offer to make and print their
          pamphlets, business cards, solicitations, and occasion programs.”
        </p>
        <div className="test-detail">
          <div className="avatar">
          <img src={avatar} alt="icon" className="avatarclass" />
          <div className="avatar-div">
            <p className="avatar-name">Eddy M.</p>
            <p className="job">Designer at Lift</p>
          </div>
          </div>
         <div className="caret-wrap">
          <button className="itemcaret">
            <FontAwesomeIcon icon={faAngleLeft} className="caret" />
          </button>
          <button className="itemcaret">
            <FontAwesomeIcon icon={faAngleRight} className="caret" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
