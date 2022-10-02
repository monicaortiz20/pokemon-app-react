import React, { useState} from 'react';

const Card = (pokemon) => {

  // const [poke, setPoke] = useState(pokemon.value)

  // const {name, id } = poke;
  // const type = poke.types.type.name;
  // const img = poke.sprites.other.dream_world.front_default;


  // const pokemonObj = {
  //   id: data.id,
  //   name: data.name,
  //   img: data.sprites.front_default,
  //   type: data.types[0].type.name,
  // }

  return (
      <section>
        <h2>Card</h2>
        {/* <h3>Name:{pokemon.name}</h3>
        <div>
          <img src={img} alt={name} />
          <p>#{pokemon.id}</p>
          <p>type: {type}</p>
        </div> */}
      </section>

    
  )
}

export default Card;