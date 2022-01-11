import React, { useContext } from 'react'
import '../../Components.scss'
import CartContext from '../../../Context/CartContext/CartContext'
import UserContext from '../../../Context/UserContext/UserContext';
import { updateProduct } from '../../../Services/Firebase/Firebase'
import CartOrder from './CartOrder';

const CartFooter = () =>{

    const { getTotalPrice, deleteAll, addItem, order} = useContext(CartContext)
    
    const { user, changeNotification } = useContext(UserContext)

    const precioTotal = addItem.length !== 0 ?`Total: $ ${getTotalPrice()}` :'Carrito vacio'

    const removeAll = () => {
        deleteAll()
    }  

    const checkData = Object.values(user).every(value => {
        if(value !== null){
            return true
        }    
        else{
            return false
        }
    })
    
    const checkOut = () =>{
        
        if (checkData){
            orderConfirm()
        }
        else{
            let alert = 'Debe completar los datos de envío'
            changeNotification(alert)
        }
    }

    const orderConfirm = () =>{

        const getDataCart =
            {
                buyer: user,
                items: addItem,
                total: precioTotal
            }     
        
        updateProduct(getDataCart, addItem).then(idOrder =>{
            changeNotification(idOrder);
            order(true)
            deleteAll()
        })
    }

    return (
        <div className='row col-12'>
            <div className='footerCartBg'>
                <div className='col-2 removeAllDiv'>         
                    <button className='removeAll' onClick={() => removeAll()}>Vaciar carrito</button>
                </div>
                <div className='footerCartPrice col-4'>
                    <h3>{precioTotal}</h3>
                </div>
                <div className='col-2 checkOutDiv'>         
                    <button className='checkOut' onClick={() => checkOut()}>Finalizar compra</button>
                </div>  
            </div>
        </div>
        
    )
}

export default CartFooter