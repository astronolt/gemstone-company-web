import React from 'react';
import Banner from '../../components/Banner/Banner';

const WhyUs = () => {
   return (
      < div>
         <Banner
            header='Why Choose Us'
            body="Initially incorporated as a mining company, we have been involved in all facets of the colored gemstone trade in our many years active in the industry." />

         <div className="flex flex-wrap md:flex-nowrap">

            <div className="w-full md:w-1/2 p-4">
               <h1 className="text-2xl font-bold">Column 1</h1>
               <p>
                  This is the content for the first column. It will be displayed in a
                  single column on medium screens and wider, and in a two-column layout
                  on smaller screens.
               </p>
            </div>

            <div className="w-full md:w-1/2 p-4">
               {/* Content for the second column */}
               <h1 className="text-2xl font-bold">Column 2</h1>
               <p>
                  This is the content for the second column. It will be displayed in a
                  single column on medium screens and wider, and in a two-column layout
                  on smaller screens.
               </p>
            </div>
         </div>
      </div>
   )
}

export default WhyUs