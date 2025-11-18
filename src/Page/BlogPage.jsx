import React from 'react';
import Contact from '../components/Contact/Contact';
import Tasty from '../components/Tasty/Tasty';
import Article from '../components/Article/Article';

const BlogPage = () => {
    return (
        <div>
            <div>
                <h1 className='text-[64px] mt-16 font-semibold text-black text-center'>Blog & Article</h1>
                <p className='mt-4 text-base text-black/60 mb-16 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <div className='flex justify-center relative  items-center'>
                    <input type="email" className='py-4.5 px-5 w-[40%]  border rounded-xl outline-none border-gray-300 ' placeholder='Enter Your Email' />
                    <button className='py-3.5 px-10 text-white font-semibold text-base bg-black rounded-lg absolute cursor-pointer right-[30.5%]'>Search</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-20'>
                <div className='col-span-2'>
                    <Article></Article>
                </div>
                <div className='col-span-1'>
                    <Tasty></Tasty>
                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default BlogPage;