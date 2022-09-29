import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { Link } from 'react-router-dom';

import logo from '../../../assets/poke-logo.png';

const Home = () => {
  // const { loading, result } = useFetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');



  return <section>
    <img className='poke-logo' src={logo}/>
    <div>
      {/* {loading ? null : result.results.map((pokemon, i) =>
        <div> <> <Link to={'/pokemon/' + i }><img src={pokemon.url}/><h2 id={pokemon[i]}>{pokemon.name}</h2></Link> </> </div>
      )} */}
    </div>
  </section>
}

export default Home