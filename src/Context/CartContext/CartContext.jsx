import React, {useState} from 'react'
import { UserContextProvider } from '../UserContext/UserContext';

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [addItem, setAddItem] = useState([])
    const [total, setTotal] = useState(0)
    const [orderState, setOrderState] = useState(false)
    
    
    const addProduct = (item) => {
    
        if(checkIsAdded(item)){

            addItem.forEach((i, val) => {
                if (i.id === item.id){
                    addItem[val].cant = item.cant
                    addItem[val].subTotal = i.precio * item.cant
                    setAddItem([...addItem])
                }
            })

        }
        else{
            item.subTotal = item.precio * item.cant
            setAddItem([...addItem, item])
        }        
    }
    
    const checkIsAdded = (item) =>{       //Comprueba si existe un producto para solo agregar la cantidad
        const isAdded = addItem.find(producto => producto.id === item.id)
        
        if(isAdded !== undefined){
            return true
        }else{
            return false
        }
    }

    const getCantInCart = (product) => {
        return new Promise((resolve, reject) =>{
            const isInCart = addItem.find((productInCart) => productInCart.id === product.id)
            if(isInCart !== undefined){
                resolve(isInCart)
            }
            else{
                resolve(product)
            }
        })
    }

    const deleteProduct = (id) => {
        const removed = addItem.filter((producto) => producto.id !== id)
        setAddItem(removed)
        setTotal(removed.cant)
    }

    const cantTotal = () => {
        let quantity = 0

        addItem.forEach(({cant}) =>{
            quantity = quantity + cant
        })

        return quantity
    }

    const deleteAll = () => {
        setAddItem([])
    }
    
    const getTotalPrice = () => {
        let precioTotal = 0

        addItem.forEach(({cant, precio}) =>{
            precioTotal = precioTotal + cant * precio
        })

        return precioTotal.toFixed(2)
    }

    const order = (value) =>{
     
        setOrderState(value)
    }
    
    return (
        <UserContextProvider>
            <Context.Provider
            value=  {{  
                total,
                addItem,
                orderState,
                getCantInCart,
                order,
                cantTotal,
                getTotalPrice,
                addProduct, 
                deleteProduct,
                deleteAll
            }}
            >
                {children}
            </Context.Provider>
        </UserContextProvider>
    )
}

export default Context