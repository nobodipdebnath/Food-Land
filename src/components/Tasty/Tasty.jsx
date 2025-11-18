import React from 'react';

const Tasty = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-black '>Tasty Recipes</h1>
            <div className='mt-8 flex flex-col gap-6'>
                <div className='flex items-center gap-3'>
                    <img src="https://i.ibb.co.com/4nqBgNFj/Mask-Group-17.png" alt="Not Found" />
                    <div>
                        <h3 className='text-xl font-bold text-black'>Chicken Meatballs with Cream Cheese </h3>
                        <p className='text-sm text-black/60 mt-3'>By Andreas Paula</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src="https://i.ibb.co.com/hJ23tvbS/Mask-Group-18.png" alt="Not Found" />
                    <div>
                        <h3 className='text-xl font-bold text-black'>Traditional Bolognaise Ragu </h3>
                        <p className='text-sm text-black/60 mt-3'>By Andreas Paula</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src="https://i.ibb.co.com/gFZ2kmFp/Mask-Group-19.png" alt="Not Found" />
                    <div>
                        <h3 className='text-xl font-bold text-black'>Pork and Chive Chinese Dumplings </h3>
                        <p className='text-sm text-black/60 mt-3'>By Andreas Paula</p>
                    </div>
                </div>
            </div>
            <img className='mt-20 w-full' src="https://i.ibb.co.com/Kp83f2qW/Ads.png" alt="Not Found" />
        </div>
    );
};

export default Tasty;