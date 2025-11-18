import React from 'react';
import { MdTimer } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Card = ({card}) => {
    const{title, time, category, image} = card;
    return (
        <div className={`${time ? "p-5 border border-gray-100 relative bg-[#E7F9FD] rounded-xl" : "p-0"}`}>
            <img className={`${time ? "w-full object-cover rounded-xl": "rounded-none h-full "}`} src={image} alt={category} />
            <h2 className='text-xl font-semibold text-black my-4'>{title}</h2>
            {
                time && <div className='flex items-center gap-3'>
                    <button className='flex gap-1 items-center py-3 px-5 bg-white rounded-full cursor-pointer'><MdTimer/>{time}</button>
                    <button className='gap-1 flex items-center py-3 px-5 bg-white rounded-full cursor-pointer'><MdRestaurant/>{category}</button>
                </div>
            }
            {
                time && <button className='text-2xl p-3 cursor-pointer text-secondary absolute top-[8%] right-[8%] bg-white rounded-full ' ><MdFavorite className=''></MdFavorite></button>
            }
        </div>
    );
};

export default Card;