import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Components.scss'
import { Col, Row } from 'react-bootstrap';


const FrontPage = () =>{

    const navigate = useNavigate()

    const goProducts = () =>{
        navigate('/products')
    }

    return (
        <Row className="bg_home">
            <Col>
            <img
            src={'../media/bg_home.jpg'}
            alt="background"
            />
            </Col>
            <Col className='bg_cta'>
            <img
            src={'../media/bg_title.svg'}
            alt="background"
            />
            <button className='btn_cta'
                    onClick={() => goProducts()}>
                Ver productos
            </button>
            </Col>
        </Row>
    )

}

export default FrontPage