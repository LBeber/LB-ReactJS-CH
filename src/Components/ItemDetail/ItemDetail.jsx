import React, { useState, useContext } from 'react'
import '../Components.scss'
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Context/CartContext/CartContext'


const ItemDetail = ({productDetail}) => {
  
    const [typeCount, setTypeCount] = useState('CountButton')
    
    const controlStock = (productDetail?.stock > 0)
        ?   `¡Quedan solo ${productDetail?.stock} unidades!`
        :   `Ya no quedan unidades :(`

    const { addProduct } = useContext(CartContext)
    
    const sumarItem = (count) => {
        if (productDetail.stock >= count){
            let subTotal = productDetail.precio * count
            const value = {...productDetail, cant: count, subTotal}
            productDetail.stock = productDetail.stock - count
            addProduct(value)
            setTypeCount('GoCart')
        }
    }

    return (
        <div className="itemDetail py-3">
            <div className="col-12 row justify-content-center">
                    <div className="col-12 col-sm-12 col-lg-6">
                        <img src={productDetail?.img} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6 mt-sm-3 mt-lg-0 row">
                        <div className='col-12 col-sm-12 col-lg-6'>
                            <h3>{productDetail?.nombre}</h3>
                            <h1>${(productDetail?.precio).toFixed(2)}</h1>
                            <small className="fst-italic">{controlStock}</small>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-6 mt-sm-3 mt-lg-3">
                            <ItemCount action={sumarItem} cant={productDetail?.stock} inputType={typeCount}/>
                        </div>
                        <div className="col-12 justify-content-center">
                             <h5>Detalles:</h5>
                             <p>{productDetail?.descrip}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail
    