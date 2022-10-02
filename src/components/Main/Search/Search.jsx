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


  const [ poke, setPoke ] = useState("") //para pintar cada pokemon que buscamos en Search

  const getPokemon = async () => {

    try {
      //destructuramos el obj que obtenemos con axios
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLocaleLowerCase()}`);

      const pokemonObj = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        firstMove: data.moves[0].move.name,
        secondMove: data.moves[1].move.name,
        type: data.types[0].type.name,
        experience: data.base_experience
      }

      if (!pokemon.map(poke => poke.name).includes(debouncedText)) { // condicional para que no se repitan los pokemon ya buscados
        setPokemon([pokemonObj, ...pokemon]) //seteamos el estado "madre" de APP.js
        setPoke(pokemonObj)//seteamos el pokemon que buscamos para que se pinte en Search

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

  }, [debouncedText, poke]); //componentDidUpdate. 


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
        {/* <div>{pokemon.length !== 0 ? pokemon.map((poke, index) => <Card pokemon={poke} key={index} />) : null}</div> */}
        <div>
          {poke !== "" 
          ? <div> 
              <div>
                <img src={poke.img} alt={poke.name} />
              </div>
              <div> 
                <h2>{poke.name}</h2>
                <p>{poke}</p>
              </div>
              <div>
                <>Attacks:</>
                  <p>{poke.firstMove}</p>
                  <p>{poke.secondMove}</p>
              </div>
              <div>
                <h4>Type:</h4>
                <p>{poke.type}</p>
              </div>
            </div>
            : null}
        </div>
      </div>
    </section>
  )
}

export default Search