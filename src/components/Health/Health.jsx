import React from 'react';
import { FcPrint } from "react-icons/fc";
import { IoShareOutline } from "react-icons/io5";
import user from '../../assets/images/headeruser.png'
import { MdTimer } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";

const Health = () => {
    return (
        <div className='mt-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-[64px] font-semibold text-black'>Health Japanese Fried Rice</h1>
                    <div className='flex justify-between items-center mt-13'>
                        <div className='flex items-center gap-2'>
                            <img className='h-12 w-12 object-cover rounded-full' src={user} alt="Not Found" />
                            <div>
                                <h3 className='text-base font-semibold text-black'>Nobodip Debnath</h3>
                                <p className='text-sm font-medium mt-1 text-black/60'>19 November 2025</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdTimer className='text-2xl'></MdTimer>
                            <div>
                                <h3 className='text-base font-semibold text-black'>PREP TIME</h3>
                                <p className='text-sm font-medium text-black/60 mt-1'>15 Minutes</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdTimer className='text-2xl'></MdTimer>
                            <div>
                                <h3 className='text-base font-semibold text-black'>COOK TIME</h3>
                                <p className='text-sm font-medium text-black/60 mt-1'>15 Minutes</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdRestaurant className='text-2xl'></MdRestaurant>
                            <p className='text-sm font-medium text-black/60'>Chicken</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='p-7 bg-[#E7FAFE] hover:bg-[#99dbe9] duration-500 cursor-pointer text-black rounded-full text-2xl'>
                        <FcPrint ></FcPrint>
                    </div>
                    <div className='p-7 hover:bg-[#99dbe9] duration-500 bg-[#E7FAFE] cursor-pointer text-black rounded-full text-2xl'>
                        <IoShareOutline></IoShareOutline>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Health;