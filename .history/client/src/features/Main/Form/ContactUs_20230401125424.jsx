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
              <div className={styles.contactus}></div>
          </div>
          <Footer />
      </div>
  );
}

export default ContactUs