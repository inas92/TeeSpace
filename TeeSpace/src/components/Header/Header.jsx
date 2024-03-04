//import React from 'react'
import {Navbar, SearchBar} from '../index';
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
    <div className="headerwrapper">
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
            <FontAwesomeIcon icon={faFacebook} className="social1" />
            <FontAwesomeIcon icon={faTwitter} className="social2" />
            <FontAwesomeIcon icon={faInstagram} className="social3" />
          </div>
        </div>
      </div>
      <SearchBar/>
      <Navbar/>
      </div>
    </>
  );
};

export default Header;
