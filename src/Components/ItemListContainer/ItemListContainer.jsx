import React from 'react'
import '../Components.scss'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="d-flex flex-column justify-content-center text-center align-items-center" id="cardItemList">
            <h5>{greeting}</h5>
        </div>
    )
}

export default ItemListContainer
