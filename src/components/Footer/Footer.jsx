import { shop, footerLinks, socialMedia } from "../../constants";
import Recognition from "../../components/Recognition/Recognition";
import "./Footer.scss";

const Footer = () => (

   <section className={`flexCenter paddingY flex-col`}>

      <Recognition />

      <div className={`flexStart md:flex-row flex-col mb-8 w-full`}>
         <div className="flex-[1] flex flex-col justify-start mr-10 max-w-[312px]">
            <div>
               <img className="inline"
                  src="/logo.svg"
                  alt="logo"
                  width={30}
               />
               <span className={`capitalize align-bottom paragraph text-[30px] mt-4 max-w-[312px]`}>
                  {shop.name}
               </span>
            </div>

            <p className={`mt-4 max-w-[312px]`}>
               {shop.tagline}
            </p>
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
               <h4 className="font-default font-medium text-[18px] leading-[27px] text-white">
                  Contact
               </h4>
               <div className="hidden">
                  {shop.phone}
               </div>
               <span className="text-[80%]">
                  Please note that our normal office hours are 9am to 5:30pm Monday to Friday
               </span>
            </div>
         </div>

         <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
               <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                  <h4 className="font-default font-medium text-[18px] leading-[27px] text-white">
                     {footerlink.title}
                  </h4>
                  <ul className="list-none mt-4">
                     {footerlink.links.map((link, index) => (
                        <li
                           key={link.name}
                           className={`font-default font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                              }`}
                        >
                           {link.name}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}

         </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
         
      <div className="footer-bottom">
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>

         <p className="font-default font-normal text-center text-[18px] leading-[27px] text-white">
            &copy; {new Date().getFullYear()} {shop.name}. All Rights Reserved.
         </p>

         <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
               <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                     }`}
                  onClick={() => window.open(social.link)}
               />
            ))}
         </div>
      </div>
   </section>
);

export default Footer;