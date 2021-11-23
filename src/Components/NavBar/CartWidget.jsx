import React from 'react'
import cart from './cartwidget.svg';
import '../Components.scss';

const CartWidget = ({cant}) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
                <img src={cart} alt="" className="m-0 cartWidget"/>
                <p className="p-2 m-0">{cant}</p>
        </div>
    )
}

export default CartWidget; 
