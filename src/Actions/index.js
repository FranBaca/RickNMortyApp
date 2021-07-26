import axios from "axios"
export const character = "GET_CHARACTERS"


export const getCharacters=(name,species,page,status,id) =>{
    return async(dispatch)=>{
        console.log(page)
        if(name){
            var character = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        }
        else if(species){
             character = await axios.get(`https://rickandmortyapi.com/api/character/?species=${species}`)
        }
        else if(status) {
             character =  await axios.get(`https://rickandmortyapi.com/api/character/?gender=${status}`)
        }
        else if(id){
            character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        }
        else {
             character = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        }
        dispatch(actionDispatcher(character.data))
    }
    
}

const actionDispatcher=(payload)=>{
    return {
        type: character,
        payload
    }
}