import { Link } from "react-router-dom";

const List = ({ products, catId }) => {
  return (
    <>
      {products.map((product) => (
        <Link
          // to={"/product/" + catId + "/" + product.id}
          to={"/login"}
          key={product.id}
          className="w-full md:w-1/2 px-2 mb-4 md:mb-0 m-2 relative max-w-[150px] md:max-w-[200px] h-[200px] md:h-[250px]"
        ><div>
            <div
              className="h-full border rounded-md overflow-hidden absolute inset-0"
              style={{
                backgroundImage: `url(${product.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="bg-[#1119] text-white p-2 m-2 relative">
                {product.name}

                <div className="bg-black p-2 mt-2">
                  ${product.price}
                </div>
              </div>


              <div className="bg-black opacity-0 hover:opacity-70 transition duration-300 absolute inset-0 flex justify-center items-center pointer">
                <div className="p-3 text-center">
                  <h3 className="text-lg/ font-xs text-gray-100">
                    {product.survey}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default List;
