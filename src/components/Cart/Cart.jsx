// import React from 'react';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartDetails from "../CartDetails/CartDetails";
import {
  deleteShoppingCart,
  getShoppingCart,
  removeFromDb,
} from "../../../utilities/fakeDataBase";

const Cart = () => {
  const products = useLoaderData();
  const [carts, setCarts] = useState(products);
  console.log(carts);
  const setIncrease = (param1, param2) => {
    // console.log(cart.quantity)
    // console.log(param1)
    param2(param1 + 1);
    
  };
  const deleteItem = (id) => {
    const remainingCart = carts.filter((cart) => cart.id !== id);
    setCarts(remainingCart);
    removeFromDb(id);
  };
  const clearCart = () => {
    setCarts([]);
    deleteShoppingCart();
  };
  
  const setDecrease = (param1, param2) => {
    param2(param1 - 1);
  };

   useEffect(() => {
     const storedCart = getShoppingCart();
     const savedProducts = [];
     for (const id in storedCart) {
       const savedProduct = carts.find((product) => product.id == id);
       if (savedProduct) {
         const quantity = storedCart[id];
         savedProduct.quantity = quantity;
         savedProducts.push(savedProduct);
       }
     }
     setCarts(savedProducts);
   }, [carts]);
  
  const total = carts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  console.log(total)
  return (
    <div>
      <h1 className="absolute left-[69rem] top-4 rounded-[2rem] bg-red-600 px-1 text-white font-semibold text-xs">
        {carts.length}
      </h1>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <div>
          {carts.length === 0 ? (
            <p>Please Select Items </p>
          ) : (
            carts.map((cart) => (
              <CartDetails
                key={cart.id}
                cart={cart}
                setIncrease={setIncrease}
                setDecrease={setDecrease}
                deleteItem={deleteItem}
              ></CartDetails>
            ))
          )}
        </div>
        <div>
          <p className="ml-10">total: ${total}</p>
        </div>
        <div>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
