// @ts-nocheck
import React from 'react';
import Footer from '../../common/Footer';
import Navigation from '../../common/Navigation';
import styles from './home.module.css'
import Hero from '../../Helpers/HomeHelpers/Hero';
import MainFeatures from '../../Helpers/HomeHelpers/MainFeatures';
import MoreFeatures from '../../Helpers/HomeHelpers/MoreFeatures';
import ServicesBox from '../../Helpers/HomeHelpers/ServicesBox';
const Home = () => {
    return (
        <div className={`${styles.home_container}`}>
            <Navigation />
            <Hero/>
            <MainFeatures/>
            <MoreFeatures/>
            <ServicesBox/>
            <Footer />
        </div>
    );
};

export default Home;
