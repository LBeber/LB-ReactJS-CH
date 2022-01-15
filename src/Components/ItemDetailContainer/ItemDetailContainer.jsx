import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getItemById} from '../../Services/Firebase/Firebase'
import CartContext from '../../Context/CartContext/CartContext'
import { Row } from 'react-bootstrap'


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])
    const {productId} = useParams();
    const { getCantInCart } = useContext(CartContext)
    
    useEffect(()=>{
    
    getItemById(productId).then(product =>{
        getCantInCart(product).then(getProduct => {
            setProductDetail(getProduct)
        })
    }).catch(error => {
        console.log(`${error}`);
    })

    }, [productId, getCantInCart])
   
    if(productDetail.length === 0){
        return <Loader/>
    }
    
    return (
        <Row className='my-5'>
            <ItemDetail productDetail={productDetail}/>
        </Row>
    )
}

export default ItemDetailContainer

