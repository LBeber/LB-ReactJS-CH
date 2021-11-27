import React, {useState} from 'react'
import '../Components.scss'

const Button = ({label, funcion, param}) => {
    return (      
            <button className="btn mx-2 p-0 rounded-0" id="cardButton" onClick={funcion} disabled={param}>{label}</button>
    )
}

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

    return (
        <div>
            <div className="fst-italic mb-2">
                <small>Stock disponible: {stockDis}</small>
            </div>
            <div className="d-flex flex-row justify-content-center mb-2" id="cardCount"> 
                <Button label="-" funcion={restOne} param={stop(initial)}/>
                <label className="m-0 p-0 text-center w-100">{count}</label>
                <Button label="+" funcion={addOne} param={stop(stock)}/>
            </div>
            <div className="d-flex flex-row justify-content-center mb-2">
                <button className="btn mx-2 p-0 rounded-0" id="addCart">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount