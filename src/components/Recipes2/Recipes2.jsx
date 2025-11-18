import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Recipes2 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('food.json')
        .then(res => res.json())
        .then(result => {
            const newData = result.slice(10, 14);
            setData(newData);
        });
    },[])
    console.log(data)
    return (
        <div className='mb-20 pt-20'>
            <h1 className='text-4xl font-semibold text-black text-center'>You may like these recipe too</h1>
            <div className='grid grid-cols-4 gap-6 mt-20'>
                {
                    data.map((card, idx) => <Card card={card} key={idx}></Card>)
                }
            </div>
        </div>
    );
};

export default Recipes2;