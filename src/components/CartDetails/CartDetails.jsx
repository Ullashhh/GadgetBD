// import React from 'react';

import {  useState } from "react";
import { addToDb, decreaseFromDb } from "../../../utilities/fakeDataBase";

const CartDetails = ({ cart, setIncrease, setDecrease, deleteItem }) => {
  const [count, setCount] = useState(cart.quantity);
  const increase = (cart) => {
    setIncrease(count, setCount, cart);
    addToDb(cart.id);
  };
  console.log(count)
  console.log(cart.quantity)
  const decrease = () => {
    setDecrease(count, setCount);
    decreaseFromDb(cart.id);
  };
 
  return (
    <div className="flex items-center">
      <div className="flex items-center ml-10 mb-5">
        <img className="w-20 rounded-md mr-5" src={cart.thumbnail} alt="" />
        <h1 className="font-semibold">{cart.title}</h1>
        <div className="ml-4 flex">
          <button
            onClick={decrease}
            className="font-semibold bg-green-500 px-2 rounded-md"
          >
            -
          </button>
          <p className="font-semibold mx-2">{count}</p>
          <button
            onClick={() => increase(cart)}
            className="font-semibold bg-green-500 px-2 rounded-md"
          >
            +
          </button>
        </div>
      </div>
      <div className="ml-10 mb-5">
        <p>${cart.price * count}</p>
      </div>
      <button onClick={() => deleteItem(cart.id)} className="mb-5 ml-2">Clear</button>
    </div>
  );
};

export default CartDetails;
