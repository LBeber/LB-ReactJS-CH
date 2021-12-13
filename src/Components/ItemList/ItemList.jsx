import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <div className="row justify-content-start align-items-start mt-2 col-12">
            {productos.map(p =><Item key={p.id} produc={p}/>)}
        </div>
    )
}

export default ItemList