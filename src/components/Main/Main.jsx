import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Form from './Form';
import Details from './Details';
import Home from './Home';
import Form from './Form';


  
function Main() {
    return (
      <main>
          <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Search/>} path="/search"/>
            <Route element={<Form/>} path="/new"/>
            <Route path="/pokemon/:id" element={<Details/>}/>
          </Routes>
      </main>
    )
}

export default Main;