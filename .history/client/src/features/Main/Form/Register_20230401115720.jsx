// @ts-nocheck
import React from 'react'
import Navigation from '../../common/Navigation'
import Footer from '../../common/Footer'
import styles from './contactus.module.css'
const Register = () => {
  return (
      <div className={`${styles.Register_form}`}>
          <Navigation />
          <div className={`${styles.form_container}`}>
              <div className={`${styles.form_box}`}>
                  <h3>Create Your Account</h3>
                  <div className=''></div>
              </div>
              <div className={`${styles.form_content}`}></div>
          </div>
          <Footer />
      </div>
  );
}

export default Register