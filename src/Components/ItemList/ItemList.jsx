import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    console.log(productos)
    return (
        <div className="row justify-content-center align-items-start">
            {productos.map(p =><Item key={p.id} produc={p}/>)}
        </div>
    )
}

export default ItemList