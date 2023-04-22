import React from 'react';
import Banner from '../../components/Banner/Banner';

const WhyUs = () => {
   return (
      < div>
         <Banner
            header="Why Choose Us"
            body="Initially incorporated as a mining company, we have been involved in all facets of the colored gemstone trade in our many years active in the industry." />

         <div className="flex flex-wrap md:flex-nowrap">

            <div className="w-full md:w-1/2 p-4">
               <h1 className="text-2xl font-bold">

                  From Mine to Market</h1>
               <p>

                  We buy rough rare gemstones directly from small-scale miners all over the region. We have developed close relationships with these miners over decades. We then cut the material right here in our lapidary factory.

                  There is no middleman; our gemstones come from the ground direct to you!

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

         <div className="flex flex-wrap md:flex-nowrap">

            <div className="w-full md:w-1/2 p-4">
               <h1 className="text-2xl font-bold">

                  From Mine to Market</h1>
               <p>

                  We buy rough rare gemstones directly from small-scale miners all over the region. We have developed close relationships with these miners over decades. We then cut the material right here in our lapidary factory.

                  There is no middleman; our gemstones come from the ground direct to you!

               </p>
            </div>

            <div className="w-full md:w-1/2 p-4">
               {/* Content for the second column */}
               <h1 className="text-2xl font-bold">C
                  One of a Kind Gems & Jewelry</h1>
               <p>

                  Many other websites have beautiful pictures of the gemstones and jewelry they offer. Yet, the reality is that in most cases you are seeing a ‘marketing picture’ of an item that does not even exist. This is known as pre-selling in the trade and is prevalent now in the industry. If you order the item, then and only then, will the item be manufactured and often the piece will not be created by the company that you are ordering from. It will be ordered from various vendors and dealers that supply the company you are ordering from, and what do you know about them?

                  Will the item even look remotely like what the ‘marketing picture’ shows? The gemstone pictures are not even real pictures in most cases, they are artificially created to look like a real gemstone. Is this the kind of company you want to purchase from?

                  By contrast, every one of our gemstones or jewelry pieces is one-of-a-kind - they don’t have a bar code or a SKU #. Nothing we sell has a quantity above one. This means each item is one of a kind, one in stock, and wh
               </p>
            </div>
         </div>
         
         <div>
            Certification & Mining Reports, 360 Degree View Technology, Laser Inscription

            We go further than any other gem company in providing you with as much information as possible on every gemstone or jewelry piece we have. GIA Gemstone Grading Reports, Mining & Geology Reports, 360 degree viewing technology and laser inscription on every gem.
         </div>

         <div>


            We are involved in every step. Liasing with miners, we offer a free testing service to help artisanal miners identify any new deposits they discover. We are always on the lookout for new deposits and discoveries and are in constant contact with the majority of miners in the region.

            We purchase the finest rough directly from the mines. We then cut, polish, test and grade every piece in house using the very latest gemological equipment and techniques. We have GIA Gemologists, Master Gem Cutters, Jewelery Designers and Master Goldsmiths on our staff and every stage is undertaken with utmost professionalism.
            Price

            We offer extremely competitive pricing on all of our fine, rare gems and jewelry pieces.. Competitors may offer lower prices, but mostly the gems presented will not match our quality. We cherry pick the best.

         </div>
      </div>
   )
}

export default WhyUs