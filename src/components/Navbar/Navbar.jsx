import { useState } from 'react';
import { Link } from "react-router-dom";
import { close, menu } from "../../assets";
import { shop, navLinksRight, navLinksLeft, navLinksMore } from "../../constants";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./Navbar.scss";


const Navbar = () => {

   const [toggle, setToggle] = useState(false);
   const navLinkMobile = [
      ...navLinksLeft,
      ...navLinksMore
   ];

   return (
      <nav className='w-full navbar'>

         <div className="wrapper">

            <div className="hidden md:block left">
               <div className='item list-none sm:flex hidden justify-end items-center flex-1'>
                  {navLinksRight.map((nav, index) => (
                     <Link
                        key={nav.id}
                        to={nav.url}
                        className={`font-default font-normal text-white cursor-pointer text-[16px]
                     ${index === navLinksRight.length - 1 ? 'mr-0' : 'mr-10'}`}
                     >
                        {nav.title}
                     </Link>
                  ))}
               </div>
            </div>

            <div className="center">
               <Link className="link" to="/">
                  <span className='hidden lg:inline'>
                     Real
                  </span>
                  <img src="/logo.svg" alt="logo" className='inline w-[40px] mx-[5px] py-[10px]'
                     onClick={() => setToggle(false)} />
                  <span className='hidden lg:inline'>
                     Sparklers
                  </span>
               </Link>
            </div>

            <div className="right">

               <div className='item list-none sm:flex/ justify-end items-center flex-1/ hidden sm:block '>
                  {navLinksLeft.map((nav, index) => (
                     <Link
                        key={nav.id}
                        to={nav.url}
                        className={`font-default text-white font-normal cursor-pointer text-[16px]
                     ${index === navLinksLeft.length - 1 ? 'mr-0' : 'mr-10'}`}
                     >
                        {nav.title}
                     </Link>
                  ))}
               </div>

               <Link to='/login' className="icons">
                  {/* <SearchIcon/> */}
                  <PersonOutlineOutlinedIcon />
                  <FavoriteBorderOutlinedIcon />
                  <div className="cartIcon" onClick={() => setOpen(!open)}>
                     <ShoppingCartOutlinedIcon />
                     {/* <span>{ products.length }</span> */}
                  </div>
               </Link>

               <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
                  <img src={toggle ? close : menu}
                     alt="menu"
                     className='w-[28px] h-[28px] object-contain'
                     onClick={() => setToggle((togglePrev) => !togglePrev)}
                  />
               </div>

            </div>
         </div>

         {/* {open && <Cart/>} */}



         {/* NAV BAR MORE*/}
         <div className='item list-none hidden sm:flex justify-center items-center border-4 border-[#5556] p-2 overflow'>
            {navLinksMore.map((nav, index) => (
               <Link
                  key={nav.id}
                  to={nav.url}
                  className={`font-default text-white font-normal cursor-pointer text-[16px]
                     ${index === navLinksMore.length - 1 ? 'mr-0' : 'mr-10'}`}
               >
                  {nav.title}
               </Link>
            ))}
         </div>


         { /** mobile menu */}
         <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>

            <div
               className={`${toggle ? 'flex' : 'hidden'} z-10 p-4 bg-red-gradient/ bg-[#3339] absolute top-20 right-0 mx-4 my-2 w-[100%] mx-auto my-auto min-w-[140px] rounded sidebar`}
            >
               <ul
                  className='bg-[#333] list-none flex flex-col justify-end items-center flex-1'>

                  {navLinkMobile.map((nav, index) => (
                     <Link
                        className={`text-white font-poppins font-normal cursor-pointer text-[14px] border w-[100%] p-2 my-1 hover:bg-[#444]`}
                        to={`${nav.url}`}
                        onClick={() => setToggle((togglePrev) => !togglePrev)}
                     >
                        <li
                           key={nav.id}
                           className={``}
                        >
                           {nav.title}
                        </li>
                     </Link>
                  ))}

               </ul>
            </div>
         </div>

      </nav>
   )
}

export default Navbar