// import React from 'react';
import { Link } from "react-router-dom";
import "./Product.css";
import { useState } from "react";
import { addWishCart, getWishList } from "../../../utilities/fakeDataBase";
import { FaRegHeart } from "react-icons/fa";

const Product = ({ product, handleAddToCart, handleAddToWishList, wishList }) => {
  const {
    id,
    brand,
    category,
    price,
    title,
    thumbnail
  } = product;
  const [wishItem, setWishItem] = useState(false);
  const wishedCarts = getWishList();
  console.log(wishedCarts[21])
  const addToWishlist = (id) => {
    const matchedItem = wishList.find((item) => item.id == id)
    if(!wishList.includes(matchedItem)){
      handleAddToWishList(product)
      setWishItem(!wishItem)
      // setWishItem()
    }else{
      addWishCart(id)
      setWishItem(!wishItem);
    } 
  }
  
  let backGround; 
  if(wishItem){
    backGround = 'text-red-600'
  }else{
    backGround = 'text-black'
  }
  

  return (
    <div className="product-section rounded-md border p-3">
      <img
        className="rounded-md h-[150px] w-full"
        src={thumbnail}
        alt={title}
      />
      <div className="flex justify-between">
        <div>
          <h1>
            {title.length > 32 ? title.slice(0, 32).concat("...") : title}
          </h1>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="ml-10">
          <button
            className={`${backGround} mt-10 `}
            onClick={() => addToWishlist(id)}
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around mt-5">
        <button
          onClick={() => handleAddToCart(product)}
          className="py-1 px-2 font-semibold rounded-sm mr-3"
        >
          Add To Cart
        </button>
        <Link to={`/details/${id}`}>
          <button className="py-1 px-2 font-semibold rounded-sm mr-3">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
