//import React from 'react'
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingBag,
  faStar,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { logo } from "../../assets/index";
const SearchBar = () => {
  return (
    <div className="search">
      <div className="searchwrapper">
        <div className="left-sectionsearch">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="center-section">
          <div className="searchbar">
            <div className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="search-input"
            />
          </div>
          <button className="search-button">Search</button>
        </div>
        <div className="right-sectionsearch">
          <div className="hotline">
          <div className="phone-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>

          <div className="hotline-container">
            <h6 className="hotline-number">Hotline:1-800-123-4567</h6>
            <h6 className="pick">pickup your order for free</h6>
          </div>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faShoppingBag} className="icon" />
            <span className="counter">2</span>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <span className="counter">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
