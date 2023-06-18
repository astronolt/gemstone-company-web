import React from 'react';


const BannerShop = ({ header, summary, img, background, color }) => {


   return (
      <div className={`flex flex-wrap md:flex-nowrap justify-center items-center min-h-[300px] bg-[#000] m-auto md:w-5/6 md:text-2xl my-4 text-white"`}>

         <div className="w-full md:w-1/2 p-4 text-center">
            <h1 className="md:text-2xl font-bold">
               {header}
               <hr className='border-white' />
            </h1>
            <p className='p-2 md:m-4 overflow-hidden'>
               {summary}
            </p>
         </div>

         <div className="w-full md:w-1/2 p-4 text-center">
            {/* Content for the second column */}
            <img src={img} className="w-full h-full max-w-[150px] md:max-w-[250px] object-cover m-auto" alt="img" />
         </div>
      </div>

   )
}

export default BannerShop