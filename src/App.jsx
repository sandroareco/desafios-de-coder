import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {ItemListContainer}  from './component/itemListContainer/itemListContainer';
import  {Navbar}  from './component/Navbar/Navbar';
import {ItemDetailContainer} from './component/ItemDetailContainer/ItemDetailContainer';




const App = () => {

    return (
     <BrowserRouter> 
     <Routes> 
      <Navbar/>
     <div className="App">
        <Route path='/' element= {<ItemListContainer/>} />
        <Route path='/categoria:categoria' element= {<ItemListContainer/>} />
        <Route path='/detalles:id' element= {<ItemDetailContainer/>} />

      </div>
     </Routes>
     
     </BrowserRouter>
    
  );
}

export default App;
