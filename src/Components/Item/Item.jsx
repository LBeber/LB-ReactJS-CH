import React from 'react'
import '../Components.scss';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({produc}) => {
  
    return (
        
            <div className="col-3 d-flex flex-column justify-content-center align-items-top cardItem m-2">
                <div>
                    <img src={produc.img} alt="" className="img-fluid imgCard"/>
                </div>
                <div className="mt-3 px-1 textCard">
                    <div>
                        <h5>{produc.nombre}</h5>
                    </div>
                    <div>
                        <h4>{produc.precio}</h4>
                    </div>
                </div>
                <div className="ItemCount">
                    <ItemCount stock={produc.stock} initial={1}/>
                </div>
            </div>
        
    )
}

export default Item
