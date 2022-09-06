import { useEffect, useState } from 'react';
import { products } from '../products/products';
import  {ItemDetail}  from '../ItemDetail/ItemDetail' ;
// import { useParams} from 'react-router-dom';


export const ItemDetailContainer = () => {

    // const {id} = useParams()

    // console.log(id);

    const [item, setItem] = useState({});

    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(products.find(product => product.id === 3)), 2000)
    })

    useEffect(() => {
        getProduct()
        .then(response => setItem(response))
    }, [])



    return (
        <ItemDetail item={item}/>
    );
}

