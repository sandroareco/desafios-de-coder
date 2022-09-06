import React from "react";
import { Card } from './component/Card/Card';

export const ItemList = ({productList}) => {
    return (
        <div style={{display: 'flex', gap: '2rem'}}>
            {
                productList.map(item => <Card key={item.id} productList={item} />)
            }

        </div>
    );
}
