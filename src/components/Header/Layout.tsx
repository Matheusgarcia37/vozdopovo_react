import Link from 'next/link'
import { useState } from "react";
import styles from "./styles.module.scss";
import styles2 from '../../styles/Home.module.css'

import whatsapp from '../../lotties/whatsapp.json'
import Lottie from 'react-lottie';
export default function Layout({ children }: { children: React.ReactNode }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: whatsapp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return <>
    <header className={styles2.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className={styles.navlogo}>Jr. Agropeças</a>
        </Link>
        <ul className={isOpen === false ?
          styles.navmenu : styles.navmenu + ' ' + styles.active}>
          <li className={styles.navitem}>
            <Link href='/'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={openMenu}>Home</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/Produtos'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={openMenu}>Produtos</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/História'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={openMenu}>História</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/Representantes'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={openMenu}>Representantes</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/Catálogo'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={openMenu}>Catálogo</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/Contato'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={openMenu}>Contato</a>
            </Link>
          </li>
        </ul>
        <div className={isOpen === false ?
          styles.hamburger : styles.hamburger + ' ' + styles.active}
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
    {children}
    {/* {footer} */}
    <div className={styles.whatsapp}>
      <Lottie
        options={defaultOptions}
        height={70}
        width={70}
      />
    </div>
    <div className={styles2.container} style={{display: 'none'}}>
      <footer className={styles.footer}>
      </footer>
    </div>
  </>
}