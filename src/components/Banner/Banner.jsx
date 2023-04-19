import React from 'react';
import { banner1 } from "../../assets";

const Header = ({header, body}) => {


  return (
      <div className="bg-black bg-center bg-no-repeat md:py-[90px] py-[50px] h-[40vh] text-center mx-auto"
         style={{
            backgroundImage: `url(${banner1})`,
         }}>
         <h1 className='text-5xl'> {header} </h1>
         <div className="w-[400px] flex justify-center items-center flex-wrap m-auto h-full">
            {body}
         </div>
      </div>

  )
}

export default Header