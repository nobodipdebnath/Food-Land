import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";


const Article = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('about.json')
        .then(res => res.json())
        .then(result => setData(result));
    }, [])
    return (
        <div>
            <div className='flex flex-col gap-8 mb-20'>
                {
                    data.map((card, idx) => <ArticleCard key={idx} card={card} ></ArticleCard>)
                }
            </div>
            <div className='flex gap-4 items-center justify-center'>
                <button className=' font-semibold px-6 text-lg border-gray-400 cursor-pointer hover:bg-black hover:text-white duration-500 hover:border-black text-black p-4 border rounded-xl'>1</button>
                <button className=' font-semibold px-6 text-lg border-gray-400 cursor-pointer hover:bg-black hover:text-white duration-500 hover:border-black text-black p-4 border rounded-xl'>2</button>
                <button className=' font-semibold px-6 text-lg border-gray-400 cursor-pointer hover:bg-black hover:text-white duration-500 hover:border-black text-black p-4 border rounded-xl'>3</button>
                <button className=' font-semibold px-6 text-lg border-gray-400 cursor-pointer hover:bg-black hover:text-white duration-500 hover:border-black text-black p-4 border rounded-xl'>4</button>
                <button className=' font-semibold px-6 text-lg border-gray-400 cursor-pointer hover:bg-black hover:text-white duration-500 hover:border-black text-black p-4 border rounded-xl'>5</button>
                <button className=' font-semibold px-5 text-lg border-gray-400 cursor-pointer hover:bg-black hover:text-white duration-500 hover:border-black text-black py-5 border rounded-xl'><BsThreeDots></BsThreeDots></button>
                <button className=' font-semibold px-5 text-lg border-gray-400 cursor-pointer hover:bg-black hover:text-white duration-500 hover:border-black text-black py-5 border rounded-xl'><IoIosArrowForward></IoIosArrowForward></button>
            </div>
        </div>
    );
};

export default Article;