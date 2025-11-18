import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Recipes</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>About us</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>
    return (
        <footer className='flex justify-between items-center px-[5%] py-12'>
            <div>
                <h1 className='lobster-regular text-2xl font-bold text-shadow text-black 
                cursor-pointer'>Foodie land <span className='text-secondary'>.</span></h1>
                <p className='text-base text-black/60 mt-3'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>
            <div className='flex list-none items-center gap-15 text-base font-medium text-black'>
                {links}
            </div>
        </footer>
    );
};

export default Footer;