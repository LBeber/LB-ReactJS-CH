import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { getProductoById } from '../../Global/Js/productos'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])
    
    const {productId} = useParams();
    
        useEffect(()=>{    
       
            getProductoById(productId).then(listProduct =>{
                setProductDetail(listProduct)
            })

            return(() => {
                setProductDetail()
            })
        
        },[productId])

    return (
            <div className="my-5">
                {productDetail.length !== 0 ?<ItemDetail productDetail={productDetail}/> :<Loader/> }   
            </div>
    )
}

export default ItemDetailContainer

