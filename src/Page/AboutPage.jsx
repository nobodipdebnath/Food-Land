import React from 'react';
import Contact from '../components/Contact/Contact';
import Recipes2 from '../components/Recipes2/Recipes2';
import Profession from '../components/Profession/Profession';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import About from '../components/About/About';

const AboutPage = () => {
    return (
        <div>
            <Profession></Profession>
            <div className='grid grid-cols-4 gap-6 items-start container mx-auto'>
                <div className='col-span-3'>
                    <About></About>
                </div>
                <div className='col-span-1 flex justify-center items-center'>
                    <div className='flex flex-col gap-6 justify-center items-center text-xl'>
                        <h1 className='font-semibold text-black'>SHARE THIS ON:</h1>
                        <FaFacebookF className='cursor-pointer'></FaFacebookF>
                        <FaInstagram className='cursor-pointer'></FaInstagram>
                        <FaTwitter className='cursor-pointer'></FaTwitter>
                    </div>
                </div>
            </div>
            <Contact></Contact>
            <Recipes2></Recipes2>
        </div>
    );
};

export default AboutPage;