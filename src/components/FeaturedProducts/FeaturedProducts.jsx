import React from "react";
//import Card from "../Card/Card";
import "./FeaturedProducts.scss";
//import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>

        
<h1>Our Story</h1> 

The Rare Gemstone Company has been a leading miner and cutter of fine gemstones since 1974. Based at the source of one of the world’s most exciting gem producing areas we are in the enviable position to be able to select out the very best rough crystals as they come out of the mines.

With almost half a century in the industry, in-house cutting center and master cutters, close connections with mine owners in East Africa and long experience running colored stone mines, we offer a vertically integrated service from the mine to the end consumer bypassing the established old chain of distribution and its many built in markups. Our extensive network of miners provide us with the opportunity to have first viewing and selection of all new strikes and production from the mines.
Fine Gemstones are our Passion not just our Business

      </div>
      <div className="bottom">
        {/* {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)} */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
