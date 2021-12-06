import React, {useState} from 'react'
import '../Components.scss'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { prueba } from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(1)
    const [stockDis, setStockDis] = useState(stock-1)

    const addOne = () => {
        setCount(count + 1);
        setStockDis(stockDis -1);
    }
    const restOne = () => {
        setCount(count - 1)
        setStockDis(stockDis +1);
    }
    const stop = (cant) => {
        return (count === cant) ?true :false
    }   

    /* const a =() => {
       const prueba = ItemDetailContainer()
        console.log(prueba);
    }
 */
    return (
        <div>
            <div className="d-flex flex-row justify-content-center" id="cardCount"> 
                <button className="btn mx-2 p-0 cardButton" onClick={restOne} disabled={stop(initial)}>-</button>

                <label className="m-0 p-0 text-center w-100">{count}</label>
                
                <button className="btn mx-2 p-0 cardButton" onClick={addOne} disabled={stop(stock)}>+</button>
            </div>
            <div className="d-flex flex-row justify-content-center col-12 mt-1">
                <button className="btn p-0" id="addCart">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount