// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
import { addToDb, addWishCart, getShoppingCart } from "../../../utilities/fakeDataBase";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([])
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    addToDb(item.id);
    // console.log(cart);
  };

  const handleAddToWishList = (item) => {
    setWishList([...wishList, item])
    addWishCart(item.id)
  }
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedProducts = [];
    for (const id in storedCart) {
      const savedProduct = products.find((product) => product.id == id);
      if (savedProduct) {
        const quantity = storedCart[id];
        savedProduct.quantity = quantity;
        savedProducts.push(savedProduct);
      }
    }
    setCart(savedProducts);
  }, [products]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((data) => setProducts(data.data.products));
  }, []);
  return (
    <main className="px-24 mt-10 grid grid-cols-4 gap-5">
      {products.length === 0 ? (
        <Loading></Loading>
      ) : (
        products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            handleAddToWishList={handleAddToWishList}
            wishList={wishList}
          ></Product>
        ))
      )}
    </main>
  );
};

export default Home;
