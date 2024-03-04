//import React from 'react'
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faStar, faPhone ,faSearch} from '@fortawesome/free-solid-svg-icons';
import {logo} from '../../assets/index'; 
const SearchBar = () => {
  return (
    <div className="searchwrapper">
    <div className="left-section">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="center-section">
    <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input type="text" placeholder="What are you looking for?" className="search-bar" />
      <button className="search-button">Search</button>
    </div>
    <div className="right-section">
      <div className="hotline-container">
        <FontAwesomeIcon icon={faPhone} className="phone-icon" />
        <span className="hotline-number">1-800-123-4567</span>
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
  )
}

export default SearchBar