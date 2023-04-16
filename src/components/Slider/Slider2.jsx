import { Swiper, SwiperSlide } from 'swiper/react';
import { spinners1, spinners2, spinners3 } from "../../assets";

// Import Swiper styles
import 'swiper/css';

export default () => {
   return (
      <div>

         <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
         >
            <SwiperSlide>
               <img style={{width: "100vw", maxWidth:"100vw"}} src={spinners1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img style={{width: "100vw", maxWidth:"100vw"}} src={spinners2} alt="" />
            </SwiperSlide>
            <SwiperSlide style={{width: "100vw"}}>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
         </Swiper>
      </div>
   );
};