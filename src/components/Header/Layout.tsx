import Link from 'next/link'
import { useState } from "react";
import styles from "./styles.module.scss";
import styles2 from '../../styles/Home.module.css'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import { AiOutlineHome, AiOutlineRead } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { GrCatalog } from 'react-icons/gr'
import { IoMdContact } from 'react-icons/io'
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
  const closeMenu = () => setIsOpen(false);
  return <>
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className={styles.navlogo}><Image src={logo} /* width={250} height={120} */ alt="produto"/></a>
        </Link>
        <ul className={isOpen === false ?
          styles.navmenu : styles.navmenu + ' ' + styles.active}>
          <li className={styles.navitem}>
            <Link href='/'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={closeMenu}><AiOutlineHome className={styles.icon}/>Home</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/produtos'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={closeMenu}><BiShoppingBag className={styles.icon}/>Produtos</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/sobre'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={closeMenu}><AiOutlineRead className={styles.icon}/> Sobre</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/representantes'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={closeMenu}><FaUserFriends className={styles.icon}/> Representantes</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/catalogo'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={closeMenu}><GrCatalog className={styles.icon}/> Catálogo</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href='/contato'>
              <a className={isOpen === false ?
                styles.navlink : styles.navlink + ' ' + styles.active}
                onClick={closeMenu}><IoMdContact className={styles.icon}/> Contato</a>
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
    <div className={isOpen === false ? styles.mascara_menu : styles.mascara_menu + " " + styles.mascara_menu_active} onClick={closeMenu}></div>
    <div className={styles.whatsapp}>
      <Lottie
        options={defaultOptions}
        height={60}
        width={60}
      />
    </div>
    <div className={styles2.container} style={{display: 'none'}}>
      <footer className={styles.footer}>
      </footer>
    </div>
  </>
}