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
                    <div className='flex justify-between items-center mt-10'>
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
                    <div className='flex items-center flex-col'>
                        <div className='p-7 bg-[#E7FAFE] hover:bg-[#99dbe9] duration-500 cursor-pointer text-black rounded-full text-2xl'>
                            <FcPrint ></FcPrint>
                        </div>
                        <p className='font-medium text-black mt-3'>PRINT</p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <div className='p-7 hover:bg-[#99dbe9] duration-500 bg-[#E7FAFE] cursor-pointer text-black rounded-full text-2xl'>
                            <IoShareOutline></IoShareOutline>
                        </div>
                        <p className='mt-3 font-medium text-black'>SHARE</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-20'>
                <div className='col-span-2'>
                    <img className='w-full object-cover rounded-2xl' src="https://i.ibb.co.com/k6M4mDDd/image-26.png" alt="Not Found" />
                </div>
                <div className='col-span-1 bg-[#E7FAFE] rounded-2xl p-8'>
                    <h2 className='text-2xl font-semibold text-black'>Nutrition Information</h2>
                    <div className='mt-6'>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-medium text-black/60'>Calories</p>
                            <p className='text-lg font-semibold text-black'>219.9 kcal</p>
                        </div>
                        <div className='h-0.5 w-full bg-gray-400 my-4'></div>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-medium text-black/60'>Total Fat</p>
                            <p className='text-lg font-semibold text-black'>10.7 g</p>
                        </div>
                        <div className='h-0.5 w-full bg-gray-400 my-4'></div>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-medium text-black/60'>Protein</p>
                            <p className='text-lg font-semibold text-black'>7.9 g</p>
                        </div>
                        <div className='h-0.5 w-full bg-gray-400 my-4'></div>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-medium text-black/60'>Carbohydrate</p>
                            <p className='text-lg font-semibold text-black'>22.3 g</p>
                        </div>
                        <div className='h-0.5 w-full bg-gray-400 my-4'></div>
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-medium text-black/60'>Cholesterol</p>
                            <p className='text-lg font-semibold text-black'>37.4 mg</p>
                        </div>
                        <div className='h-0.5 w-full bg-gray-400 my-4'></div>
                    </div>
                    <p className='text-sm text-center text-black/60 mt-[50%]'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <p className='text-base text-black/60 my-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
};

export default Health;