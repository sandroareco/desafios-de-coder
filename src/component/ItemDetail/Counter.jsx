import {useState} from 'react';
import { products } from '../../mock/products';

const Counter = ({stock,title,price,description,initial= 1}) => {
    const [count] = useState(1)
    const [cantidad, setCantidad] = useState(1)

    function buy (products) {
        const productoCarrito = {id: products.id, cantidad: cantidad}
        console.log(productoCarrito);
    }

    const cantidadProducto = (operacion) => {
        if (operacion === "+") {
            if(cantidad < products.stock) {
                setCantidad(cantidad + 1)
            } else {
                if (cantidad > initial){
                setCantidad(cantidad - 1)
            }
        }
    }

    return (
    <div>
        <div className='counter-box'>
             <p className='card-title'> {title}</p>
             <p className='card-text'>precio:{price}</p>
             <p className='card-text'>{description}</p>
             <p className='card-text'> stock:{stock}</p>
             <p className='card-text'> cantidad: {count}</p>
            </div>
            <div> 
            <button className='btn btn-light' onClick={() => {cantidadProducto("+")}}>
                +
            </button>
            <button className='btn btn-dark' onClick={() => {cantidadProducto("-")}}>
                -
            </button>
            <p>{cantidad}</p>
            <button className='btn btn-success' onClick={() => buy(products,cantidad)}>añadir al carrito</button>
        </div>
    </div>
    );
    }
}

export default Counter;
















    // function add (){
    //     if (count < stock){
    //     setCount(count + 1)
    //     }
    // }

    // function substract(){
    //     if (count > 0){
    //     setCount (count - 1)
    //     }
    // }

    // function reset(){
    //     setCount(0)
    // }

    // return (
    //     <div>
    //         <div className='counter-box'>
    //              <h1>Carrito </h1>
    //              <p>stock: {stock} </p>
    //              <p>Cantidad: {count} </p>
    //         <div>  
    //             <button className='btn' onClick={substract} > - </button>
    //             <button className='btn' onClick={reset} > Reset</button>
    //             <button className='btn' onClick={add} > + </button>
    //         </div>
    //             <button className='btn' onClick={() => onAdd(count)}>añadir al carrito</button>
    //         </div>
    //     </div>
    //        );
    // }

   