
import './App.css';
import ItemListContainer from './component/itemListContainer/itemListContainer';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const App = () => {
  return (
    <div className="App">
      <h1>desafio 3</h1>
      <ItemListContainer title="Esencial jeans" />
    <AiOutlineShoppingCart className='icon'  />
    </div>
  )
}

export default App;
