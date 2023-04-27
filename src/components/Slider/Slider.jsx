import { spinners1, spinners2, spinners3 } from "../../assets";

// Import Swiper Modeules, styles
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";

import './Slider.scss'

export default () => {
  return (
    <div className="swiperHolder">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //onSlideChange={() => console.log('slide change')}
        //onSwiper={(swiper) => console.log(swiper)}
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
    </div>
  );
};