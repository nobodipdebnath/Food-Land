import React from 'react';
import Tasty from '../Tasty/Tasty';

const Ingredients = () => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            <div className='col-span-2'>

            </div>
            <div className='col-span-1'>
                <Tasty></Tasty>
            </div>
        </div>
    );
};

export default Ingredients;