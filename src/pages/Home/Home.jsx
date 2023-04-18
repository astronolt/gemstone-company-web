import React from 'react';
import Slider from '../../components/Slider/Slider';
import Story from '../../components/Story/Story';
import Categories from '../../components/Categories/Categories';
//import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
// import Hero from "../../components/Hero/Hero";
// import Contact from '../../components/Contact/Contact';

import "./Home.scss";


const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Story />
      <Categories />
      
      {/* 
      <FeaturedProducts type="featured" />
      <Hero/>
      <FeaturedProducts type="trending" />
      <Contact/>
      */}
    </div>
  )
}

export default Home