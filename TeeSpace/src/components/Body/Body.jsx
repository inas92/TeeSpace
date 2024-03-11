//import React from 'react'
//import About from '../About/About'
import Createbanner from '../Createbanner/Createbanner'
import Custom from '../Custom/Custom'
import Explore from '../Explore/Explore'
import Gallery from '../Gallery/Gallery'
import HotSale from '../HotSale/HotSale'
import Intro from '../Intro/Intro'
import NewArrival from '../NewArrival/NewArrival'
import News from '../News/News'
import OnlineSites from '../OnlineSites/OnlineSites'
import Template from '../Template/Template'
import Testimonial from '../Testimonial/Testimonial'
import './Body.css'
const Body = () => {
  return (
    <div className='bodywrapper'>
        <Intro/>
        <Explore/>
        <Createbanner/>
        <NewArrival/>
        <HotSale/>
        <Custom/>
        <Template/>
        <OnlineSites/>
        <Testimonial/>
        <News/>
        <Gallery/>
       
    </div>
  )
}

export default Body