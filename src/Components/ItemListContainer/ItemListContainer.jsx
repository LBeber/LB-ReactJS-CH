import React, {useState, useEffect} from 'react'
import '../Components.scss'
import ItemList from '../ItemList/ItemList';
import { getProductos, getProductosByCategory } from '../../Global/Js/productos'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';


const ItemListContainer = () => {

    const[productos, setProductos] = useState([])
    const{categoryId} = useParams()

    useEffect(() =>{
        
        ( async () => {
        setProductos([])
    
        if (categoryId !== undefined){
            const listProductByCategory = await getProductosByCategory(categoryId)
            setProductos(listProductByCategory)
        }
        else{
            const listProduct = await getProductos()
            setProductos(listProduct)
        }       
        })()

    },[categoryId])

    return (
        <div className="container">
            <div className="row justify-content-center">
            {productos.length !== 0 ? <ItemList productos={productos}/> :<Loader/> }
            </div>
        </div>
    )
}

export default ItemListContainer
