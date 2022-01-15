import React, { useContext, useState, } from 'react'
import '../../Components.scss'
import CartContext from '../../../Context/CartContext/CartContext'
import { Trash} from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';
import {CountButton} from '../../ItemCount/ItemCount'

const CartItem = ({CartDetail}) => {

    const { deleteProduct, addProduct } = useContext(CartContext)
    const [cant, setCant] = useState(CartDetail.cant)

    const deleteItem = (i) => {
        deleteProduct(i)
    }

    const add = () => {
        if (CartDetail.stock > cant){
            let updateCant = CartDetail.cant + 1
            const value = {...CartDetail, cant: updateCant} 
            addProduct(value)
            setCant(cant + 1)
        }
    }

    const rest = () => {
        if (cant > 0){
            let updateCant = CartDetail.cant - 1
            const value = {...CartDetail, cant: updateCant} 
            addProduct(value)
            setCant(cant - 1)
        }
    }
   
    return (
        <Row className="animate__animated animate__fadeInUpBig justify-content-center align-items-center p-0 my-2">
            <Col sm='10'>
                <Row className='justify-content-between itemDetail align-items-center p-1'>
                    <Col sm='3' className='imgCartItem p-0'>
                        <img src={CartDetail?.img} alt="" />
                    </Col>
                    <Col sm='6' className='row align-items-center p-1'>
                        <Col sm='6' className='text-left'>
                            <h4>
                            {CartDetail?.nombre}
                            </h4>
                            <small className='cantCart fst-italic'>
                                $ {CartDetail?.precio.toFixed(2)}
                            </small>
                        </Col>
                        <Col sm='6' className='text-center'>
                            <small>Cantidad</small>
                            <CountButton  
                                add={() => add()} 
                                rest={() => rest()} 
                                cant={cant}
                            />
                        </Col>
                    </Col>
                    <Col sm='3' className='text-center p-1'>
                        <small>Subtotal</small>
                        <h5 className='text-center'>
                            ${CartDetail?.subTotal.toFixed(2)}
                        </h5>
                    </Col>
                </Row>
            </Col>
            <Col sm='1' id="deleteBtn">
               <button className='rounded-circle borrar' onClick={() => deleteItem(CartDetail.id)}>
                   <Trash/>
                </button>
            </Col>
        </Row>
    
        )
    }

export default CartItem