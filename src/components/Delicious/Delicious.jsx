import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';

const Delicious = () => {
    const data = useLoaderData();
    const newData = data.slice(9, 17);
    return (
        <div className='my-20'>
            <div className='flex justify-between items-center'>
                <h1 className='text-5xl font-bold text-black'>Try this delicious recipe <br />to make your day</h1>
                <p className='text-base text-black/60'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-20'>
                {
                    newData.map((card, idx) => <Card key={idx} card={card} ></Card>)
                }
            </div>
        </div>
    );
};

export default Delicious;