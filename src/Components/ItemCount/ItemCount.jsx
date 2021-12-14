import React, {useState} from 'react'
import '../Components.scss'
import { Link } from 'react-router-dom'

const GoCart = ({action, cant}) => {
    
    return (
        <div className="text-center col-12 goCart">
            <Link className="btn p-0" id="addCart" to={'/cart'}>Ir al carrito</Link>
        </div>
    )
}


const CountButton = ({action, cant}) => {

    const [count, setCount] = useState(1)

    const addOne = () => {
        if (count < cant){
            setCount(count + 1);
        }
    }

    const restOne = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    const stop = (cant) => {
        return (count === cant) ?true :false
    }
    
    return(
        <div>
            <div className="d-flex flex-row justify-content-center" id="cardCount"> 
                <button className="btn mx-2 p-0 cardButton" onClick={restOne} disabled={stop(1)}>-</button>

                <label className="m-0 p-0 text-center w-100">{count}</label>
                
                <button className="btn mx-2 p-0 cardButton" onClick={addOne} disabled={stop(cant)}>+</button>
            </div>
            <div className="d-flex flex-row justify-content-center col-12 mt-1">
                <button className="btn p-0" id="addCart" onClick={() => action(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}



const ItemCount = ({cant, action, inputType = 'CountButton'}) => {

    const Count = inputType === 'CountButton' ?CountButton :GoCart
    
    return (
        <Count cant={cant} action={action}></Count>
    )
}

export default ItemCount