import React from 'react';
import Banner from '../../components/Banner/Banner';

const WorldShipping = () => {
   return (
      <div>
         <Banner
            header='How We Ship'
            body="We ship to virtually every country in the world and we ship every
            day." />

         <div className='bg-[#aaa] text-black p-4 md:p-8'>
            <h1 className='text-center'>
               Free Worldwide Insured No Risk Fedex Shipping
            </h1>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center min-h-[300px] m-auto md:w-5/6 my-4">

               <div className="w-full md:w-1/2 p-4 text-center">
                  <h1 className="md:text-2xl font-bold">
                     Pay All Shipping Costs and All Insurance
                     <hr />
                  </h1>
                  <p className='p-2'>
                     We use Fedex International Priority service to safely ship our gemstones and jewelry around the world. We have been doing this since 2002 when we launched our first online store. We pay all shipping costs and we pay all insurance.
                  </p>
               </div>

               <div className="w-full md:w-1/2 p-4 text-center">
                  {/* Content for the second column */}
                  <h1 className="md:text-2xl font-bold">
                     Full Time Order Tracking
                     <hr />
                  </h1>
                  <img src="" alt="" />
                  <p className='p-2'>
                     We also retain all risk in transit. The shipment is trackable on Fedex.com the entire way and we monitor all shipments through to delivery. Fedex will perform all customs clearance for you and deliver to your address.
                  </p>
               </div>
            </div>
         </div>


         <div className='bg-white text-black p-4 md:p-8'>
            <h1 className='text-center'>
               Gia Gemologist allocated to your account
               looks after your order
            </h1>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center min-h-[300px] m-auto md:w-5/6 my-4">

               <div className="w-full md:w-1/2 p-4 text-center">
                  <h1 className="md:text-2xl font-bold">
                  Experienced GIA Gemologists to every account.
                     <hr />
                  </h1>
                  <p className='p-2'>
                  Buying a high value item online is an emotive and sometimes scary process. We recognize this and we want you to deal with a person rather than a faceless company. For this reason, we allocate one of our highly experienced GIA Gemologists to every account.
                  </p>
               </div>

               <div className="w-full md:w-1/2 p-4 text-center">
                  {/* Content for the second column */}
                  <h1 className="md:text-2xl font-bold">
                     24 Hrs Customer Support
                     <hr />
                  </h1>
                  <img src="" alt="" />
                  <p className='p-2'>
                  This gemologist will personally take care of every order made on that account and will be available to the account holder at all times to answer any queries or concerns, either gemologically related or not. The gemologist also is responsible for examining the gemstones and jewelry prior to packing and monitoring the shipment to its destination.
                  </p>
               </div>
            </div>
         </div>



      </div>
   )
}

export default WorldShipping