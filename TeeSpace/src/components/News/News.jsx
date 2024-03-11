//import React from 'react'
import './News.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
const News = () => {
  return (
    <div className='news-wrapper'>
        <div className='news-head'>
        Get the latest news, events & more
delivered to your inbox.
</div>
<div className='search-email'>
    <input type="text" placeholder='Your email address' className='textholder' />
    <div className='right'>
    <FontAwesomeIcon icon={faArrowRight} /> 
    </div>
</div>
    </div>
  )
}

export default News