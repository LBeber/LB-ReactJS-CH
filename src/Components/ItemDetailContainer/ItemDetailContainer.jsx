import React, {useState, useEffect} from 'react'
import { getProductoDetail } from '../../Global/Js/productos'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])
    const [productRel, setProductRel] = useState([])
    
        useEffect(()=>{    
            const ProductoDetail = getProductoDetail()
            
            ProductoDetail.then(listProduct =>{
                setProductRel(listProduct.rel)
            })
            ProductoDetail.then(listProduct =>{
                setProductDetail(listProduct)
            })
        },[])

    return (
            <div className="my-5">
                <ItemDetail productDetail={productDetail} productRel={productRel}/> 
            </div>
    )
}

export default ItemDetailContainer

