// @ts-nocheck
import React from 'react';
import styles from './homehelper.module.css';
import Img1 from './assets/MoreFeatures1.svg';
import Img2 from './assets/MoreFeatures2.svg';
const MoreFeatures = () => {
    return (
        <div className={`${styles.MoreFeatures}`}>
            <div className={`${styles.MoreFeatures_box}`}>
                <div className={`${styles.MoreFeatures_content}`}>
                    <h3></h3>
                    <p></p>
                </div>
                <div className={`${styles.MoreFeatures_img}`}>
                
                </div>
            </div>
            <div className={`${styles.MoreFeatures_box}`}>
                <div className={`${styles.MoreFeatures_img}`}></div>
                <div className={`${styles.MoreFeatures_content}`}>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default MoreFeatures;
