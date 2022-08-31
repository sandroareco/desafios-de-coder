
import Counter from '../Counter/Counter';

const ItemListContainer = () => {
    function onAdd(count) {
        console.log(`se han seleccionado ${count} productos`)
    }
    return (
        <div>
            <Counter stock={5} onAdd={onAdd}/>
        </div>
        
    )
}

export default ItemListContainer


