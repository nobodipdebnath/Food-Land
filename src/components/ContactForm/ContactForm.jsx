import React from 'react';
import contactIMage from '../../assets/images/ContactForm.png'

const ContactForm = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-semibold text-black text-center'>Contact Us</h2>
            <div className='grid grid-cols-3 gap-10 mt-20'>
                <div className='col-span-1'>
                    <img className='w-full object-cover' src={contactIMage} alt="Not Found" />
                </div>
                <form className='col-span-2' action="">
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='flex flex-col'>
                            <label className='text-sm font-medium text-black/60' htmlFor="">NAME</label>
                            <input type="text" className='py-4 px-5 border border-gray-200 rounded-xl outline-none mt-3' placeholder='Enter Your Name' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm font-medium text-black/60' htmlFor="">EMAIL ADDRESS</label>
                            <input type="text" className='py-4 px-5 border border-gray-200 rounded-xl outline-none mt-3' placeholder='Enter Your Name' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-10 mt-6'>
                        <div className='flex flex-col'>
                            <label className='text-sm font-medium text-black/60' htmlFor="">SUBJECT</label>
                            <input type="text" className='py-4 px-5 border border-gray-200 mt-3 rounded-xl outline-none mt-3' placeholder='Subject' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm font-medium text-black/60' htmlFor="">ENQUIRY TYPE</label>
                            <input type="text" className='py-4 px-5 border border-gray-200 mt-3 rounded-xl outline-none mt-3' placeholder='Advertising' />
                        </div>
                    </div>
                    <div className='mt-6 flex flex-col'>
                        <label  className='text-sm font-medium text-black/60' htmlFor="">MESSAGE</label>
                        <textarea className='outline-none border border-gray-200 rounded-xl mt-3' rows={5} cols={5}></textarea>
                    </div>
                    <div className='mt-12'>
                        <button className='py-4 px-10 text-white font-semibold text-base bg-black rounded-xl cursor-pointer' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;