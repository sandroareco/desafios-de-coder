import { Card } from '../Card/Card';

export const ItemList = ({ProductList}) => {
     return (
        <div style={{display: 'flex', gap: '2rem'}}>
            {
                ProductList.map(item => <Card key={item.id} item={item} />)
            }
        </div>
        
    );
}
