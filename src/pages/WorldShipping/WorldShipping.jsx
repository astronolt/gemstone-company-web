import React from 'react';
import Banner from '../../components/Banner/Banner';

const WorldShipping = () => {
   return (
      <div>
         <Banner
            header='How We Ship'
            body="We ship to virtually every country in the world and we ship every
            day." />

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

      </div>
   )
}

export default WorldShipping