import React from 'react'
import '../Components.scss'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
    return (
        <div className="d-flex flex-column justify-content-end text-center align-items-center" id="cardItemList">
            <ItemCount initial={1} stock={5} />
        </div>
    )
}

export default ItemListContainer
