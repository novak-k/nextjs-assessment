import React from 'react'
import styles from './footer.module.css'
// import Image from 'next/image';
import Link from 'next/link';
import { IconMail, IconPhoneCall, IconLocation } from '@tabler/icons-react';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>Logo Here</Link>
      <hr className={styles.line}/>

      <div className={styles.textContainer}>
        <div className={styles.reachUsContainer}>
          <div className={styles.textTitle}>Reach us</div>

            <a href={`tel:${'+1012 3456 789'}`} className={styles.textItem}>
              {/* <Image src={'/call.svg'} width={18} height={18} className={styles.icon} alt="phone" /> */}
              <IconPhoneCall size={18} stroke="1.3" className={styles.icon}/>
              +1012 3456 789
            </a>

            <a href={`mailto:${'demo@gmail.com'}`} className={styles.textItem}>
              {/* <Image src="/email.svg" width={18} height={18} className={styles.icon} alt="email" /> */}
              <IconMail size={18} stroke="1.3" className={styles.icon}/>
              demo@gmail.com
            </a>

            <a href={'https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+USA/@42.3467604,-71.0786931,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r?entry=ttu'} 
              className={styles.textItem}
            > 
              {/* <Image src="/location.svg" width={18} height={18} className={styles.icon} alt="adress" /> */}
               <IconLocation size={18} stroke="1.3"className={styles.icon}/>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </a>
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
