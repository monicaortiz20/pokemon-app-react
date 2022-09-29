import React, { useContext } from 'react';
import { pokemonContext } from '../../../../context/pokemonContext';


const Card = () => {

  const {data } = useContext(pokemonContext)


  return (
    pokemonData.map (datos => (    ))
    <p>POKECARD - no pinta</p>
      <section>
        <div>
          { datos.img ? <img src={datos.img} alt="pokemon" /> : null }
          { datos.id ? <p>ID: {datos.id}</p> : null }
          { datos.name ? <h3>Nombre: {datos.name}</h3> : null }
        </div>
      </section>

  )
}

export default Card