import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const NavBar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/recipes'>Recipes</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <nav className='flex justify-between items-center py-10  border-b border-gray-300'>
            <div>
                <Link to='/' className='lobster-regular text-2xl font-bold text-shadow text-black cursor-pointer'>Foodie land <span className='text-secondary'>.</span></Link>
            </div>
            <ul className='flex items-center gap-15 text-base font-medium text-black'>
                {links}
            </ul>
            <div className='flex gap-10 text-xl text-black items-center'>
                <Link to='https://www.facebook.com/profile.php?id=61554300737206' target='_blank'><FaFacebookF></FaFacebookF></Link>
                <Link to='https://x.com/DebnathD46507' target='_blank'><FaTwitter></FaTwitter></Link>
                <Link to='https://www.instagram.com/nobodip.debnath01/' target='_blank' ><FaInstagram></FaInstagram></Link>
            </div>
        </nav>
    );
};

export default NavBar;