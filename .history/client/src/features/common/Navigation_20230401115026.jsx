// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './common.module.css';

const Navigation = () => {
    return (
        <div className={`${styles.nav_container}`}>
            <div className={`${styles.nav_box}`}>
                <h1>DevDoctor{"'"}s</h1>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Contact Us</Link>
                    </li>
                    <li>
                        <Link>Help</Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles.sign_box}`}>
                <button className={`${styles.login_button}`}>Login</button>
                <button className={`${styles.register_button}`}>
                    <Link>Register</Link>
                </button>
            </div>
        </div>
    );
};

export default Navigation;
