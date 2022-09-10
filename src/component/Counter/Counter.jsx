import {useState} from 'react';

export const Counter = ({stock, onAdd, initial= 1}) => {
    const [count, setCount] = useState(1)

    function add (){
        if (count < stock){
        setCount(count + 1)
        }
    }

    function substract(){
        if (count > 0){
        setCount (count - 1)
        }
    }

    function reset(){
        setCount(0)
    }

    return (
    <div>
        <div className='counter-box'>
             <h1>Carrito </h1>
             <p>stock: {stock} </p>
             <p>Cantidad: {count} </p>
        <div>  
            <button className='btn' onClick={substract} > - </button>
            <button className='btn' onClick={reset} > Reset</button>
            <button className='btn' onClick={add} > + </button>
        </div>
            <button className='btn' onClick={() => onAdd(count)}>añadir al carrito</button>
        </div>
    </div>
    );
}


