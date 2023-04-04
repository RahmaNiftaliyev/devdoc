// @ts-nocheck
import React from 'react'
import Footer from '../../common/Footer';
import Navigation from '../../common/Navigation';
import styles from './contactus.module.css';

const ContactUs = () => {
  return (
      <div>
          <Navigation />
          <div className={styles.ContactUs}>
              <h1>Contact Us</h1>
              
            </div>
          <Footer />
      </div>
  );
}

export default ContactUs