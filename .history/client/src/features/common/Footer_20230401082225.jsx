// @ts-nocheck
import React from 'react';
import styles from './common.module.css';
import { footerData } from './footerData';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerList = footerData.map((item) => {
        return (
            <div className={`${styles.footer_list_box}`} key={item.id}>
                <h5>{item.title}</h5>
                {item.hasSubmenu &&
                Array.isArray(item.links) &&
                item.links.some((link) => link.name) ? (
                    <ul>
                        {item.links.map((link) => {
                            return (
                                <li key={link.name}>
                                    <Link to={link.link}>{link.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                ) : null}
            </div>
        );
    });

    return (
        <div className={`${styles.footer_container}`}>
            <div className={`${styles.footer_content}`}>
                <h4 className={`${styles.footer_icon}`}>DevDoctor &apos s</h4>
                <p>Don't let failure hold you back – try DevDoctor&apos s and succeed</p>
                <span>© Skyrev Theme 2021</span>
            </div>
            <div className={`${styles.footer_list}`}>
                <div className={`${styles.footer_list_box}`}>{footerList}</div>
            </div>
            <div className={`${styles.footer_social}`}></div>
        </div>
    );
};

export default Footer;
