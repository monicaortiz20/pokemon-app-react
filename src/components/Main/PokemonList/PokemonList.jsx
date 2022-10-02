import React, { useContext } from 'react';
import { pokemonContext } from '../../../context/pokemonContext';

import Card from './Card/Card';

const PokemonList = () => {

  //traemos el state madre (App.js)
  const { pokemon, setPokemon} = useState(pokemonContext)

//pintamos Cards
  return (
    <div>
      {/* {pokemon.length !== 0 ? pokemon.map((poke, i) => <Card pokemon={poke} key={i} />) : null} */}
    </div>

  )
}

export default PokemonList;