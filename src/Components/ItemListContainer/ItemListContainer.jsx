import React, {useState, useEffect} from 'react'
import '../Components.scss'
import ItemList from '../ItemList/ItemList';
import { getProductos } from '../../Global/Js/productos'


const ItemListContainer = () => {
    const[productos, setProductos] = useState([])

    useEffect(() =>{
        const listaProductos = getProductos()
        listaProductos.then(listaProductos =>{
            setProductos(listaProductos)
        })
        
        return (()=>{
            setProductos([])
        })
    },[])

    return (
        <div className="container">
            {/* <ItemCount initial={1} stock={5} /> */}
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer
