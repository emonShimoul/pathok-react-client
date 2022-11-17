import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Categories></Categories>
            <Footer></Footer>
        </div>
    );
};

export default Home;