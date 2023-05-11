import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

import List from "../../components/List/List";
import BannerShop from '../../components/Banner/BannerShop';

import { Ruby, RubyData } from "../../api/ruby";
import { Spinel, SpinelData } from "../../api/Spinel";

import "./Products.scss";


const Products = ({ type }) => {

  let products, productData;

  const catId = useParams().id;
  //alert(catId);

  switch (catId) {
    case 'ruby':
      products = Ruby;
      productData = RubyData;
      break;
    case 'spinel':
      products = Spinel;
      productData = SpinelData;
      break;
    default:
      products = Ruby;
      productData = RubyData;
      break;
  }


  // const ProductCard = ({ product }) => (
  //   <div className="w-full md:w-1/2 mx-5 mb-10 md:mb-0">
  //     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
  //       <div className="px-3 py-2">
  //         <h3 className="text-lg font-medium text-gray-900">
  //           {product.name}
  //         </h3>
  //         <p className="text-gray-600">
  //           ${product.price}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );



  return (
    <div className="products">

      <BannerShop
        header={productData.header}
        summary={productData.summary}
        img={productData.img}
      />

      <div className="mx-auto max-w-[1200px] flex flex-wrap -mx-2 mt-8 md:mt-[70px] justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full md:w-1/2 px-2 mb-4 md:mb-0 m-2 relative max-w-[150px] md:max-w-[200px] h-[200px] md:h-[250px]"
          >
            <div
              className="h-full border rounded-md overflow-hidden absolute inset-0"
              style={{
                backgroundImage: `url(${product.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <span className="bg-[#4447] p-2 m-2 top-[10px] relative">
                {product.name}
              </span>

              <div className="bg-black opacity-0 hover:opacity-70 transition duration-300 absolute inset-0 flex justify-center items-center pointer">
                <div className="p-3 text-center">
                  <h3 className="text-lg font-medium text-gray-100">{product.name}</h3>
                  <p className="text-gray-100">${product.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* 
        <div className="right hidden">
          <List catId={catId} />
        </div>
      */}
    </div>
  );
};

export default Products;
