import React from 'react'
//import Hero from "../../components/Hero/Hero";
import Categories from '../../components/Categories/Categories'
// import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider'
import "./Home.scss";


const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      {/* <Hero/> */}
      {/* 
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
      */}
    </div>
  )
}

export default Home