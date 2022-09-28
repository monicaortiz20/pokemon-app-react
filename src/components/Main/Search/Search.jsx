import React, { useState, useContext, useEffect} from 'react';
import { pokemonContext } from '../../../context/pokemonContext';

import axios from 'axios';

import Card from './Card/Card';

const Search = () => {
 
  //estados
  const { data, setData } = useContext(pokemonContext);
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(false);

  const arrayAll = [] //vamos metiendo todo aquí

    useEffect(() => {
      if(pokemon != null) {
        async function getPokemon () {

          if (data.length === 0) {
            try {
              const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
              //para acceder a los types hacemos otro fetch a .forms del obj anterior
              const resp = await axios.get(`${response.data.forms[0].url}`)

              const pokeObj = {
                Image: response.data.sprites.other.dream_world,
                Name: response.data.name,
                ID: response.data.id,
                typeOne: resp.data.types[0]. type.name
              }

              //para acceder al type2, el length tiene que ser >1:
              if(resp.data.types.length > 1) {
                pokeObj.typeTwo = resp.data.types[1].type.name
              }

              setData(pokeObj) //le pasamos el obj del pokemon
              setLoading(true) //ya ha cargado

            } catch (error) {
              console.log(error)
            }
          }
        }
      }
    })
  
  return (
    <section>
      <div>
      <h2 htmlFor="search">Search your pokemon!</h2>
      <input type="text" name="search" id="search" onChange={(e) => debounced(e.target.value)} />
      <div id="cardContainer">{loading ? <Card /> : null}
      </div>
    </div>
    </section>
  )
}

export default Search