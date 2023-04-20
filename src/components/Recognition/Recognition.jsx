import React from 'react';
import { forbes, lux, lg1, lg2, lg3 } from "../../assets/";

const Recognition = () => {
   return (
      <div className="my-[50px] p-2 bg-black-gradient-1">

         <hr className='md:w-[50%] sm:w-[70%] mx-auto' />

         <div className="my-8 p-2 bg-black-gradient-1 text-center md:flex md:justify-center md:items-center">
            <p className="mb-4 md:mb-0 md:mx-4">FEATURED IN</p>
            <div className="flex justify-center md:justify-start items-center">
               <span className="mx-4">
                  <img src={forbes} alt="Forbes" title="Forbes" className="" />
               </span>
               <span className="mx-4">
                  <img src={lux} alt="Lux" title="Lux" className="" />
               </span>
            </div>
         </div>

         <div class="bg-[#aaa] text-[#222] flex justify-center items-center h-16 space-x-8">
            <div>
               GIA
            </div>
            <div>
               ICA Member
            </div>
         </div>
         <div class="bg-[white] text-[#222] flex justify-center items-center h-16">
            <img src={lg3} alt="" />
            <img src={lg1} alt="" />
         </div>
      </div>
   )
}

export default Recognition