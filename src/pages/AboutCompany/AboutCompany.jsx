import React from 'react';
import Banner from '../../components/Banner/Banner';
import { ica, face1, face2, face3 } from "../../assets";


const AboutCompany = () => {
   return (
      <div className=''>
         <Banner
            header='About Us'
            body="Initially incorporated as a mining company, we have been involved in all facets of the colored gemstone trade in our many years active in the industry." />

         <div className="flex flex-wrap md:flex-nowrap justify-center items-center min-h-[300px] m-auto md:w-5/6 md:text-2xl bg-[#333] my-4">

            <div className="w-full md:w-1/2 p-4 text-center">
               <h1 className="md:text-2xl font-bold">
                  Direct from
                  <br />
                  THE MINE
                  <hr />
               </h1>
               <p className='p-2'>
                  Each of our special gemstones is selected from
                  thousands of carats at the mouth of the mine.
                  <br />
                  GIA GEMOLOGIST SELECTED.
               </p>
            </div>

            <div className="w-full md:w-1/2 p-4 text-center">
               {/* Content for the second column */}
               <h1 className="md:text-2xl font-bold">
                  Fine
                  <br />
                  HANDMADE JEWELRY
                  <hr />
               </h1>
               <p className='p-2'>
                  Unique, One-of-a-Kind jewelry handmade with
                  cherrypicked, top grade colored gemstones.
               </p>
            </div>
         </div>


         <div className='md:text-2xl my-4 p-4'>

            <h2 className='m-4'>
               Royalty & Celebrity
               In over 40 years of being immersed in the gemstone trade, we have had the honor of working with royalty and celebrity.
            </h2>

            <div className='flex flex-wrap md:flex-nowrap justify-center items-center m-2 space-x-5'>
               <div className='w-full h-full md:w-1/4 max-w-[250px]'>
                  <img src={face1} alt="" className='w-full h-full object-cover max-w-[300px]'/>
               </div>
               <div className='w-full md:w-1/4 max-w-[250px]'>
                  <img src={face2} alt="" className='w-full object-cover max-w-[300px]'/>
               </div>
               <div className='w-full md:w-1/4 max-w-[250px]'>
                  <img src={face3} alt="" className='w-full object-cover max-w-[300px]'/>
               </div>
               <div className='w-full md:w-1/4 max-w-[250px]'>
                  <img src={face3} alt="" className='w-full max-w-[300px]'/>
               </div>
            </div>

         </div>


         <div className='bg-[#e8e7e7] text-black md:text-2xl p-4 py-12'>
            <h1>Recognition in the Industry</h1>
            <div className='flex flex-wrap md:flex-nowrap justify-center items-center md:max-w-[850px] mx-auto my-6'>
               <div className='w-full md:w-1/4'>
                  <img src={ica} alt="ica" className='' />
               </div>
               <div className='w-full'>
                  The ICA - International Colored Gemstone Association is headquartered in New York and represents the worldwide colored gemstone industry. It has a strict code of ethics adhered to by all members.
                  <br />
                  <br />
                  Antony Zagoritis, our Head Gemologist and one of our directors, is currently serving as the Ambassador to Kenya for the ICA.
               </div>
            </div>
         </div>

      </div>
   )
}

export default AboutCompany