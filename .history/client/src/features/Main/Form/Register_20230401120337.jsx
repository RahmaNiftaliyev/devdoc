// @ts-nocheck
import React from 'react';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import styles from './contactus.module.css';
const Register = () => {
    return (
        <div className={`${styles.Register_form}`}>
            <Navigation />
            <div className={`${styles.form_container}`}>
                <div className={`${styles.form_box}`}>
                    <h3>Create Your Account</h3>
                    <div className={`${styles.signin_button_box}`}>
                        <button className={`${styles.signin_button_facebook}`}>
                            FaceBook
                        </button>
                        <button className={`${styles.signin_button_github}`}>
                            GitHub
                        </button>
                        <button className={`${styles.signin_button_google}`}>
                            Google
                        </button>
                    </div>
                    <div className={`${styles.signin_or_email}`}>
                        <p>Or register with email</p>
                    </div>
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="email" placeholder="Email" />
                        <div className={`${styles.input_box}`}>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <input
                                type="password"
                                name="confirm_password"
                                placeholder="Repeat Password"
                            />
                        </div>
                        <input type="checkbox" name="checkbox"/>
                        <label htmlFor="checkbox">I agree to the terms and conditions</label>
                        <button className={`${styles.register_button}`}>

                            Cont
                        </button>
                    </form>
                </div>
                <div className={`${styles.form_content}`}></div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
