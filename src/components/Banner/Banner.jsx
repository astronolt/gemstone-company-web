import React from 'react';
import { Link } from "react-router-dom";
import { banner1 } from "../../assets";
import { shop } from "../../constants";

const Header = () => {


  return (
      <div className="bg-black bg-center bg-no-repeat md:py-[70px] sm:py-[40px] h-[40vh] text-center font-[400]"
         style={{
            backgroundImage: `url(${banner1})`,
         }}>
         <h1> About Us</h1>
         <div className="w-[400px] flex justify-center items-center flex-wrap m-auto h-full">
            Initially incorporated as a mining company in 1974, we have been
            involved in all facets of the colored gemstone trade in our many
            years active in the industry.
         </div>
      </div>

  )
}

export default Header