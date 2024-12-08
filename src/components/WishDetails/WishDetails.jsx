// import React from 'react';

const WishDetails = ({item}) => {
    return (
        <div className="mb-10 border-spacing-6">
            <img className="h-[150px] w-full mb-3" src={item.thumbnail} alt="" />
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
        </div>
    );
};

export default WishDetails;