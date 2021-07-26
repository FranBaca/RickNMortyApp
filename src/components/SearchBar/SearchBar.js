import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCharacters } from '../../Actions';
import styles from "./SearchBar.module.css";

export default function SearchBar() {
    const [name, setName]=useState("")
    const dispatch = useDispatch()


    function handleChange (event){
        setName(event.target.value)
    }

    function handleSubmit(event){
        console.log(name)
        event.preventDefault()
        dispatch(getCharacters(name))
    }
    
    return (
        <div className={styles.container}>
             <form className={styles.container} onSubmit={handleSubmit}>
            <input className={styles.containerSearch}
            type="text"
            placeholder="You search names..."
            value={name}
            onChange={handleChange}
            />
          <button className={styles.searchButton} id="button" type="submit" value="Agregar">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg></button>
            </form>
        </div>
    )
}


