import React, {useEffect, useState} from 'react';
import '../Components.scss';
import logo from './logo.svg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
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

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to={`/`} className="navbar-brand"><img src={logo} alt="" className="logo ms-2 p-0"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav>
                    <Link className="nav-link m-1" to={'/'}>Productos</Link>
                    {categories.map(cat => <Link key={cat.id} className="nav-link m-1" to={`/category/${cat.id}`}>{cat.categorie}</Link>)}
                    <Link className="nav-link m-1" to={'/cart'}><CartWidget/></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    )
}

export default NavBar

