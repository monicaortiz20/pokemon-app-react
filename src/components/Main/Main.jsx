import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Search from './Search';
import Form from './Form';
import Details from './Details';


  
function Main() {
    return (
      <main>
          <Routes>
            <Route element={<Search/>} path="/"/>
            <Route element={<Search/>} path="/search"/>
            <Route element={<Form/>} path="/new"/>
            <Route element={<Details/>} path="/pokemon/:id"/>
          </Routes>
      </main>
    )
}

export default Main;