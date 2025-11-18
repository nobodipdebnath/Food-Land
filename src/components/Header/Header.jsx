import React from 'react';
import banner from '../../assets/images/banner.png'
import badge from '../../assets/images/Badge.png'
import packet from '../../assets/images/packet.png'
import { MdTimer } from "react-icons/md";
import { MdOutlineRestaurant } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";
import user from '../../assets/images/headeruser.png'

const Header = () => {
    return (
        <header className='grid grid-cols-2 bg-[#E7FAFE] relative  rounded-2xl mb-20'>
            <div className='p-12'>
                <button className='flex items-center gap-2 text-black text-sm font-semibold py-3 px-5 bg-white rounded-full cursor-pointer'>
                    <img src={packet} alt="not Found" />
                    <p>Hot Recipes</p>
                </button>
                <h1 className='text-black font-bold text-[64px] mt-8'>Spicy delicious chicken wings</h1>
                <p className='text-base text-black/60 py-6'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className='flex items-center gap-4'>
                    <button className='flex gap-2 items-center py-3 px-5 bg-black/10 rounded-full text-base font-medium text-black/80 cursor-pointer'>
                        <MdTimer></MdTimer>
                        <p>30 Minutes</p>
                    </button>
                    <button className='flex gap-2 items-center py-3 px-5 bg-black/10 rounded-full text-base font-medium text-black/80 cursor-pointer'>
                        <MdOutlineRestaurant></MdOutlineRestaurant>
                        <p>Chicken</p>
                    </button>
                </div>
                <div className='flex justify-between items-center mt-16'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-14 w-14 object-cover rounded-full' src={user} alt="Not Found" />
                        <div>
                            <h4 className='text-black font-bold text-base'>Nobodip Debnath</h4>
                            <p className='text-base font-medium text-black/80 mt-2'>18 November 2025</p>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 py-3 px-4 cursor-pointer bg-black rounded-xl'>
                        <p className='text-base font-medium text-white'>View Recipes</p>
                        <IoPlayCircleOutline className='text-white text-3xl mt-0.5'></IoPlayCircleOutline>
                    </button>
                </div>
            </div>
            <div>
                <img src={banner} alt="Not Found" />
            </div>
            <div className='absolute top-8 left-[45%]'>
                <img src={badge} alt="Not Found" />
            </div>
        </header>
    );
};

export default Header;