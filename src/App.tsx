import React from 'react';
import {  Route, Routes } from 'react-router-dom'


import MainHooks from './Components/Hooks/Main';


function App() {
  return (
    <div>
  
 <Routes>
            <Route path='/Hook' element={ <MainHooks/> } />
 </Routes>
    </div>
  );
}

export default App;
