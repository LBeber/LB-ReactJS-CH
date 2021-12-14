import React from 'react';
import '../Components.scss';


const GoCart = ({stock, initial}) => {

    return (
            <div className='col-12 goCart'>
                <div className='row justify-content-center mb-2'>

                </div>
                <div className="text-center" id="cardCount">
                    <button className="btn p-0" id="addCart">Ir al carrito</button>
                </div>
            </div>
    )
}

export default GoCart