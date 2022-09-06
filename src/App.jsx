import React from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {ItemListContainer}  from './component/itemListContainer/itemListContainer';
import { Navbar } from './component/Navbar/Navbar';
import {ItemDetailContainer} from './component/ItemDetailContainer/ItemDetailContainer';



const App = () => {

    return (

      
      <div className="App">
        
        <Navbar/>
        <ItemListContainer  />
        <ItemDetailContainer />

      </div>
    //   <BrowserRouter>
    //   <div className="App">

    //   <Navbar/>

    //     <Routes>
        
    //      <Route path='/' element={  <ItemListContainer  /> } />
    //      <Route path='/categoria/:categoria' element={  <ItemListContainer  /> } />
    //      <Route path='/detalles/:id' element={ <ItemDetailContainer /> } />
    
    //     </Routes>
    //   </div>
 
    // </BrowserRouter>
  );
}

export default App;
