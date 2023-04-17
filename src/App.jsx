import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import AboutUs from "./pages/AboutUs/AboutUs";
// import Product from "./pages/Product/Product";
// import Products from "./pages/Products/Products";
// import Recognition from "./components/Footer/Footer";
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

      <Outlet />
      {/* 
      <Recognition />
      */}
      <Footer />
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
      // {
      //   path: "/handmade-jewelry",
      //   element: <Products type="handmade-jewelry" />,
      // },
      // {
      //   path: "/rare-gemstones",
      //   element: <Products type="rare-gemstones" />,
      // },
      {
        path: "/about-company",
        element: <AboutCompany />,
      },
      {
        path: "/why-us",
        element: <AboutUs />,
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
