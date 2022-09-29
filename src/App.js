
import '../src/styles/styles.scss';

import React, { useContext, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { pokemonContext } from './context/pokemonContext';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
const [pokemon, setPokemon] = useState([])

const pokeData ={
  pokemon, 
  setPokemon
}


  return (
    <pokemonContext.Provider value={pokeData}>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
      </pokemonContext.Provider>
  );
}

export default App;