// @ts-nocheck
import React from 'react';
import styles from './homeHelpers.module.css';

const Hero = () => {
    return (
        <div className={`${styles.hero}`}>
            <div className={`${styles.hero_content}`}>
                <h1>Digital currency leads at market in the right amount.</h1>
                <p>
                    Vestibulum faucibus eget erat eget pretium. Donec commodo convallis
                    suscipit orci.{' '}
                </p>
                <div className={`${styles.hero_button_box}`}></div>
            </div>
            <div className={`${styles.hero_img}`}></div>
        </div>
    );
};

export default Hero;
