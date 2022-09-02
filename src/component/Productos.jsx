import {React, useState, useEffect} from 'react'
   
const producto = [
    {nombre: 'jeans', marca: 'vad', precio: 7900, stock: '100'},
    {nombre: 'buzos', marca: 'bensimon', precio: 8200, stock: '80'},
    {nombre: 'remeras', marca: 'levis', precio: 5700, stock: '150'}
  ]

function consultarPromesa(confirmacion) {
  return new Promise ((res, rej) => {
    if (confirmacion){
      res(producto)
    } else {
      rej("incorrecto")
    }
  })

}

const Productos = () => {

  const [productos, setProductos] = useState([]);
  
useEffect(() => {

    consultarPromesa(true) 
    .then(data => {
      const misProductos = data.map((producto, indice ) => 
    
      <div className="card border-primary mb-3" key={indice} style={{maxWidth: '15rem', margin: '5px'}}>
      <div className="card-header">{producto.nombre}</div>
        <div className="card-body">
            <p className="card-text">Marca: {producto.marca}</p>
            <p className="card-text">Precio: ${producto.precio}</p>
            <p className="card-text">Stock: {producto.stock}</p>
    
      </div>
    </div>
      )
        console.log(misProductos);
        setProductos(misProductos)
    })
    .catch(error => {
      console.log(error)
    })

  }, []);

  


  return (
          <div className='row'>
            {productos}
          </div>
  );
}
export default Productos;

