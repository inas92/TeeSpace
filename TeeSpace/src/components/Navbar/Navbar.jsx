//import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-container">
        <div className="nav-item">
          Home <FontAwesomeIcon icon={faCaretRight} className="dropdown-icon" />
        </div>
        <div className="nav-item">
          TeeSpace <FontAwesomeIcon icon={faCaretRight} className="dropdown-icon" />
        </div>
        <div className="nav-item">
          Shop <FontAwesomeIcon icon={faCaretRight} className="dropdown-icon" />
        </div>
        <div className="nav-item">
          Blog <FontAwesomeIcon icon={faCaretRight} className="dropdown-icon" />
        </div>
        <div className="nav-item">
          Pages <FontAwesomeIcon icon={faCaretRight} className="dropdown-icon" />
        </div>
      </div>
      <div className="right-container">
        <img src="" alt="" />
        <p className="hot-sale-text">Hot Sale</p>
      </div>
    </div>
  );
};

export default Navbar;