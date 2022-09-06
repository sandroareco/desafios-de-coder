import React, { useEffect, useState} from 'react';
import { products } from '../products/products';
import  {ItemList}  from '../ItemList/ItemList';
// import { useParams} from 'react-router-dom';

export const ItemListContainer = () => {
    const [ProductList, setProductList] = useState([])

    // const {categoria} = useParams()






    const getProducts = () => new Promise ((resolve, reject) => {
        setTimeout(() => resolve (products), 2000)
    })

    useEffect(() => {
        getProducts()
        .then(products => setProductList(products))
        .catch(error => console.error(error))
    }, [])

    return(
        <ItemList ProductList = {ProductList} />
    );
}




