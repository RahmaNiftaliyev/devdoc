// @ts-nocheck
import React from 'react';
import styles from './homehelper.module.css';
import HeroSvg from './assets/hero_svg.svg';
import HeroPagination from './HeroPagination';
const Hero = () => {
    return (
        <div className={`${styles.hero}`}>
            
            <HeroPagination />
        </div>
    );
};

export default Hero;
