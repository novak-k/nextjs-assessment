import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link';
import ReachUs from '../reachUs/reachUs';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>Logo Here</Link>
      <hr className={styles.line}/>

      <div className={styles.textContainer}>
        <div className={styles.reachUsContainer}>
          <div className={styles.textTitle}>Reach us</div>
          <ReachUs />
          </div>

        <div className={styles.companyContainer}>
          <div className={styles.textTitle}>Company</div>
          <Link href='/about' className={styles.textItem}>About</Link>
          <Link href='/contact' className={styles.textItem}>Contact</Link>
          <Link href='/blog' className={styles.textItem}>Blog</Link>
        </div>

        <div className={styles.legalContainer}>
          <div className={styles.textTitle}>Legal</div>
          <Link href='/' className={styles.textItem}>Privacy Policy</Link>
          <Link href='/' className={styles.textItem}>Terms & Services</Link>
          <Link href='/' className={styles.textItem}>Terms of Use</Link>
          <Link href='/' className={styles.textItem}>Refund Policy</Link>
        </div>

        <div className={styles.quickContainer}>
          <div className={styles.textTitle}>Quick Links</div>
          <Link href='/' className={styles.textItem}>Techlabz Keybox</Link>
          <Link href='/' className={styles.textItem}>Downloads</Link>
          <Link href='/' className={styles.textItem}>Forum</Link>
        </div>

        <div className={styles.joinContainer}>
          <div className={styles.textTitle}>Join Our Newsletter</div>
          <div className={styles.textInputWrapper}>
            <input type='email' placeholder='Your email address' className={styles.textInput}/>
            <button className={styles.textInputBtn}>Subscribe</button>
          </div>
          <p className={styles.textJoin}>*  Will send you weekly updates for your better tool management.</p>
        </div>
      </div>

    </div>
  )
}

export default Footer;
