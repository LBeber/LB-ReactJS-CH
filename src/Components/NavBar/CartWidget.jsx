import React, {useContext} from 'react'
import cart from './cartwidget.svg';
import '../Components.scss';
import CartContext from '../../Context/CartContext/CartContext'

const CartWidget = () => {


    const { cantTotal } = useContext(CartContext) 

    const cant = cantTotal()
    
    return (
        <div className="d-flex justify-content-center align-items-center">
                <img src={cart} alt="" className="m-0 cartWidget"/>
                <p className="p-2 m-0">{cant}</p>
        </div>
    )
}

export default CartWidget; 
