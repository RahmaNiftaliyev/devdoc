// @ts-nocheck
import React from 'react';
import styles from './homeHelpers.module.css';

const Hero = () => {
    return (
        <div className={`${styles.hero}`}>
            <div className={`${styles.hero_content}`}>
                <h1></h1>
                <p></p>
                <div className={`${styles.hero_button_box}`}></div>
            </div>
            <div className={`${styles.hero_img}`}></div>
        </div>
    );
};

export default Hero;
