import React from 'react'
import '../Components.scss';
import { Link } from 'react-router-dom';

const Item = ({produc}) => {

    return (
        <div className="col-3 d-flex flex-column justify-content-center align-items-top cardItem mt-4">
            <Link to={`/detail/${produc.id}`} className="text-decoration-none text-black mt-1">
                <div>
                    <img src={produc.img} alt="" className="img-fluid imgCard"/>
                </div>
                <div className="mt-3 px-1 textCard">
                        <h5>{produc.nombre}</h5>
                        <h4>${(produc.precio).toFixed(2)}</h4>
                </div>
            </Link>
        </div>
    )
}

export default Item
