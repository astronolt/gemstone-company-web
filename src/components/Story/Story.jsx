import React from "react";
import { jewelryStory } from "../../assets";
import { shop } from "../../constants";
//import "./Story.scss";

const FeaturedProducts = ({ type }) => {
   // const { data, loading, error } = useFetch(
   //   `/products?populate=*&[filters][type][$eq]=${type}`
   // );

   return (

      <div className="flex flex-wrap bg-black md:py-[70px] sm:py-[40px] sm:h-[70vh]">
         <div className="w-full bg-right-bottom bg-no-repeat"
            style={{
               backgroundImage: `url(${jewelryStory})`,
            }}>
            <div className="sm:w-[400px] sm:h-full md:w-[650px] lg:w-[850px] px-4 py-8 bg-[#2229] md:bg-[#5559] lg:ml-[10%]">

               <h1 className="text-4xl font-bold mb-4">Our Story</h1>

               <div className="md:flex md:p-4 block">
                  <p className="md:p-4">
                     {shop.name} has been a leading miner and cutter of fine gemstones since 1974. Based at the source of one of the world’s most exciting gem producing areas we are in the enviable position to be able to select out the very best rough crystals as they come out of the mines.
                  </p>

                  <div className="md:p-4 my-7">

                     <h3 className="text-3xl"> Fine Gemstones are our Passion not just our Business. </h3>

                     With almost half a century in the industry, in-house cutting center and master cutters, close connections with mine owners and long experience running colored stone mines, we offer a vertically integrated service from the mine to the end consumer bypassing the established old chain of distribution and its many built in markups. Our extensive network of miners provide us with the opportunity to have first viewing and selection of all new strikes and production from the mines.
                  </div>

               </div>
            </div>

         </div>
      </div>

   );
};

export default FeaturedProducts;
