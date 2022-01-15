import React from 'react'
import { Container } from 'react-bootstrap';
import FrontPage from '../FrontPage/FrontPage';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <Container className='mt-4'>
            <FrontPage/> 
            <ItemListContainer/>  
        </Container>
    )
}

export default Home
