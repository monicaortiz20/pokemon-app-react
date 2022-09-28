
import '../src/styles/styles.scss';

import React from 'react';
// import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
// import { pokemonContext } from './context/pokemonContext';


import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  //declaramos estado:
  // const [pokemon, setPokemon] = useState([]);

  // const newPokemon = (pokemon) => {
  //   setPokemon([...pokemon, newPokemon])
  // }

  // const addPokemon = (pokemon) => {
  //   setPokemon(pokemon)
  // }

  // //exportamos info:
  // const pokeData = {
  //   pokemon,
  //   newPokemon,
  //   addPokemon
  // }

  return (
    <BrowserRouter>
      <Header />
      {/* <pokemonContext.Provider value={pokeData}> */}
        <Main />
      {/* </pokemonContext.Provider> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;