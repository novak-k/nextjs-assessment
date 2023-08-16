import React from 'react';
import Link from 'next/link';
import styles from './mobileMenu.module.css';

const MobileMenu = ({ links, onClose }) => {
  return (
    <div className={styles.mobileMenuWrapper}>
      <div className={styles.overlay}> 
        <div className={styles.mobileMenu}>
          <div className={styles.wrapperH}>
            <Link href='/' className={styles.logo}>Logo Here</Link>
            <button className={styles.closeButton} onClick={onClose}>
              <span className={styles.closeIcon}></span>
            </button>
          </div>
          {links.map(link => (
            <Link key={link.id} href={link.url} className={styles.mobileLink}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
