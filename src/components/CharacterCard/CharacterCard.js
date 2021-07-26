import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import Logo from "../../Logo.png"
import axios from "axios";
import styles from "./CharacterCard.module.css";


export default function CharacterCard(props) {
   
   const [char, setChar]= useState([]);
   useEffect(() => {
       axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
       .then(res=>{
           setChar(res.data);
           console.log("Response",res);
       })
       .catch(err=>{
           console.log(err.message);
       })
   }, [props.match.params.id])


  //  const statusIcon = () => {
  //   if (props.status === 'Dead') {
  //     return <embed src={logo}></embed>
  //   } else if (props.status === 'unknown') {
  //     return <embed src={logo1}></embed>
  //   } else {
  //     return <embed src={logo3}></embed>;
  //   }
  // };
  // const speciesIcon = () => {
  //   return props.species === 'Alien' ? (
  //     <i className='fas fa-pastafarianism'>???</i>
  //   ) : (
  //     <i className='fas fa-male'>???</i>
  //   );
  // };
    return (
        <div >  

        
        <nav>
        <Link to ="/chars">
           <img src={Logo} className={styles.image} alt="IMG NOT FOUND" /> 
        </Link>
        </nav>
        <div className={styles.body}>

        
        <div className={styles.containerList}>
            <h2 className={styles.nameTitle}>{char.name}</h2>
        <img className={styles.imageChar} src={char.image} alt="profile pic" />
        <p>  Status: {char.status}</p>
        <p> Species: {char.species}</p>
        <p>Gender: {char.gender}</p>
        <p>Origin: {char.origin && char.origin.name}</p>
        </div>
        </div>
        </div>
    )
}

