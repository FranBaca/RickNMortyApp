import React from "react";
import styles from "./Home.module.css";
import Logo from "../../Logo.png"
import { Link  } from "react-router-dom";

export default function HomePage() {
  return (
      <div>
        
          <img className={styles.LogoHome} src={Logo} alt="IMG NOT FOUND"  />
        
          
        
        <div><Link  to="/chars" className={styles.buttonHome}>Let's get started!</Link>
        </div>
      </div>
      
  
  );
}