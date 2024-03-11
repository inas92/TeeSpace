//import React from 'react'
import "./OnlineSites.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import { site1 ,site2, site3,site4,site5,site6,site7,site8} from "../../assets/index.js";
const OnlineSites = () => {
    const sites=[
        {src:site1},{src:site2},{src:site3},{src:site4},{src:site5},{src:site6},{src:site7},{src:site8}
    ]
  return (
    <div className="site-wrapper">
        <div className="leftsite">
            <h2 className="sitehead">We integrate with</h2>
            <button className="sitebutton">
            And More <FontAwesomeIcon icon={faArrowRight} />{" "}
          </button>
        </div>
        <div className="rightlogosite">
            <div className="logo-grid">
            {sites.map(( app , index ) => (
        <div key={index} className="grid-item">
          <img src={app.src} alt="logoimage" />
        </div>
      ))}
            
            </div>
         </div>
    </div>
  )
}

export default OnlineSites