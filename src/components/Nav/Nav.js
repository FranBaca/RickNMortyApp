import React from 'react'
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar"
import Logo from "../../Logo.png"
import {Link} from "react-router-dom"
export default function Nav({onSearch}) {

    
    return (
        
        <div className={styles.container}>
            <Link to ="/">
               <img src={Logo} className={styles.image} alt="IMG NOT FOUND" /> 
            </Link>
            <Link to ="/about"><buton>About</buton></Link>
            <div className={styles.objectsNav}>
              <span className={styles.titleSearchBar}>Welcome to the club pal...</span>  
              
            </div>
            <div>
                     <SearchBar  onSearch={onSearch} />
            </div>
       
            
           
        </div>
    )
}
