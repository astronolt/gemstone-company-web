import React from 'react';
import Banner from '../../components/Banner/Banner';
import { shop } from "../../constants";
import {
   miners, handGem
} from "../../assets";

const WhyUs = () => {

   const shopCreatedYear = shop.year;
   const shopCurrentYear = new Date().getFullYear() - shop.year;

   const bannerBody = `We began in this industry in ${shopCreatedYear}. For over ${shopCurrentYear} years we have built our company on a strong foundation of superior trust and ethics. We take great pride in our reputation and offer only the highest quality gemstones and jewelry.`;

   return (

      <div className='bg-white text-black'>
         <Banner
            header="Why Choose Us"
            body={bannerBody} />

         <div className="flex flex-wrap md:flex-nowrap justify-center items-center min-h-[300px] m-auto md:w-5/6 md:text-2xl my-4">

            <div className="w-full md:w-1/2 p-4 text-center">
               <h1 className="md:text-2xl font-bold">
                  From Mine to Market
                  <hr />
               </h1>
               <p className='p-2'>
                  We buy rough rare gemstones directly from small-scale miners all over the region. We have developed close relationships with these miners over decades. We then cut the material right here in our lapidary factory.

                  There is no middleman; our gemstones come from the ground direct to you!
               </p>
            </div>

            <div className="w-full md:w-1/2 p-4 text-center">
               <img src={miners} className="w-full h-full sm:max-w-[400px] md:max-w-full object-cover m-auto" alt="your-alt-text" />
            </div>
         </div>

         <div className="flex flex-wrap md:flex-nowrap justify-center items-center min-h-[300px] m-auto md:w-5/6 md:text-2xl my-4">

            <div className="w-full md:w-1/2 p-4 text-center">
               <img src={handGem} className="w-full h-full sm:max-w-[400px] md:max-w-full object-cover m-auto" alt="your-alt-text" />
            </div>

            <div className="w-full md:w-1/2 p-4 text-center">
               {/* Content for the second column */}
               <h1 className="md:text-2xl font-bold">
                  One of a Kind Gems & Jewelry
                  <hr />
               </h1>
               <p className='p-2'>
                  By contrast, every one of our gemstones or jewelry pieces is one-of-a-kind - they don’t have a bar code or a SKU #. Nothing we sell has a quantity above one. This means each item is one of a kind, one in stock, and when it is sold it cannot be replaced. We sell one of a kind, every time.
               </p>
            </div>
         </div>


         <div className="flex flex-wrap md:flex-nowrap justify-center items-center min-h-[300px] m-auto md:w-5/6 md:text-2xl my-4">

            <div className="w-full md:w-1/2 p-4 text-center">
               {/* Content for the second column */}
               <h1 className="md:text-2xl font-bold">
                  Price
                  <hr />
               </h1>
               <p className='p-2'>
                  We offer extremely competitive pricing on all of our fine, rare gems and jewelry pieces.. Competitors may offer lower prices, but mostly the gems presented will not match our quality. We cherry pick the best.
               </p>
            </div>

            <div className="w-full md:w-1/2 p-4 text-center">
               <p className='p-2'>
                  Today, we are a vertically integrated company involved in almost every step of a gemstone's journey from mine to jewelry. We maintain close links with the majority of miners in this part of the world, drawing on our many years experience in the field. When there is new production of fine material we know about it and we get first choice in most cases.
               </p>
            </div>
         </div>


         <div className='bg-[#333] text-white md:text-2xl p-4 py-12'>
            <h1 className='text-center'>Reputation and History</h1>
            <div className='flex flex-wrap md:flex-nowrap justify-center items-center md:max-w-[850px] mx-auto my-6'>
               <div className='w-full'>

                  For over {shopCurrentYear} years we have built our company on a strong foundation of superior trust and ethics. We take great pride in our reputation and offer only the highest quality gemstones and jewelry.

                  <br />
                  <br />

                  Initially incorporated as a mining company in {shopCreatedYear}, The Rare Gemstone Company has been involved in all facets of the colored gemstone trade in our many years active in the industry.

                  <br />
                  <br />

                  Since {shopCreatedYear}, when we mined Sapphires in the wilderness, we have been passionate about colored gemstones and this wild, beautiful part of the world that produces so many rare and exciting stones. .
               </div>
            </div>
         </div>



         <div className='p-4 py-12 md:text-2xl text-center'>
            <div className='max-w-[750px] m-auto'>
               <h1 className='p-4'>Certification & Mining Reports, 360 Degree View Technology, Laser Inscription</h1>

               We go further than any other gem company in providing you with as much information as possible on every gemstone or jewelry piece
               we have. GIA Gemstone Grading Reports, Mining & Geology Reports, 360 degree viewing technology and laser inscription on every gem.
            </div>

         </div>

      </div>
   )
}

export default WhyUs