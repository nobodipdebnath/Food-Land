import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const NavBar = () => {
    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Recipes</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>About us</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>
    return (
        <nav className='flex justify-between items-center py-10 px-[5%]'>
            <div>
                <h1 className='lobster-regular text-2xl font-bold text-shadow text-black cursor-pointer'>Foodie land <span className='text-secondary'>.</span></h1>
            </div>
            <ul className='flex items-center gap-15 text-base font-medium text-black'>
                {links}
            </ul>
            <div className='flex gap-10 text-xl text-black items-center'>
                <Link><FaFacebookF></FaFacebookF></Link>
                <Link><FaTwitter></FaTwitter></Link>
                <Link><FaInstagram></FaInstagram></Link>
            </div>
        </nav>
    );
};

export default NavBar;