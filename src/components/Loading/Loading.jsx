// import React from 'react';
import spinner from '../../assets/Spinner-1s-200px.gif'
import './Loading.css'

const Loading = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <img className='ml-[60rem]' src={spinner} alt='loading...' />
        </div>
    );
};

export default Loading;