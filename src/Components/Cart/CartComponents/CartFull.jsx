import React, { useContext} from 'react'
import '../../Components.scss'
import CartContext from '../../../Context/CartContext/CartContext'
import CartForm from './CartForm';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { Bag, Truck} from 'react-bootstrap-icons';
import CartOrder from './CartOrder';
import { Col, Row } from 'react-bootstrap';


const CartFull = () =>{

    const { addItem, orderState} = useContext(CartContext)
    
    if(orderState){
        return <CartOrder/>
    }

    return (
        <Row className='cart'>
            <Col sm="6" className='titleCart'>
                <p>Detalle del carrito<Bag className='ms-2'/></p>
                {addItem.map(item=><CartItem key={item.id} CartDetail={item}/>)}
            </Col>
            <Col sm="6" className='titleCart'>
                <p>Datos de envío<Truck className='ms-2'/></p>
                <CartForm/>
            </Col>
            <Col>
                <CartFooter/>   
            </Col>
        </Row>
    )
}

export default CartFull
