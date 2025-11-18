import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';


const Recipes = () => {
    const data = useLoaderData();
    const newData = data.slice(0, 9);
    // console.log(data);
    return (
        <div className='my-20'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-semibold text-5xl text-black mb-6'>Simple and tasty recipes</h1>
                <p className='text-base text-black/60 text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-24'>
                {
                    newData.map((card, idx) => <Card key={idx} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Recipes;