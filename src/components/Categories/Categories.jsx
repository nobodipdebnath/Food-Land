import React from 'react';
import rice from '../../assets/images/rice.png'
import Vegan from '../../assets/images/vagitable.png'
import meat from '../../assets/images/met.png'
import dessert from '../../assets/images/cake.png'
import lunch from '../../assets/images/bread.png'
import Chocolate from '../../assets/images/cokolet.png'

const Categories = () => {
    return (
        <div className='py-20'>
            <div className='flex items-center justify-between'>
                <h1 className='text-black font-bold text-5xl'>Categories</h1>
                <button className='py-4 px-5 bg-[#b2e4ee] duration-500 hover:bg-[#80c7d5] rounded-2xl text-base font-medium text-black cursor-pointer'>View All Categories</button>
            </div>
            <div className='grid grid-cols-6 gap-6 mt-20'>
                <div className='flex bg-[#E7FAFE] justify-center items-center cursor-pointer flex-col shadow-sm hover:shadow-2xl duration-500 rounded-2xl p-10'>
                    <img src={rice} alt="Not Found" />
                    <p className='text-lg font-semibold text-black mt-12'>Rice Cake</p>
                </div>
                <div className='flex bg-[#E7FAFE] justify-center items-center cursor-pointer flex-col shadow-sm hover:shadow-2xl duration-500 rounded-2xl p-10'>
                    <img src={Vegan} alt="Not Found" />
                    <p className='text-lg font-semibold text-black mt-12'>Vegan</p>
                </div>
                <div className='flex bg-[#E7FAFE] justify-center items-center cursor-pointer flex-col shadow-sm hover:shadow-2xl duration-500 rounded-2xl p-10'>
                    <img src={meat} alt="Not Found" />
                    <p className='text-lg font-semibold text-black mt-12'>Meat</p>
                </div>
                <div className='flex bg-[#E7FAFE] justify-center items-center cursor-pointer flex-col shadow-sm hover:shadow-2xl duration-500 rounded-2xl p-10'>
                    <img src={dessert} alt="Not Found" />
                    <p className='text-lg font-semibold text-black mt-12'>Dessert</p>
                </div>
                <div className='flex bg-[#E7FAFE] justify-center items-center cursor-pointer flex-col shadow-sm hover:shadow-2xl duration-500 rounded-2xl p-10'>
                    <img src={lunch} alt="Not Found" />
                    <p className='text-lg font-semibold text-black mt-12'>Lunch</p>
                </div>
                <div className='flex bg-[#E7FAFE] justify-center items-center cursor-pointer flex-col shadow-sm hover:shadow-2xl duration-500 rounded-2xl p-10'>
                    <img src={Chocolate} alt="Not Found" />
                    <p className='text-lg font-semibold text-black mt-12'>Chocolate</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;