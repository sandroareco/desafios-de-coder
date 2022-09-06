import React, { useEffect, useState} from 'react';
import { products } from './component/products/products';
import  {ItemList}  from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const [ProductList, setProductList] = useState([])






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




