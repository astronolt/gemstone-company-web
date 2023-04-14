import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
// import Product from "./pages/Product/Product";
// import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import './App.scss';


const Layout = () => {
  return (
    <div className="app w-full overflow-hidden text-white">
      <div className={`paddingX flexCenterNav`}>
        <div className={`boxWidth`}>
          <Navbar />
        </div>
      </div>
      
      {/* <Outlet />
      <Footer /> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/products/:id",
      //   element: <Products />,
      // },
      // {
      //   path: "/product/:id",
      //   element: <Product />,
      // },
    ],
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App