import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home.jsx";
import Details from "./components/Details/Details.jsx";
import {cartProductLoader, wishProductLoader} from "../utilities/setCart.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: cartProductLoader
      },
      {
        path: "/wishList",
        element: <WishList></WishList>,
        loader: wishProductLoader
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/details/:dataId",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.dataId}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
