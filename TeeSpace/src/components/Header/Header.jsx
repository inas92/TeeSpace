//import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.css";
const Header = () => {
  return (
    <>
     
    <div className="wrapper">
   
      <div className="socialbar">
        <div className="left-section">
          <span className="location-icon">
           <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          <a href="#" className="find-store-link">
            Find a Store
          </a>
        </div>
        <div className="right-section">
        <FontAwesomeIcon icon={faFacebook} className="social-logo" />
        <FontAwesomeIcon icon={faTwitter} className="social-logo" />
        <FontAwesomeIcon icon={faInstagram} className="social-logo" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
