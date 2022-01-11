import React, {useContext} from 'react'
import '../../Components.scss'
import UserContext from '../../../Context/UserContext/UserContext'
import {
    Form,
    Col,
    Row
} from 'react-bootstrap'
    
const Payment = () => {

    const {addName, addPhone, addEmail, addAddress, notification} = useContext(UserContext)  

    const getName = (e) =>{
        let name = e.target.value
        addName(name);
    }

    const getPhone = (e) =>{
        let phone = e.target.value
        addPhone(phone);
    }

    const getEmail = (e) =>{
        let email = e.target.value
        addEmail(email);
    }

    const getAddress = (e) =>{
        let address = e.target.value
        addAddress(address);
    }

    return (
        <Col>
            <Form className='formCheckout col-12 mt-2'>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Nombre y apellido" onBlur={(e) => getName(e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Teléfono" onBlur={(e) => getPhone(e)}/>
                    </Col>
                </Row>
                <Row className="mb-3 p-0">
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" onBlur={(e) => getEmail(e)}/>
                    </Col>
                </Row>
                <Row className="mb-3 p-0">
                    <Col>
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su dirección" onBlur={(e) => getAddress(e)}/>
                    </Col>
                </Row>
            </Form>
            <Col className='notification'>
                <h6>{notification}</h6>
            </Col>
        </Col>
    )
}

export default Payment
