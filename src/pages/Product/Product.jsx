import { useState } from "react";
import { useParams, redirect } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

// import useFetch from "../../hooks/useFetch";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartReducer";

import "./Product.scss";



const Product = () => {
  return redirect("/");
  // const id = useParams().id;
  // const [selectedImg, setSelectedImg] = useState("img");
  // const [quantity, setQuantity] = useState(1);

  // //const dispatch = useDispatch();
  // //const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  // const data = [
  //   {}
  // ];
  // const loading = false;



  //return (
    // <div className="product">
    //   {loading ? (
    //     "loading"
    //   ) : (
    //     <>
    //       <div className="left/">
    //         <div className="images">
    //           <img
    //             src=""
    //             alt=""
    //             onClick={(e) => setSelectedImg("img")}
    //           />
    //           <img
    //             src=""
    //             alt=""
    //             onClick={(e) => setSelectedImg("img2")}
    //           />
    //         </div>
    //       </div>
    //       <div className="right">

            
    //         <div className="mainImg">
    //           <img
    //             src=""
    //             alt=""
    //           />
    //         </div>

    //         <h1>{data?.attributes?.title}</h1>
    //         <span className="price">
    //           {/* ${data?.attributes?.price} */}
    //         </span>
    //         <p>{data?.attributes?.desc}</p>
    //         <div className="quantity">
    //           <button
    //             onClick={() =>
    //               setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
    //             }
    //           >
    //             -
    //           </button>
    //           {quantity}
    //           <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
    //         </div>
    //         <button
    //           className="add"
    //           // onClick={() =>
    //           //   dispatch(
    //           //     addToCart({
    //           //       id: data.id,
    //           //       title: data.attributes.title,
    //           //       desc: data.attributes.desc,
    //           //       price: data.attributes.price,
    //           //       img: data.attributes.img.data.attributes.url,
    //           //       quantity,
    //           //     })
    //           //   )
    //           // }
    //         >
    //           <AddShoppingCartIcon /> ADD TO CART
    //         </button>
            
    //         <div className="links">
    //           <div className="item">
    //             <FavoriteBorderIcon /> ADD TO WISH LIST
    //           </div>
    //           <div className="item">
    //             <BalanceIcon /> ADD TO COMPARE
    //           </div>
    //         </div>
    //         <div className="info">
    //           <span>Vendor: </span>
    //           <span>Product Type: </span>
    //           <span>Tag: </span>
    //         </div>
    //         <hr />
    //         <div className="info">
    //           <span>DESCRIPTION</span>
    //           <hr />
    //           <span>ADDITIONAL INFORMATION</span>
    //           <hr />
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>
  //);
};

export default Product;
