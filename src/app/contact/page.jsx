import React from 'react'
import styles from './page.module.css'
import ReachUs from '@/components/reachUs/reachUs';
import Image from 'next/image';
import Button from '@/components/button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.desc}>Any question or remarks? Just write us a message!</p>
    
      <div className={styles.wrapper}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.contactTitle}>Contact Information</div>
            <div className={styles.contactDesc}>Say something to start a live chat!</div>
          </div>
        
          <ReachUs />
  
          <div className={styles.socialContainer}>
            <a href={'https://twitter.com/'} className={styles.link} target='_blank'> 
              <Image src="/twitter.svg" width={15} height={15} className={styles.icon} alt="twitter" />
            </a>

            <a href={'https://www.instagram.com/'} className={styles.link} target='_blank'> 
              <Image src="/insta.svg" width={18} height={18} className={styles.icon} alt="insta" />
            </a>

            <a href={'https://www.reddit.com/'} className={styles.link} target='_blank'> 
              <Image src="/discord.svg" width={15} height={15} className={styles.icon} alt="discord" />
            </a>
          </div>

          <div className={styles.elipsWrapper}> 
            <Image src="/elipsBig.svg" width={169} height={169} alt="elipsBig" className={styles.elipsBig}/>
            <Image src="/elipsSm.svg" width={138} height={138} alt="elipsSm" className={styles.elipsSm}/>
          </div>
        </div>

        <div className={styles.formContainer}>
            <form className={styles.form}>
              <div className={styles.inputWrapper}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>First Name</label>
                  <input id="name" type="text" placeholder="John" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="lastName" className={styles.label}>Last Name</label>
                  <input id="lastName" type="text" placeholder="Doe" className={styles.input} />
                </div>
              </div>
        
              <div className={styles.inputWrapper}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input id="email" type="email" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="telNo" className={styles.label}>Phone Number</label>
                  <input id="telNo" type="tel" className={styles.input} />
                </div>
              </div>

            <p className={styles.inquiryTitle}>Select Subject?</p>

            <div className={styles.inquiryWrapper}> 
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox" 
                  id="inq1" 
                  name="Inquiry" 
                  value="inq1" 
                  // checked="checked" 
                  className={styles.checkboxRound}
                />
                <label htmlFor="inq1" className={styles.label}>General Inquiry</label>
              </div>

              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="inq2"
                  name="Inquiry" 
                  value="inq2" 
                  className={styles.checkboxRound}
                />
                <label htmlFor="inq2" className={styles.label}>General Inquiry</label>
              </div>

              <div className={styles.checkboxContainer}>
                <input 
                  type="checkbox" 
                  id="inq3" 
                  name="Inquiry" 
                  value="inq3" 
                  className={styles.checkboxRound}
                />
                <label htmlFor="inq3" className={styles.label}>General Inquiry</label>
              </div>

              <div className={styles.checkboxContainer}>
                <input 
                  type="checkbox" 
                  id="inq4" 
                  name="Inquiry" 
                  value="inq4" 
                  className={styles.checkboxRound}
                />
                <label htmlFor="inq4" className={styles.label}>General Inquiry</label>
              </div>
            </div>

            <div className={styles.textAreaWrapper}>
              <label htmlFor="textArea" className={styles.labelMessage}>Message</label>
              <textarea
                id="textArea"
                className={styles.textArea}
                placeholder="Write your message.."
                rows="1"
              ></textarea>
            </div>

            <div className={styles.formBtnWr}>
              <Button url="#" text="Send Message"/>
            </div>

            <div className={styles.letterWr}>
              <Image src="/letter.svg" width={240} height={220} alt="letter" className={styles.letter}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
