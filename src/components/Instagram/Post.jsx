import React from 'react';
import { MdVerified } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiBookmarkLine } from "react-icons/ri";
import { PiDotsThreeOutline } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { GoHeart } from "react-icons/go";

const Post = ({post}) => {
    const {caption, date, image, likes, location, likedBy, username, author, user} = post;
    return (
        <div className='bg-white rounded-xl'>
            <div className='flex justify-between items-center p-2'>
                <div className='flex items-center gap-2'>
                    <img className='h-10 w-10 rounded-full object-cover' src={author} alt="not Found" />
                    <div>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-[#262626] text-base font-semibold'>{username}</h1>
                            <MdVerified className='text-blue-600'></MdVerified>
                        </div>
                        <p className='text-sm text-black/60'>{location}</p>
                    </div>
                </div>
                <div>
                    <HiDotsHorizontal className='text-2xl cursor-pointer '></HiDotsHorizontal>
                </div>
            </div>
            <img className='object-cover w-full' src={image} alt="Not Found" />
            <div className='p-3'>
                <div className='flex items-center justify-between py-3'>
                    <div className='flex gap-4 text-2xl'>
                        <GoHeart className='cursor-pointer'></GoHeart>
                        <FiMessageSquare className='cursor-pointer'></FiMessageSquare>
                        <FaRegPaperPlane className='cursor-pointer'></FaRegPaperPlane>
                    </div>
                    <div className='text-2xl'>
                        <PiDotsThreeOutline className='cursor-pointer'></PiDotsThreeOutline>
                    </div>
                    <div className='text-2xl'>
                        <RiBookmarkLine className='cursor-pointer'></RiBookmarkLine>
                    </div>
                </div>
                <div className='flex gap-1 items-center'>
                    <img className='h-6 w-6 object-cover rounded-full' src={user} alt="Not Found" />
                    <p className='text-base text-black/80'>Liked By <span className='font-semibold text-black'>{likedBy}</span> and <span className='font-semibold text-black'>{likes}</span></p>
                </div>
                <p className='text-black/80 mt-3'><span className='text-base font-semibold text-black'>{username}</span>{caption}</p>
                <p className='mt-3 text-base text-black/60'>{date}</p>
            </div>
        </div>
    );
};

export default Post;