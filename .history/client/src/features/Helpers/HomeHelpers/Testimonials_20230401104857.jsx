// @ts-nocheck
import React from 'react'
import styles from './homehelper.module.css'
const Testimonials = () => {
  return (
      <div className={`${styles.Testimonials}`}>
          <h3>What our members said?</h3>
          <p>Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>
          <div className={`${styles.Testimonials_content}`}>
            <div className={`${styles.Testio}`}></div>
          </div>
      </div>
  );
}

export default Testimonials