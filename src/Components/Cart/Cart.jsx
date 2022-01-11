import React, { useContext} from 'react'
import '../Components.scss'
import CartContext from '../../Context/CartContext/CartContext'
import CartFull from './CartComponents/CartFull';
import CartEmpty from './CartComponents/CartEmpty';


const Cart = () =>{

    const { addItem, orderState} = useContext(CartContext)
    
    if(addItem.length === 0 && !orderState){
        return <CartEmpty/>
    }

    return (
        <CartFull/>
    )
}

export default Cart
