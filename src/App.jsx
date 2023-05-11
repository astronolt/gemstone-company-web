import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import WhyUs from "./pages/AboutUs/WhyUs";
import WorldShipping from "./pages/WorldShipping/WorldShipping";

//styles
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
        element: <Products type="gems" />,
      },
      {
        path: "/handmade-jewelry",
        element: <Products type="jewelry" />,
      },
      {
        path: "/gems/:id",
        element: <Products type="gems" />,
      },
      {
        path: "/product/:type/:id",
        element: <Product />,
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
