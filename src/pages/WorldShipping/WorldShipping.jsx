import React from 'react';
import Banner from '../../components/Banner/Banner';

const WorldShipping = () => {
   return (
      <div>
         <Banner
            header='How We Ship'
            body="We ship to virtually every country in the world and we ship every
            day." />

         <div className="flex flex-wrap md:flex-nowrap justify-center items-center min-h-[300px] m-auto md:w-5/6">

            <div className="w-full md:w-1/2 p-4">
               <h1 className="text-2xl font-bold">
                  Direct from THE MINE
               </h1>
               <p>
                  Each of our special gemstones is selected from
                  thousands of carats at the mouth of the mine
                  GIA GEMOLOGIST SELECTED.
               </p>
            </div>

            <div className="w-full md:w-1/2 p-4">
               {/* Content for the second column */}
               <h1 className="text-2xl font-bold">
                  FineHANDMADE JEWELRY</h1>
               <p>
                  Unique, One-of-a-Kind jewelry handmade with
                  cherrypicked, top grade colored gemstones.
               </p>
            </div>
         </div>
         <div className="flex flex-wrap md:flex-nowrap justify-center items-center min-h-[300px] m-auto md:w-5/6">

            <div className="w-full md:w-1/2 p-4">
               <h1 className="text-2xl font-bold">
                  Direct from THE MINE
               </h1>
               <p>
                  Each of our special gemstones is selected from
                  thousands of carats at the mouth of the mine
                  GIA GEMOLOGIST SELECTED.
               </p>
            </div>

            <div className="w-full md:w-1/2 p-4">
               {/* Content for the second column */}
               <h1 className="text-2xl font-bold">
                  FineHANDMADE JEWELRY</h1>
               <p>
                  Unique, One-of-a-Kind jewelry handmade with
                  cherrypicked, top grade colored gemstones.
               </p>
            </div>
         </div>
      </div>
   )
}

export default WorldShipping