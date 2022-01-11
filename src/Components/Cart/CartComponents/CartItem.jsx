import React, { useContext } from 'react'
import '../../Components.scss'
import CartContext from '../../../Context/CartContext/CartContext'

import { Trash} from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';

const CartItem = ({CartDetail}) => {

    const { deleteProduct } = useContext(CartContext)
   
    const deleteItem = (i) => {
        deleteProduct(i)
    }
   
    return (
        <article className="animate__animated animate__fadeInUpBig row col-12 justify-content-center align-items-center p-0 my-2">
            <div className='row col-11 justify-content-between itemDetail align-items-center p-1'>
                <div className='col-3 imgCartItem p-0'>
                    <img src={CartDetail?.img} alt="" />
                </div>
                <div className='row col-6 align-items-center p-1'>
                    <div className='col-6 text-left'>
                        <h4>
                           {CartDetail?.nombre}
                        </h4>
                        <small className='cantCart fst-italic'>
                            ${CartDetail?.precio.toFixed(2)}
                        </small>
                    </div>
                    <div className='col-6 text-center'>
                        <small>Cantidad</small>
                        <h5 className='text-center'>{CartDetail?.cant}</h5>
                    </div>
                </div>
                <div className='col-3 text-center p-1'>
                    <small>Subtotal</small>
                    <h5 className='text-center'>
                        ${CartDetail?.subTotal.toFixed(2)}
                    </h5>
                </div>
            </div>
            <div className='col-1' id="deleteBtn">
               <button className='rounded-circle borrar' onClick={() => deleteItem(CartDetail.id)}>
                   <Trash/>
                </button>
            </div>
        </article>
    
        )
    }

export default CartItem