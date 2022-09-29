import React, { useState, useEffect, useContext} from 'react';
import { pokemonContext } from '../../../context/pokemonContext';
import { useDebounce } from 'use-debounce';

import axios from 'axios';
import Card from './Card/Card';

const Search = () => {
 
  //estados
  const [pokemon, setPokemon] = useContext(pokemonContext);
  const [input, setInput] = useState("");
  const [debouncedText] = useDebounce(input, 2000); //almacenamos el valor del input
  const [error, setError] = useState(false) // para poner mensaje de error cuando se repite el pokemon
  const [message, setMessage] = useState('')


  const getPokemon = async()=> {
    
    try{
      // Petición HTTP - destructuramos el obj que obtenemos con axios
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLocaleLowerCase()}`);

      const pokemonObj= { 
        id: data.id,
        name: data.name, 
        type: data.types[0].type.name,
        img: data.sprites.front_default, 
        firstMove: data.moves[0].move.name,
        secondMove: data.moves[1].move.name,
        weight: data.weight
      }

        if(!pokemon.map(poke=>poke.name).includes(debouncedText) ){ // condicional para que no se repitan los pokemon ya buscados
          setPokemon( [pokemonObj,...pokemon] ) //nuevo dato del imput al principio, viejo detras mejor exp User (ux/ui)
        }else{
          handlerError("You have already search this pokemon")
        }


    }catch(error){
       console.log(error);
    }
    setInput("")// limpiamos el input
  }


  useEffect(() => {   
    const pokeName = pokemon.map(poke=>poke.name)
    if( debouncedText.length>0 ){ // si el input está vacío no busca
      getPokemon()
    }
    
  }, [debouncedText]); //equivale a un componentDidUpdate. 
  

  //funciones handle:
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handlerError = (error) =>{
    setMessage(`Error - ${error}`)
    setError(true)
    setTimeout(() => {
      setError(false)
      setMessage("")
    }, 3500);
  }


  
  return (
    <section>
      <div>
      <h2 htmlFor="search">Search your pokemon!</h2>
      <div>
          <input onChange={(e)=>handleChange(e)} value={input}  placeholder='Search your pokemon!'  type="text"/>
          {error ? <p>{message}</p> : ""}
        </div>        
        <div>
        { pokemon.length !== 0 ? pokemon.map((poke, index)=> <Card pokemon={poke} key={index} />) : "" }
      </div>
    </div>
    </section>
  )
}

export default Search