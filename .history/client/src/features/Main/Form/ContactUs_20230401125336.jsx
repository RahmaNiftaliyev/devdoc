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
              <div className={styles.form_box}>
                  <form>
                      <input type="text" name="name" placeholder="What is your name? *" />
                      <input
                          type="email"
                          name="email"
                          placeholder="What it your email? *"
                      />
                      <input
                          type="number"
                          name="number"
                          placeholder="What is your phone number?"
                      />
                      <input
                          type="text"
                          name="companiy"
                          placeholder="What is your company?"
                      />
                      <textarea
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder="Write your message here"
                      ></textarea>
                      <div className={`${styles.checkBox}`}>
                          <input type="checkbox" name="checkbox" />
                          <label htmlFor="checkbox">
                              I agree to the terms and conditions
                          </label>
                      </div>
                      <button>Send Messages</button>
                  </form>
              </div>
          </div>
          <Footer />
      </div>
  );
}

export default ContactUs