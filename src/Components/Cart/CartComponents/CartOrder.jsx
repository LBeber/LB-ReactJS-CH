import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Components.scss'
import CartContext from '../../../Context/CartContext/CartContext'
import UserContext from '../../../Context/UserContext/UserContext';
import { Col, Row } from 'react-bootstrap';


const DataOrderDetail = () =>{
    const { notification, changeNotification, resetForm} = useContext(UserContext)
    const { order } = useContext(CartContext)
    
    const navigate = useNavigate()

    const goHome = (link) =>{
        resetForm()
        navigate(`${link}`)
        changeNotification('')
        order(false)
    }
    
    return(
        <Row className='order my-5'>
            <Col sm="8" className='orderDetails'>
                <h6>¡Ya estamos trabajando en tu pedido!</h6>
                <Col className='descripOrder'>
                <p>Podrás consultar el estado del pedido dentro de las próximas 24hs con el siguiente número:</p>
                </Col>
                <span className='idOrder'>{notification}</span>
            </Col>
            <Col sm="8" className='goHome'>
                <button onClick={() => goHome('/')} className='btnGoHome'>Ver mas productos</button>
            </Col>
        </Row>
    )
}

export default DataOrderDetail