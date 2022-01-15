import React, { useState, useContext } from 'react'
import '../Components.scss'
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Context/CartContext/CartContext'
import { Col, Row } from 'react-bootstrap';


const ItemDetail = ({productDetail}) => {
  
    const [typeCount, setTypeCount] = useState('CountButton')
   
    const cant = (productDetail.cant === undefined)
                    ?1
                    :productDetail.cant

    const [quantity, setQuantity] = useState(cant)
    const { addProduct } = useContext(CartContext)
    
    const controlStock = (productDetail?.stock > 0)
    ?   `¡Quedan solo ${productDetail?.stock} unidades!`
    :   `Ya no quedan unidades :(`

   
    const addToCart = () => {   
    if (productDetail.stock >= quantity){
        let updateCant = quantity
        const value = {...productDetail, cant: updateCant}
        addProduct(value)
        setTypeCount('GoCart')
    }
    }

    const addOne = () => {
    if (productDetail.stock > quantity){
        setQuantity(quantity + 1)
    }
    }
   
    const restOne = () => {
    if (quantity > 0){
        setQuantity(quantity - 1)
    }
    }

    return (
        <Row className="itemDetail py-3">
            <Col lg="6">
                <img src={productDetail?.img} alt="" className="img-fluid"/>
            </Col>
            <Col lg="6" className="mt-sm-3 mt-lg-0">
                <Row>
                <Col lg="6">
                    <h3>{productDetail?.nombre}</h3>
                    <h1>$ {(productDetail?.precio).toFixed(2)}</h1>
                    <small className="fst-italic">{controlStock}</small>
                </Col>
                <Col lg="6" className='itemCountDetail'>
                    <ItemCount
                        add={() => addOne()} 
                        rest={() => restOne()} 
                        cant={quantity}
                        inputType={typeCount}
                        action={()=>addToCart()}
                        stock={productDetail?.stock}
                        />
                </Col>
                </Row>
                <Col lg="12" className='mt-5'>
                    <h5>Detalles:</h5>
                    <p>{productDetail?.descrip}</p>
                </Col>
                
            </Col>
        </Row>
    )
}

export default ItemDetail
    