//import React from 'react'
import './Gallery.css';
import { gallery1,gallery2,gallery3,gallery4,gallery5} from "../../assets/index.js";
   
const Gallery = () => {
    const gallery=[
        {src:gallery1},
        {src:gallery2},
        {src:gallery3},
        {src:gallery4},
        {src:gallery5}
    ]
  return (
    <div className='gallery-wrapper'>
        <div className='gallery-container'>
        {gallery.map((image,index) => (
            <img key={index} src={image.src} alt="imge" className='gallery-image' />
        ))}
            </div>
    </div>
  )
}

export default Gallery