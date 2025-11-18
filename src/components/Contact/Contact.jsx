import React from 'react';
import banner from '../../assets/images/contact.png'

const Contact = () => {
    return (
        <div className='my-20 relative'>
            <img className='w-full object-cover pt-20' src={banner} alt="Not Found" />
            <div className='absolute top-[50%] left-[50%] contact'>
                <h1 className='text-5xl font-semibold text-black text-center'>Deliciousness to your inbox</h1>
                <p className='mt-6 text-base text-black/60 text-center'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className='mt-16 relative flex justify-center'>
                    <input className='py-4 px-5 bg-white w-[70%] rounded-xl outline-none' placeholder='Your Email Address' type="email" name="email" />
                    <button className='py-3 px-5 text-base font-semibold text-white bg-black rounded-lg absolute top-1 right-[16%] cursor-pointer'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;