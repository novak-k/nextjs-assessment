'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/darkModeToggle'
import Image from 'next/image'
import MobileMenu from '../mobileMenu.jsx/mobileMenu'

const links = [
  {
    id: 1,
    title:'Home',
    url:'/',
  },
  {
    id: 2,
    title:'Features',
    url:'/features',
  },
  {
    id: 3,
    title:'Blog',
    url:'/blog',
  },
   {
    id: 4,
    title:'Shop',
    url:'/shop',
  },
  {
    id: 5,
    title:'About',
    url:'/about',
  },
  {
    id: 6,
    title:'Contact',
    url:'/contact',
  },
]

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const toggleBurger = () => {
    setBurgerActive(prev => !prev);
  };

  const closeMobileMenu = () => {
    setBurgerActive(true);
  };

  return (
    <div className={styles.container}>
     <Link href='/' className={styles.logo}>Logo Here</Link>
     <div className={styles.links}>
      <DarkModeToggle />
      {links.map(link => (
        <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
      ))}
     </div>

      <div className={styles.btnWrap}>
          <button 
          className={styles.login}
        >
          <Image src={'/user.svg'} width={18} height={18} className={styles.icon} alt="user" />
        </button>

        <button 
          className={styles.cart}
        >
        <Image src={'/cart.svg'} width={18} height={18} className={styles.icon} alt="cart" />
        </button>
        
        <div className={styles.burger} onClick={toggleBurger}>
          <div className={styles['burger-icon']}></div>
            {burgerActive && <MobileMenu links={links} onClose={closeMobileMenu}/>}
        </div>
      </div>
  
    </div>
  
  )
}

export default Navbar;
