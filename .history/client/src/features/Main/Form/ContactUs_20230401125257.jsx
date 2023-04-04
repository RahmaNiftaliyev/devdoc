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
              <p>
                  Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet
                  nulla sed arcu pulvinar commodo id ligula.
              </p>
              <div></dir>
          </div>
          <Footer />
      </div>
  );
}

export default ContactUs