import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from '../ItemCount/ItemCount'
import {db} from '../../Services/Firebase/Firebase'
import { getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])
    const {productId} = useParams();
    
        useEffect(()=>{

            ( async () => {

                try{
                    setProductDetail([])
                    
                        const getProductById = await getDoc(doc(db, 'products', productId))
                        const productById = { id: getProductById.id, ...getProductById.data()}                        
                        
                        setProductDetail(productById)
                   
                } catch{
                    console.log('Error en la consulta a la base de datos');
                }finally{
                    console.log('Consulta finalizada');
                }
                })()        
        },[productId])

    return (
            <div className='pt-5'>
                {productDetail.length !== 0 ?<ItemDetail productDetail={productDetail} countType={ItemCount}/> :<Loader/> }
            </div>
    )
}

export default ItemDetailContainer

