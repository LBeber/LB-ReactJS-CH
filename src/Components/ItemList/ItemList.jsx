import React from 'react'
import { Row } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = ({productos}) => {

    return (
        <Row className="justify-content-start align-items-start mt-2">
            {productos.map(p =><Item key={p.id} produc={p}/>)}
        </Row>
    )
}

export default ItemList