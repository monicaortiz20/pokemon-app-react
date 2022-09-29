import React, { useContext } from 'react';
import { pokemonContext } from '../../../../context/pokemonContext';


const Card = () => {

  const {data } = useContext(pokemonContext)
  let pokemonData = [data].flat();
  // let cardData = [];

  return (
    pokemonData.map (datos => (
      <section>
        <div>
          { datos.img ? <img src={datos.img} alt="pokemon" /> : null }
          { datos.id ? <p>ID: {datos.id}</p> : null }
          { datos.name ? <h3>Nombre: {datos.name}</h3> : null }
        </div>
      </section>

    ))
  )
}

export default Card