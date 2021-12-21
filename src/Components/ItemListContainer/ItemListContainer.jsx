import React, {useState, useEffect} from 'react'
import '../Components.scss'
import ItemList from '../ItemList/ItemList';
import {db} from '../../Services/Firebase/Firebase'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';


const ItemListContainer = () => {

    const[productos, setProductos] = useState([])
    const{categoryId} = useParams()

    useEffect(() =>{
        
        ( async () => {

        try{
            setProductos([])
            
            if (categoryId !== undefined){
                const getListProductByCategory = await getDocs(query(collection(db, 'products'), where('categoria', '==', categoryId)))
                
                const listProductByCategory = getListProductByCategory.docs.map(doc =>{
                    return { id: doc.id, ...doc.data()}
                })
                                
                setProductos(listProductByCategory)
            }
            else{
                const getGistProduct = await getDocs(collection(db, 'products'))
                const listProduct = getGistProduct.docs.map(doc =>{
                    return { id: doc.id, ...doc.data()}
                })
                
                setProductos(listProduct) 
            }      
        } catch{
            console.log('Error en la consulta a la base de datos');
        }finally{
            console.log('Consulta finalizada');
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
