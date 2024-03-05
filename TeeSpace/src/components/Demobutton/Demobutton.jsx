//import React from 'react'
import './Demobutton.css';
// eslint-disable-next-line react/prop-types
const Demobutton = ({text }) => {
  return (
    <>
    <button className="demo-btn">
        <span className="button-text" > {text}</span>
    </button>
    </>
  )
}

export default Demobutton