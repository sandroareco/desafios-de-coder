import {useState} from 'react';

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    function add (){
        if (count < stock){
        setCount(count + 1)
        }
    }

    function substract(){
        if (count > 0){
        setCount (count -1)
        }
    }

    function reset(){
        setCount(1)
    }

    return (
    <div>
        <div className='counter-box'>
             <h1>Counter </h1>
             <p>stock: {stock} </p>
             <p>Cantidad: {count} </p>
        <div>  
            <button className='btn' onClick={substract} > - </button>
            <button className='btn' onClick={reset} > Reset</button>
            <button className='btn' onClick={add} > + </button>
        </div>
            <button className='btn' onClick={() => onAdd(count)}>Confirmar</button>
        </div>
    </div>
    );
}

export default Counter;
