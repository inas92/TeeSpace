//import React from 'react'
import "./SearchBar.css";
import { vector4,vector5,vector6 ,vector7} from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {


  
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
             
            <img src={vector7} alt="icon" />
            </div>

            <div className="hotline-container">
              <div className="hotflex">
              <p className="hotlinetext">Hotline:</p>
              <p className="hotline-number">19008188</p>
              </div>
           
              <p className="pick">pickup your order for free</p>
            </div>
          </div>
          <div className="icon-div">
            <div className="icon-container">
            <img src={vector4} alt="icon" />
              
            </div>
            <div className="icon-container">
            <img src={vector5} alt="icon" />
             
           
              <sup className="supclass">2</sup>
            
            </div>
            <div className="icon-container">
            <img src={vector6} alt="icon" />
           
              <sup className="supclass">3</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
