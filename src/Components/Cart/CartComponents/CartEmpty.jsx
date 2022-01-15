import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Components.scss'
import UserContext from '../../../Context/UserContext/UserContext';
import { Col, Row } from 'react-bootstrap';


const CartEmpty = () =>{
    const { notification, changeNotification} = useContext(UserContext)
        
    const navigate = useNavigate()
    
    changeNotification('¡Mirá los productos recién llegados!')

    const goHome = (link) =>{
        navigate(link)
        changeNotification('')
    }
    
    return(
        <Row className='order mb-5'>
            <Col sm="8" className='orderDetails'>
                <h6>No hay productos en el carrito</h6>
                <Col className='descripOrder'>
                    <img src={'../media/CartEmpty.svg'} alt="" className='imgCart img-fluid'/>
                </Col>
                <span className='idOrder'>{notification}</span>
            </Col>
            <Col sm='12' className='goHome'>
                <button onClick={() => goHome(`/category/novedades`)} className='btnGoHome'>Ir a novedades</button>
            </Col>
            <Col sm='12'>
                <button onClick={() => goHome('/')} className='btnSecondary'>Ir a inicio</button>
            </Col>
        </Row>
    )
}

export default CartEmpty