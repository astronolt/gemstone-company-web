import React from 'react';
import Banner from '../../components/Banner/Banner';


const AboutCompany = () => {
   return (
      <div>
         <Banner
            header='About Us'
            body="Initially incorporated as a mining company, we have been involved in all facets of the colored gemstone trade in our many years active in the industry." />

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

         <div>
            
Royalty & Celebrity
In over 40 years of being immersed in the gemstone trade, we have had the honor of working with royalty and celebrity.

    Purchased a suite of fine Tanzanites from us in 2007 whilst on safari.
    of the famous band The Gypsy Queens seen here in our offices with our director Antony Zagoritisin 2017, purchased fine Tanzanite. Read about
    Famed Hollywood director, creator of Back to the Future, Forrest Gump and Romancing the Stone purchased fine Tanzanite from us in 2015 whilst on safari.
    TV and movie actress. Starred in movies with Kevin Costner and Charlize Theron as well as a long career in TV. We designed and made custom jewelry for Kit in 2018. Photographed here with Nicky Thomas, one of our designers, in our showroom. Read about
    Purchased fine Tanzanite in 1996 whilst on safari.
    Purchased custom designed jewelry and loose gemstones in a series of private appointments over several years.
    Sister of Microsoft co-founder Paul Allen purchased fine Tanzanite and Tsavorite from us in 2006 and 2007


         </div>

         <div>
            <div>
               <img src="" alt="" />
            </div>
            <div>
            The ICA - International Colored Gemstone Association is headquartered in New York and represents the worldwide colored gemstone industry. It has a strict code of ethics adhered to by all members.

Antony Zagoritis, our Head Gemologist and one of our directors, is currently serving as the Ambassador to Kenya for the ICA. 
            </div>
         </div>

      </div>
   )
}

export default AboutCompany