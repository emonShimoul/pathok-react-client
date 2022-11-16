import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;