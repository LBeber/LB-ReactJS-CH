import React from 'react'
import '../Components.scss';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({produc}) => {

    const navigate = useNavigate()

    const goDetail = () =>{
        navigate(`/detail/${produc.id}`)
    }

    return (
        <Col sm='6' md='3' className="cardItem mt-2">
            <Col onClick={() => goDetail ()}>
                <Row>
                    <img src={produc.img} alt="" className="img-fluid imgCard"/>
                </Row>
                <Row className="mt-3 px-1 textCard">
                        <h5>{produc.nombre}</h5>
                        <h4>$ {(produc.precio).toFixed(2)}</h4>
                </Row>
            </Col>
        </Col>
    )
}

export default Item
