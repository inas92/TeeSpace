//import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFire } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 
//import { fire } from '../../assets';

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navbarwrapper">
      <div className="left-containernav">
        <div className="nav-item">
          Home <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
        </div>
        <div className="nav-item">
          TeeSpace <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
        </div>
        <div className="nav-item">
          Shop <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
        </div>
        <div className="nav-item">
          Blog <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
        </div>
        <div className="nav-item">
          Pages <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
        </div>
      </div>
      <div className="right-containernav">
        <div className='fire'> <FontAwesomeIcon icon={faFire}/> </div>
        <p className="hot-sale-text">Extra   </p>
        <p className='sale'>  sale 30%</p>
        <p className='hot-sale-text'>off</p>
      </div>
    </div>
    </div>
  );
};

export default Navbar;