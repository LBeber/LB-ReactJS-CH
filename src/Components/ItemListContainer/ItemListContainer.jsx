import React, {useState, useEffect} from 'react'
import '../Components.scss'
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { getItems } from '../../Services/Firebase/Firebase'
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';


const ItemListContainer = () => {

    const[productos, setProductos] = useState([])
    const{categoryId} = useParams()

    useEffect(() =>{
        
        getItems('categoria', '==', categoryId).then(products =>{
            setProductos(products)
        }).catch(error => {
            console.log(`${error}`);
        })

    },[categoryId])
    
    const Title = (categoryId === undefined) ?'Productos' :`${categoryId}`

    if(productos.length === 0){
        return <Loader/>
    }

    return (
        <Container>
            <Row className='mt-5 mb-3'>
                <h6 className='titlePage'>{Title}</h6>
                <ItemList productos={productos}/>
            </Row>
        </Container>
    )
}

export default ItemListContainer
