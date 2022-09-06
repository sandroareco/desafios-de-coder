import Counter from '../Counter/Counter';
import './ItemDetail.css';

export const ItemDetail = ({item}) => {


    const onAdd = (quantity) => {
        console.log(quantity);
    }

    return (
        <article>
            <h1>{item.title}</h1>
            <div className="card-detail">
                <div className="card-detail-left">
                    <img src={item.img} alt={item.img} className="img" />
                </div>
                <div className="card-detail-right">
                    <p>{item.description} </p>
                    <p className="price"> $ {item.price} </p>
                    <p>stock: {item.stock} </p>
                    <Counter stock = {item.stock} initial={0} onAdd= {onAdd} />
                </div>
            </div>
        </article>
    );
}