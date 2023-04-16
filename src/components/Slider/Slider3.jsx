import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './react-slideshow-image.scss';
import { spinners1, spinners2, spinners3 } from "../../assets";

const Slider = () => {
   const images = [
      spinners1, spinners2, spinners3
   ];

   return (
      <Slide className='my-[100px]'>
         <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[0]})` }}>

            </div>
         </div>
         <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            </div>
         </div>
         <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            </div>
         </div>
      </Slide>
   );
};

export default Slider;