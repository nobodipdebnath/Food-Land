import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

const Article = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('about.json')
        .then(res => res.json())
        .then(result => setData(result));
    }, [])
    return (
        <div className='flex flex-col gap-8'>
            {
                data.map((card, idx) => <ArticleCard key={idx} card={card} ></ArticleCard>)
            }
        </div>
    );
};

export default Article;