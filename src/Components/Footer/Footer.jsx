import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Facebook, Instagram, Whatsapp } from 'react-bootstrap-icons'
import '../Components.scss'

const Footer = () =>{
    return(
        
    <Container>
    <Row  className='footerPage'>
        <Col sm="4" className='footerSection'>
        <h6>Redes sociales</h6>
        <ul>
            <li>Instagram <Instagram/></li>
            <li>Facebook <Facebook/></li>
            <li>WhatsApp <Whatsapp/></li>
        </ul>
        </Col>
        <Col sm="4" className='footerSection'>
        <h6>Información de la tienda</h6>
        <ul>
            <li>Dirección: Av. Ramirez 450</li>
            <li>Teléfono: 0343-4511212</li>
            <li>E-mail: ceramic.room@gmail.com</li>
        </ul>
        </Col>
        <Col sm="4" className='footerSection'>
        <h6>Productos</h6>
        <ul>
            <li>Todos los productos</li>
            <li>Novedades</li>
            <li>Ofertas</li>
        </ul>
        </Col>
    </Row>
    </Container>
    )
}

export default Footer