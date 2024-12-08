// import React from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
  const product = useLoaderData();
  const imageLength = product.images.length;
  console.log(imageLength)
  const navigate = useNavigate()
  const previousNavigate = () => {
    navigate(-1)
  }
  return (
    <div className="mt-10 px-40">
      <h1 className="text-center mb-7 text-3xl">
        Details of <span className="font-semibold">{product.title}</span>
      </h1>
      <hr />
      <div
        className={`my-5 grid grid-cols-${imageLength} place-content-center gap-5 mx-auto w-full `}
      >
        {product.images.map((image, index) => (
          <img className="w-48 h-36" key={index} src={image} alt={product.title} />
        ))}
      </div>
      <hr />
      <div className="mt-5 border p-5 rounded-md w-96 mx-auto">
        <p className="mb-2 font-semibold">Brand: {product.brand}</p>
        <p className="mb-2 font-semibold">Description: {product.description}</p>
        <p className="mb-2 font-semibold">Price: ${product.price}</p>
        <p className="mb-2 font-semibold">Discount: {product.discountPercentage}%</p>
        <p className="mb-2 font-semibold">Rating: {product.rating} out of 5.00</p>
        <p className="mb-2 font-semibold">Stock: {product.stock}</p>
        <button onClick={previousNavigate} className="py-1 px-2 font-semibold rounded-sm mr-3 bg-lime-400">Go Back</button>
      </div>
    </div>
  );
};

export default Details;
