//import React from 'react'
import './Demobutton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line react/prop-types
const Demobutton = ({text }) => {
  return (
    <>
    <button className="demo-btn">
        <span className="button-text" > {text} <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></span>
    </button>
    </>
  )
}



export default Demobutton