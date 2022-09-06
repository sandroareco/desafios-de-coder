import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {ItemListContainer}  from './component/itemListContainer/itemListContainer';
import { Navbar } from './component/Navbar/Navbar';
import {ItemDetailContainer} from './component/ItemDetailContainer/ItemDetailContainer';



const App = () => {

    return (
      <BrowserRouter>
      <div className="App">

      <Navbar/>

        <Routes>
        
         <Route path='/' element={  <ItemListContainer  /> } />
         <Route path='/productos' element={  <ItemListContainer  /> } />
         <Route path='/detalles/:id' element={ <ItemDetailContainer /> } />
    
        </Routes>
      </div>
 
    </BrowserRouter>
  );
}

export default App;
