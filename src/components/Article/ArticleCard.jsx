import React from 'react';

const ArticleCard = ({card}) => {
    console.log(card);
    const {title, image, author, excerpt, date, authorImage} = card;
    return (
        <div className='flex gap-10 items-center'>
            <img className='rounded-2xl' src={image} alt="Not Found" />
            <div>
                <h1 className='text-2xl font-semibold text-black'>{title}</h1>
                <p className='text-base mt-4 text-black/60 '>{excerpt}</p>
                <div className='flex items-center gap-10 mt-8'>
                    <div className='flex items-center gap-2'>
                        <img className='h-10 w-10 object-cover rounded-full' src={authorImage} alt="not found" />
                        <h4 className='text-base font-bold text-black'>{author}</h4>
                    </div>
                    <div className='h-10 w-[1px] bg-gray-200'></div>
                    <p className='text-sm text-black/60'>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;