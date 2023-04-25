import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
// import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import WhyUs from "./pages/AboutUs/WhyUs";
import WorldShipping from "./pages/WorldShipping/WorldShipping";

import './App.scss';


const Layout = () => {
  return (
    <div className="app w-full overflow-hidden text-white">

      <div className={`paddingX flexCenterNav`}>
        <div className={`boxWidth`}>
          <Navbar />
        </div>
      </div>

      <Outlet />

      <div className="p-4 md:p-8">
        <Footer />
      </div>
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
      {
        path: "/rare-gemstones",
        element: <Products type=""/>,
      },
      {
        path: "/gems/:id",
        element: <Products />,
      },
      // {
      //   path: "/product/:id",
      //   element: <Product />,
      // },
      {
        path: "/handmade-jewelry",
        element: <Products type="handmade-jewelry" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about-company",
        element: <AboutCompany />,
      },
      {
        path: "/why-us",
        element: <WhyUs />,
      },
      {
        path: "/world-wide-shipping",
        element: <WorldShipping />,
      },
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
