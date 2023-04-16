import { spinners1, spinners2, spinners3 } from "../../assets";

// Import Swiper Modeules, styles
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './Slider.scss'

export default () => {
   return (

      <Swiper
         modules={[Autoplay]}
         spaceBetween={30}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
         className="mySwiper"
      >
         <SwiperSlide>
            <img src={spinners1} alt="" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={spinners2} alt="" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={spinners3} alt="" />
         </SwiperSlide>
      </Swiper>
   );
};