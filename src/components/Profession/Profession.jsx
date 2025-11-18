import React from 'react';
import user from '../../assets/images/headeruser.png'
import banner from '../../assets/images/about-1.png'

const Profession = () => {
    const today = new Date();
    const din = String(today.getDate()).padStart(2, '0');
    const mash = String(today.getMonth() + 1).padStart(2, '0');
    const bochor = today.getFullYear();

    return (
        <div className='mt-10'>
            <h1 className='text-black font-semibold text-[64px] text-center'>Full Guide to Becoming a Professional Chef</h1>
            <div className='flex justify-center items-center mt-4 gap-25'>
                <div className='flex gap-2 items-center'>
                    <img className='h-12 w-12 object-cover rounded-full' src={user} alt="" />
                    <p className='font-semibold text-base text-black'>Nobodip Debnath</p>
                </div>
                <p className='text-base font-medium text-black/60'>{`${din} / ${mash} / ${bochor}`}</p>
            </div>
            <p className='text-base container mx-auto text-center text-black/60 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
            <img className='w-full py-16' src='https://i.ibb.co.com/xtWQsKn6/Mask-Group.png' alt="" />
        </div>
    );
};

export default Profession;