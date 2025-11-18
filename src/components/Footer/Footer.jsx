import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Recipes</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>About us</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>
    return (
        <footer className=''>
            <div className='flex justify-between items-center  py-12'>
                <div>
                    <h1 className='lobster-regular text-2xl font-bold text-shadow text-black 
                    cursor-pointer'>Foodie land <span className='text-secondary'>.</span></h1>
                    <p className='text-base text-black/60 mt-3'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                </div>
                <div className='flex list-none items-center gap-15 text-base font-medium text-black'>
                    {links}
                </div>
            </div>
            <div className='h-[1px] w-full bg-gray-300'></div>
            <div className='flex justify-between items-center py-12'>
                <div></div>
                <div className='text-base font-medium text-gray-500'>
                    <p>© 2020 Flowbase. Powered by <span className='text-secondary'>Webflow</span></p>
                </div>
                <div className='flex gap-10 text-xl text-black items-center'>
                    <Link><FaFacebookF></FaFacebookF></Link>
                    <Link><FaTwitter></FaTwitter></Link>
                    <Link><FaInstagram></FaInstagram></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;