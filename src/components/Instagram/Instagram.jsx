import React, { useEffect, useState } from 'react';
import Post from './Post';
import { FaInstagram } from "react-icons/fa6";


const Instagram = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('instagram.json')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);
    // console.log(data)
    return (
        <div className='py-20 px-5 rounded-xl bg-[#E7F9FD]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold text-black'>Check out @foodieland on Instagram</h1>
                <p className='text-base text-black/60 mt-6 text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='grid grid-cols-4 gap-6 my-20'>
                {
                    data.map((post, idx) => <Post key={idx} post={post} ></Post>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <button className='flex items-center gap-2 py-3 px-4 bg-black rounded-xl text-base font-medium text-white cursor-pointer'>
                    <p>Visit Our Instagram</p>
                    <FaInstagram className='text-xl'></FaInstagram>
                </button>
            </div>
        </div>
    );
};

export default Instagram;