import React from 'react'
import '../Components.scss'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'



const GoCart = () => {

    return (
    <div>
        <Link className="btn my-1" id="viewProduct" to={'/'}>Ver mas productos</Link> 
        <Link className="btn my-1" id="goCart" to={'/cart'}>Ir al carrito</Link>
    </div>
    )
}

export const CountButton = ({rest, add, cant}) => {

    return(
   
    <Col className="text-center" id="cardCount"> 
        <button className="p-0 btn cardButton" onClick={rest}>-</button>
            <label className="p-0 text-center">{cant}</label>
        <button className="p-0 btn cardButton" onClick={add}>+</button>
    </Col>
   
    )
}

const ItemCount = ({rest, add, action, cant, stock,inputType}) => {
    
    if(inputType !== 'CountButton' || stock === 0){
        return(
            <GoCart />
        )
    }

    return (
        <div className="text-center" id="cardCount">
            <CountButton rest={rest} add={add} cant={cant}/>
            <button className="btn my-2" id="addCart" onClick={action}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount