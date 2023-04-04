// @ts-nocheck
import React from 'react';
import styles from './homeHelpers.module.css';

const Hero = () => {
    return (
        <div className={`${styles.hero}`}>
            <div className={`${styles.hero_content}`}></div>
            <div className={`${styles.hero_svg}`}></div>
        </div>
    );
};

export default Hero;
