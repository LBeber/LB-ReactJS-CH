import React, { useState } from 'react'
import '../Components.scss'
/* import ItemMin from '../Item/ItemMin'; */
import ItemCount from '../ItemCount/ItemCount';
/* import GoCart from '../ItemCount/GoCart'; */



const ItemDetail = ({productDetail /* countType = GoCart */}) => {

    const [typeCount, setTypeCount] = useState('CountButton')

    const addToCart = (count) =>{
        setTypeCount('GoCart')
        console.log(`Agregaste ${count} unidades al carrito`);
    }

    return (
        <div className="row itemDetail py-3">
            <div className="col-12 row justify-content-center">
                    <div className="col-12 col-sm-12 col-lg-6">
                        <img src={productDetail?.img} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6 mt-sm-3 mt-lg-0 row">
                        <div className='col-12 col-sm-12 col-lg-6'>
                            <h3>{productDetail?.nombre}</h3>
                            <h1>{productDetail?.precio}</h1>
                            <small className="fst-italic">¡Disponibles solo {productDetail?.stock} unidades!</small>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-6 mt-sm-3 mt-lg-3">
                            <ItemCount action={addToCart} cant={productDetail?.stock} inputType={typeCount}/>
                        </div>
                        <div className="col-12 justify-content-center mt-3">
                             <h5>Detalles:</h5>
                             <p>{productDetail?.descrip}</p>
                        </div>
                    </div>
            </div>
           
        {/*     <div className="col-12 row justify-content-center mt-3">
                <h6>Lo mas buscado</h6>
                {productRel.map(p => <ItemMin key={p.id} produc={p}/>)}
            </div> */}
        </div>
    )
}

export default ItemDetail
