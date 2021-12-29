import React, {useContext} from 'react'
import '../Components.scss';
import CartContext from '../../Context/CartContext/CartContext'
import { Bag } from 'react-bootstrap-icons';

const CartWidget = () => {

    const { cantTotal } = useContext(CartContext) 

    const cant =  (cantTotal() !== 0) ?cantTotal() :''


    return (
        <div className="d-flex justify-content-center align-items-center">
                <Bag/>
                <p className="px-2 m-0">{cant}</p>
        </div>
    )
}

export default CartWidget; 
