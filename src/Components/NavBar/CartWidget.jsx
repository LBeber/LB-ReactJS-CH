import React, {useContext} from 'react'
import '../Components.scss';
import CartContext from '../../Context/CartContext/CartContext'
import { Bag } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';

const CartWidget = () => {

    const { cantTotal } = useContext(CartContext) 

    const cant =  (cantTotal() !== 0) ?cantTotal() :''


    return (
        <Col className="bag">
            <Col><Bag/></Col>
            <p>{cant}</p>
        </Col>
    )
}

export default CartWidget; 
