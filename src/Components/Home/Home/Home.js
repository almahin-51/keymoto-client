import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Performance from '../Performance/Performance';
import Products from '../Products/Products';
import Reviewers from '../Reviewers/Reviewers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Reviewers></Reviewers>
            <Performance></Performance>
        </div>
    );
};

export default Home;