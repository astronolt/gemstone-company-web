import React from 'react';
import './Hero.scss';

const Hero = () => {
   return (
      <div className="containers container-custom-two">
         <div className="flex items-center">
            <div className="lg:w-1/2 md:w-1/2">
               <div className="banner-content">
                  <span className="promo-tag fadeInDown" styles="animation-name: fadeInDown; visibility: visible;">
                     Jewelry Design With Love
                  </span>
                  <h1 className="title fadeInLeft" styles="animation-name: fadeInLeft; visibility: visible;">
                     High-End <br />
                     Jewelry Items
                  </h1>
                  <ul>
                     <li>
                        <a className="main-btn btn-filled fadeInUp" styles="animation-name: fadeInUp; visibility: visible;" href="">
                           Buy Now
                        </a>
                     </li>
                     <li>
                        <a className="main-btn btn-border fadeInUp" styles="animation-name: fadeInUp; visibility: visible;" href="">
                           Explore Now
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="relative">
               <div className="flex overflow-x-hidden">
                  <div className="w-full flex-none">
                     <img src="image1.jpg" alt="Image 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full flex-none">
                     <img src="image2.jpg" alt="Image 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full flex-none">
                     <img src="image3.jpg" alt="Image 3" className="w-full h-full object-cover" />
                  </div>
               </div>
               <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white px-4 py-2 rounded-md">
                  Previous
               </button>
               <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white px-4 py-2 rounded-md">
                  Next
               </button>
            </div>

            <div className="col-lg-6 col-md-6 fadeInRight" styles="animation-name: fadeInRight; visibility: visible;">
               <div className="banner-thumb d-none d-md-block">
                  <div className="slick-slider carousel hero-slider-one slick-initialized" dir="ltr">
                     <div className="slick-list"><div className="slick-track" styles="width: 3350px; opacity: 1;"><div data-index="0" className="slick-slide" tabindex="-1" aria-hidden="true" styles="outline: none; width: 670px; position: relative; left: 0px; opacity: 0; transition: opacity 500ms ease 0s, visibility 500ms ease 0s;"><div><div className="single-thumb" tabindex="-1" styles="width: 100%; display: inline-block;"><img src="/themes/themeforest/react/laramiss/static/media/01.0f3c20a9.jpg" alt="images" /></div></div></div><div data-index="1" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" styles="outline: none; width: 670px; position: relative; left: -670px; opacity: 1; transition: opacity 500ms ease 0s, visibility 500ms ease 0s;">
                        <div>
                           <div className="single-thumb" tabindex="-1" styles="width: 100%; display: inline-block;"><img src="/themes/themeforest/react/laramiss/static/media/02.809cb4da.jpg" alt="images" /></div></div></div></div></div></div></div></div></div>
      </div>
   )
}

export default Hero