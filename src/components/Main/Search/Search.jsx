import React, { useState, useEffect, useContext } from 'react';
import { useDebounce } from 'use-debounce';
import { pokemonContext } from '../../../context/pokemonContext';

import axios from 'axios';
import Card from './Card/Card';
import logo from '../../../assets/poke-logo.png';

const Search = () => {

  //estados
  const { pokemon, setPokemon } = useContext(pokemonContext);
  const [input, setInput] = useState("");

  const [debouncedText] = useDebounce(input, 2000); //almacenamos el valor del input
  const [error, setError] = useState(false) // sale cuando buscamos el mismo pokemon
  const [message, setMessage] = useState('')

  // console.log(poke)


  const getPokemon = async () => {

    try {
      //destructuramos el obj que obtenemos con axios
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLocaleLowerCase()}`);

      const pokemonObj = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        type: data.types[0].type.name,
      }

      if (!pokemon.map(poke => poke.name).includes(debouncedText)) { // condicional para que no se repitan los pokemon ya buscados
        setPokemon([pokemonObj, ...pokemon])

      } else {
        handlerError("You have already search this pokemon")
      }


    } catch (error) {
      console.log(error);
    }
    setInput("")// limpiamos el input
  }


  useEffect(() => {
    // const pokeName = poke.map(poke => poke.name)   FALLA, no lee array
    if (debouncedText.length > 0) { // si el input está vacío no busca
      getPokemon()
    }

  }, [debouncedText]); //componentDidUpdate. 


  //funciones handle:
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handlerError = (error) => {
    setMessage(`Error - ${error}`)
    setError(true)
    setTimeout(() => {
      setError(false)
      setMessage("")
    }, 3500);
  }


  return (
    <section>
      <div className='container-search'>
        <div className='container-search'>
          <img src={logo} alt="logo-pokemon" className='img-logo' />
          <h2 htmlFor="search">Search your pokemon!</h2>

        </div>
        <div>
          <input onChange={(e) => handleChange(e)} value={input} placeholder='ninetales' type="text" />
          {error ? <p>{message}</p> : null}
        </div>
        <div>{pokemon.length !== 0 ? pokemon.map((poke, index) => <Card pokemon={poke} key={index} />) : null}</div>
      </div>
    </section>
  )
}

export default Search