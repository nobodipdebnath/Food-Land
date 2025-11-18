import React from 'react';
import chef from '../../assets/images/chef.png'

const Kitchen = () => {
    return (
        <div className='grid grid-cols-2 items-center my-20'>
            <div>
                <h1 className='text-5xl font-bold text-black'>Everyone can be a <br /> chef in their own kitchen</h1>
                <p className='text-base text-black/60 mt-6'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className='px-5 py-3 mt-18 text-base font-semibold text-white bg-black  rounded-xl cursor-pointer'>Learn more</button>
            </div>
            <div>
                <img src={chef} alt="Not Found" />
            </div>
        </div>
    );
};

export default Kitchen;