import react from "react";
import Image from 'next/image'
import styles from "../styles/Header.module.css"

export default function Header(){
  return (
    <div className={`row ${styles["header-container"]}`}>
      <a href="#" className="header-logo-link">
        <Image 
          src="/logo.jpg"   
          width="180" 
          height="30" 
          alt="logo" />
      </a>

      <nav >
        <a href="/" className={styles["nav-link"]}>Home</a>
        <a href="/upload_image" className={styles["nav-link"]}>Update Image</a>
      </nav>
    </div>
  )
}
