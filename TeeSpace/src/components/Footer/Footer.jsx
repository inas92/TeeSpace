//import React from 'react'
import "./Footer.css";
import {footer} from "../../assets/index.js"
const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="left-footer">
            <p className="copy">© 2022 TeeSpace</p>
            <div className="copy-row">
            <p className="copy1">Terms & Conditions</p>
            <div className="footer-line"></div>
            <p className="copy1">Privacy Policy</p>
            </div>
        </div>
        <div className="right-footer">
            <img src={footer} alt="payment" />
        </div>
    </div>
  )
}

export default Footer