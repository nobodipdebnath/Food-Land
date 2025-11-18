import React from 'react';
import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';
import Recipes from '../components/Recipes/Recipes';
import Kitchen from '../components/Kitchen/Kitchen';
import Instagram from '../components/Instagram/Instagram';
import Delicious from '../components/Delicious/Delicious';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Recipes></Recipes>
            <Kitchen></Kitchen>
            <Instagram></Instagram>
            <Delicious></Delicious>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;