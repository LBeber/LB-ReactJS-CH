import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from '../ItemCount/ItemCount'
import {getItemById} from '../../Services/Firebase/Firebase'
import { Row } from 'react-bootstrap'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])
    const {productId} = useParams();
    
        useEffect(()=>{
            
            getItemById(productId).then(product =>{
                setProductDetail(product)
            }).catch(error => {
                console.log(`${error}`);
            })

        },[productId])

        if(productDetail.length === 0){
            return <Loader/>
        }

    return (
            <Row className='mt-5'>
                <ItemDetail productDetail={productDetail} countType={ItemCount}/>
            </Row>
    )
}

export default ItemDetailContainer

