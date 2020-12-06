import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/HomePage.module.css'

export default function HomePage() {
  return(
    <div className={`column ${styles.["home-page-container"]}`}>
      <div className="column align-center text-center">
        <div className="home-page-heading">
          <span className={styles["hello-icon"]}> 
            <FontAwesomeIcon icon = {faHandSparkles}/> 
          </span>
          <span className="heading-font">Welcome</span>
        </div>
        <div className={`subheading-font ${styles["subtitle-wrp"]}`}>
          <span className="uper-case">Everledger </span> 
          Knows Traceability, Provenance, Authenticity.
        </div>
        <a href="/upload_image" className="btn btn-primary">
          Upload Your Product 
          <span className={styles["btn-arrow-icon"]}>
            <FontAwesomeIcon icon = {faArrowRight}/>
          </span> 
        </a>
      </div>
    </div>
  )
}
