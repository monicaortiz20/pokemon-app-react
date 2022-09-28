import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { Link } from 'react-router-dom';

import logo from '../../../assets/poke-logo.png';


function Pokelist() {

  const { loading, result } = useFetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');



  return <section>
    <img className='poke-logo' src={logo}/>
    <div>
      {loading ? "" : result.results.map((pokemon, i) =>
        <div> <> <Link to={'/pokemon/' + i }> <h2 id={pokemon[i]}>{pokemon.name}</h2> <img src={pokemon.url}/></Link> </> </div>
      )}
    </div>
  </section>

}

export default Pokelist;
