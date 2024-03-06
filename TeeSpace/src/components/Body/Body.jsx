//import React from 'react'
import Createbanner from '../Createbanner/Createbanner'
import Explore from '../Explore/Explore'
import Intro from '../Intro/Intro'
import NewArrival from '../NewArrival/NewArrival'
import './Body.css'
const Body = () => {
  return (
    <div className='bodywrapper'>
        <Intro/>
        <Explore/>
        <Createbanner/>
        <NewArrival/>
    </div>
  )
}

export default Body