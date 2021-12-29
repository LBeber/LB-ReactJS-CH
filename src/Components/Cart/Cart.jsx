import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import '../Components.scss'
import CartContext from '../../Context/CartContext/CartContext'
import UserContext from '../../Context/UserContext/UserContext';
import { UserContextProvider } from '../../Context/UserContext/UserContext';
import Payment from './Payment';
import { Bag, Trash, Truck} from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';

import { addDoc, collection, writeBatch, doc, getDoc } from 'firebase/firestore'
import { db } from '../../Services/Firebase/Firebase'


const CartItem = ({CartDetail}) => {

    const { deleteProduct} = useContext(CartContext)
   
    const deleteItem = (i) => {
        deleteProduct(i)
    }
   
    return (
        <article className="animate__animated animate__fadeInUpBig row col-12 justify-content-center align-items-center p-0 my-2">
            <div className='row col-11 justify-content-between itemDetail align-items-center p-1'>
                <div className='col-3 imgCartItem p-0'>
                    <img src={CartDetail?.img} alt="" />
                </div>
                <div className='row col-6 align-items-center p-1'>
                    <div className='col-6 text-left'>
                        <h4>
                           {CartDetail?.nombre}
                        </h4>
                        <small className='cantCart fst-italic'>
                            ${CartDetail?.precio.toFixed(2)}
                        </small>
                    </div>
                    <div className='col-6 text-center'>
                        <small>Cantidad</small>
                        <h5 className='text-center'>{CartDetail?.cant}</h5>
                    </div>
                </div>
                <div className='col-3 text-center p-1'>
                    <small>Subtotal</small>
                    <h5 className='text-center'>
                        ${CartDetail?.subTotal.toFixed(2)}
                    </h5>
                </div>
            </div>
            <div className='col-1' id="deleteBtn">
               <button className='rounded-circle borrar' onClick={() => deleteItem(CartDetail.id)}>
                   <Trash/>
                </button>
            </div>
        </article>
    
        )
    }

const CartFooter = () =>{

    const { getTotalPrice, deleteAll, addItem, DataCart} = useContext(CartContext)
    
    const { user, changeNotification } = useContext(UserContext)

    const precioTotal = addItem.length !== 0 ?`Total: $ ${getTotalPrice()}` :'Carrito vacio'

    const removeAll = () => {
        deleteAll()
    }  

    const batch = writeBatch(db)
    const noStock = []

    
    const checkData = Object.values(user).every(value => { //Valida que esté
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

        getDataCart.items.forEach((item) => {
            (async()=>{
                try{
                    const product = await getDoc(doc(db, 'products', item.id))
                    
                    if (product.data().stock >= item.cant){
                        batch.update(doc(db, 'products', item.id),{
                            stock: product.data().stock - item.cant
                        })
                    
                    }
                    else{
                        noStock.push({id: item.id, ...item.data()})
                    }
                }
                catch{
                    console.log('Error');
                }
            })()
            
        });

        if (noStock.length === 0){
            (async ()=>{
                try{
                   const added = await addDoc(collection(db, 'orders'), getDataCart)
                   batch.commit().then(()=>{
                        changeNotification(added.id) //Id de compra
                   })
                }
                catch{
                    console.log('Error en update');
                }
            })()
        }
        
        DataCart(true);
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
const DataOrderDetail = () =>{

    const { notification, user } = useContext(UserContext)
    const { DataCart } = useContext(CartContext)

    const goHome = () =>{
        DataCart(false)
    }

    return(
        <Row className='order'>
            <Col sm="8" className='orderDetails'>
                <h6>¡Gracias por tu compra {user.name}!</h6>
                <Col className='descripOrder'>
                    Estamos trabajando en el pedido, podrás hacer el seguimimiento del envío dentro de las próximas 24hs con el siguiente número de pedido
                </Col>
                <span className='idOrder'>{notification}</span>
            </Col>
            <Col sm="8" className='goHome'>
                <Link to={'/'} onClick={() => goHome()} className='btnGoHome'>Ver mas productos</Link>
            </Col>
        </Row>
    )
}

const CartOrder = () =>{

    const { addItem } = useContext(CartContext)
    
    return (
        
            <Row className='cart'>
                <Col sm="6" className='titleCart'>
                    <p>Detalle del carrito<Bag className='ms-2'/></p>
                    {addItem.map(item=><CartItem key={item.id} CartDetail={item}/>)}
                </Col>
                <Col sm="6" className='titleCart'>
                    <p>Datos de envío<Truck className='ms-2'/></p>
                    <Payment/>
                </Col>
                <Col>
                    <CartFooter/>   
                </Col>
            </Row>
    )
}

const Cart = () =>{
    const { dataOrder } = useContext(CartContext)

    const Cart =  (dataOrder !== true)
                    ?CartOrder
                    :DataOrderDetail

    return (
        <UserContextProvider>
            <Cart/>
        </UserContextProvider>
    )
}

export default Cart