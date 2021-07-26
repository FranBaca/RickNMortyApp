import React, { useEffect, useState } from 'react'
import CharacterCard from "./index";
import styles from "./CharacterList.module.css"
import {Link} from "react-router-dom";
import {getCharacters} from "../../Actions/index"
import Nav from "../Nav/Nav"
import next from "../../logos/next.png"
import back from "../../logos/back.png"
import { useDispatch, useSelector } from 'react-redux';
export default function CharacterList() {
     const chars = useSelector(state => state.characters)
     let [page, setPage] = useState(0)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCharacters())
    },[dispatch])

    const handleClickNext=()=>{
        
        if(page+1 < 36){
            setPage(page+=1)
            dispatch(getCharacters(null,null,page+=1))
        }
    }

    const handleClickBack=()=>{
        if(page-1 >= 0){
            setPage(page-1)
            dispatch(getCharacters(null,null,page-1))
        }
    }

    return (
        <div >
           
            <Nav  />
            <div className={styles.charContainer}>
                
            {chars?.results?.map(char =>{
               return <Link to={`/chars/${char.id}`}>
               <CharacterCard key={char.id} char={char} />
               </Link>
            })}

            
            </div>
            <div style={{marginTop:"35px" }}>
                <button style={{backgroundColor:"#ADCBB6", borderRadius:"25px",cursor:"pointer"}} onClick={handleClickBack}><img style={{width:"45px"}} src={back}/></button>
                <button style={{backgroundColor:"#8AAABC", borderRadius:"25px",cursor:"pointer"}} onClick={handleClickNext} ><img style={{width:"45px"}} src={next}/> </button>
            </div>
         
        </div>
    )
}


   

