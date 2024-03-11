//import React from 'react'
import './Template.css';
import {template1,template2,template3,template4} from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
const Template = () => {
    const tempimages=[
        { src:template1 , name:"Astronauts" , tag:"85 resources" },
        { src:template2 , name:"Quote that collection"  , tag:"6 resources"},
        { src:template3, name:"Art Styles" , tag:"68 resources"},
        { src:template4 , label1:"+28" , label2:"collections"}
    ]
  return (
    <div className='Template-wrapper'>
        <div className='Template-header'>
            <div className='tempheadleft'>
                <h2>Free design templates</h2>
            </div>
            <div className='tempheadright'>
            <button className="salesbutton">
            View All <FontAwesomeIcon icon={faArrowRight} />
          </button>
            </div>
        </div>
        <div className='template-body'>
            <div className='tempimage-wrapper'>
            {tempimages.map((image, index) => (
          <div key={index} className="tempimage-container">
            <img src={image.src} alt={image.name} className="temp-image" />
            <p className="temp-name">
              {image.name}
            </p>
            <p className='temp-tag'>{image.tag}</p>
            {index > 2 && (
                <div className="templabel">
                <p className='temp1'> {image.label1}</p>
                <p className='temp2'> {image.label2}</p>
                 </div>
              )}
          </div>
          
        ))}
    
            </div>
        </div>

    </div>
  )
}

export default Template