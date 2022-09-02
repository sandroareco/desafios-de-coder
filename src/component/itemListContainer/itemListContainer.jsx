
import Counter from '../Counter/Counter';

const ItemListContainer = () => {
    function onAdd(count) {
        console.log(`se han seleccionado ${count} productos`)
    }
    return (
        <div>
            <Counter stock={5} onAdd={onAdd} min={1} sum={1} res={1}/>
        </div>
        
    )
}

export default ItemListContainer


