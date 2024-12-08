// import React from 'react';
// import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import WishDetails from '../WishDetails/WishDetails';

const WishList = () => {
    const wishedCarts = useLoaderData()
    // const [wishList, setWishList] = useState(wishedCarts)
    return (
        <div className='grid grid-cols-3 gap-20 mx-48 mt-20'>
            {
                wishedCarts.map((item) => <WishDetails key={item.id} item={item}></WishDetails>)
            }
        </div>
    );
};

export default WishList;