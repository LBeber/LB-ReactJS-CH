import React, {useState} from 'react'
import '../Components.scss'
import { Link } from 'react-router-dom'


const GoCart = () => {
    
    return (
        <div className="row justify-content-center">
                <Link className="btn my-1" id="viewProduct" to={'/'}>Ver mas productos</Link> 
            <div className='text-center goCart col-8'>
                <Link className="btn my-1" id="goCart" to={'/cart'}>Ir al carrito</Link>
            </div>
        </div>
    )
}


const CountButton = ({cant, action}) => {

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
        <div className='row justify-content-center align-items-center'>
            <div className="text-center col-10" id="cardCount"> 
                <button className="btn mx-2 p-0 cardButton rounded-circle" onClick={restOne} disabled={stop(1)}>-</button>
                    <label className="m-0 p-0 text-center col-4">{count}</label>
                <button className="btn mx-2 p-0 cardButton rounded-circle" onClick={addOne} disabled={stop(cant)}>+</button>
            </div>
            <div className="justify-content-center col-8 mt-1">
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
