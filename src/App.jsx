import {React, useState} from 'react';
import './App.css';
import ItemListContainer from './component/itemListContainer/itemListContainer';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Navbar from './component/Navbar/Navbar';
import Counter from './component/Counter/Counter';
import Productos from './component/Productos';


const App = () => {

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <Productos/>
      <AiOutlineShoppingCart className='icon'  />
    </div>
  );
}

export default App;
