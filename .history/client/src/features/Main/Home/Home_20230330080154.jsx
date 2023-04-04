// @ts-nocheck
import React from 'react';
import Footer from '../../common/Footer';
import Navigation from '../../common/Navigation';
import styles from './home.module.css'
const Home = () => {
    return (
        <div className={`${styles.home_container}`}>
            <Navigation />
            <Footer />
        </div>
    );
};

export default Home;
