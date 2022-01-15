import React, {useEffect, useState} from 'react';
import '../Components.scss';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import {db} from '../../Services/Firebase/Firebase'
import { collection, getDocs} from 'firebase/firestore'
import { 
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap';

const NavBar = () => {
    
    const [categories, setCategories] = useState ([])

    useEffect(() =>{

    (async()=>{

        setCategories([])

    try{
        const response = await getDocs(collection(db, 'categories'))
        const getCategories = response.docs.map(doc => { 
            return {id: doc.id, ...doc.data()}
        })
        
        setCategories(getCategories)
    }
    catch{
        console.log("Error en la consulta con la base de datos");
    }

    })()

    }, [])

    return(

        <Navbar bg="white" expand="lg" className='NavBar'>
            <Container>
                <Navbar.Brand><Link to={`/`} className="navbar-brand"><img src={'../media/logo.svg'} alt="" className="logo ms-2 p-0"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav>
                    <NavLink className="nav-link m-1" to={'/'}>Home</NavLink>
                    <NavLink className="nav-link m-1" to={'/products'}>Productos</NavLink>
                    {categories.map(cat => <NavLink key={cat.id} className="nav-link m-1" to={`/category/${cat.id}`}>{cat.categorie}</NavLink>)}
                    <NavLink className="nav-link m-1" to={'/cart'}><CartWidget/></NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    )
}

export default NavBar

