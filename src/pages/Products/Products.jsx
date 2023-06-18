import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import List from "../../components/List/List";
import BannerShop from '../../components/Banner/BannerShop';

import { Ruby, RubyData } from "../../api/Ruby";
import { Spinel, SpinelData } from "../../api/Spinel";
import { Sapphire, SapphireData } from "../../api/Sapphire";
import { RareGemstones, RareGemstonesData } from "../../api/RareGemstones";
import { HandmadeJewlry, HandmadeJewlryData } from "../../api/HandmadeJewelry";

import "./Products.scss";


const Products = ({ type }) => {

  const catId = useParams().id;

  console.log(catId);

  let [productList, setProductList] = useState([]);
  let [productData, setproductData] = useState({});


  useEffect(() => {
    switch (catId) {
      case 'ruby':
        setProductList(Ruby);
        setproductData(RubyData);
        break;
      case 'spinel':
        setProductList(Spinel);
        setproductData(SpinelData);
        break;
      case 'sapphire':
        setProductList(Sapphire);
        setproductData(SapphireData);
        break;
      case 'rhodolite':
        setProductList(RareGemstones);
        setproductData(RareGemstonesData);
        break;
      case 'aquamarine':
        setProductList(RareGemstones);
        setproductData(RareGemstonesData);
        break;
      case 'rare-gemstones':
        setProductList(RareGemstones);
        setproductData(RareGemstonesData);
        break;
      case 'handmade-jewelry':
        setProductList(HandmadeJewlry);
        setproductData(HandmadeJewlryData);
        break;
      default:
        // products = Ruby;
        // productData = RubyData;
        break;
    }
  }, [catId])


  return (
    <div className="products">

      <BannerShop
        header={productData.header}
        summary={productData.summary}
        img={productData.img}
      />

      <div className="mx-auto max-w-[1200px] flex flex-wrap -mx-2 mt-8 md:mt-[70px] justify-center">
        <List products={productList} catId={catId} />
      </div>

    </div>
  );
};

export default Products;
