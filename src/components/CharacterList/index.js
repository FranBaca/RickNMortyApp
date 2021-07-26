import React from "react";
import { Link } from "react-router-dom";
import styles from "./CharacterList.module.css"
export default function CharCard({ char }) {
  return (
    <div className={styles.containerList} >
        <img src={char.image} className={styles.charImage}alt="profile pic" />
      <div>
      <p className={styles.charName}>{char.name}</p>
      <p className={styles.charSpecies}>{char.species}</p>
      </div>
      
    </div>
  );
}