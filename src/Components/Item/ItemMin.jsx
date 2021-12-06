import React from 'react'
import '../Components.scss';

const ItemMin = ({produc}) => {

    return (
            <div className="col-3 d-flex flex-column text-center cardItemMin">
                    <img src={produc.img} alt="" className="img-fluid imgItemMin"/>
            </div>
    )
    
}

export default ItemMin