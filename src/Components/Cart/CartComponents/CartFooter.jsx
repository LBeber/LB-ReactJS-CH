import React, { useContext } from 'react'
import '../../Components.scss'
import CartContext from '../../../Context/CartContext/CartContext'
import UserContext from '../../../Context/UserContext/UserContext';
import { updateProduct } from '../../../Services/Firebase/Firebase'
import { Col, Row } from 'react-bootstrap';


const CartFooter = () =>{

    const { getTotalPrice, deleteAll, addItem, order} = useContext(CartContext)
    
    const { user, changeNotification } = useContext(UserContext)

    const precioTotal = addItem.length !== 0 ?`Total: $ ${getTotalPrice()}` :'Carrito vacio'

    const removeAll = () => {
        deleteAll()
    }  

    const checkData = Object.values(user).every(value => {

    if(value === null || value === ''){
        return false
    }    
    else{
        return true
    }

    })
    
    const checkOut = () =>{
        
    if (checkData){
        orderConfirm()
    }
    else{
        let alert = 'Debe completar los datos de envío'
        changeNotification(alert)
    }

    }

    const orderConfirm = () =>{

    const getDataCart =
        {
            buyer: user,
            items: addItem,
            total: precioTotal
        }     
    
    updateProduct(getDataCart, addItem).then(idOrder =>{
        changeNotification(idOrder);
        order(true)
        deleteAll()
    })

    }

    return (
        <Row className='row col-12 mt-5'>
            <Col className='footerCartBg'>
                <Col sm='2' className='removeAllDiv'>         
                    <button className='removeAll' onClick={() => removeAll()}>Vaciar carrito</button>
                </Col>
                <Col sm='4' className='footerCartPrice'>
                    <h3>{precioTotal}</h3>
                </Col>
                <Col sm='2' className='checkOutDiv'>         
                    <button className='checkOut' onClick={() => checkOut()}>Finalizar compra</button>
                </Col>  
            </Col>
        </Row>
        
    )
}

export default CartFooter