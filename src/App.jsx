import {React, useState} from 'react';
import './App.css';
import ItemListContainer from './component/itemListContainer/itemListContainer';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Navbar from './component/Navbar/Navbar';
import Counter from './component/Counter/Counter';
const App = () => {

  // const [cont, setCont] = useState(0); 
  // function contador (operacion) {
  //   if (operacion == '+') {
  //     setCont( cont + 1)
  //   } else {
  //     setCont (cont - 1)
  //   }
  // }

  return (
    <div className="App">
      <Navbar />
      {/* <p> 
        Contador: {cont}
      </p>
      <button className='btn btn-primary' onClick={() => 
        contador("+")} >
        +
      </button>
      <button className='btn btn-secondary' onClick={() => 
        contador("-")} >
        -
      </button> */}
      <ItemListContainer title="Esencial jeans" />
      <AiOutlineShoppingCart className='icon'  />
    </div>
  );
}

export default App;
