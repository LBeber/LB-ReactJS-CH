import React, {useState} from 'react'
import { UserContextProvider } from '../UserContext/UserContext';

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [addItem, setAddItem] = useState([])
    const [total, setTotal] = useState(0)
    const [orderState, setOrderState] = useState(false)

    

    const addProduct = (item) => {
        
        if(!checkIsAdded(item.id)){
            addItem.forEach((i, val) => {
                
                if (i.id === item.id){
                    addItem[val].cant = i.cant + item.cant
                    setAddItem([...addItem])
                }
            })
        }
        else{
            setAddItem([...addItem, item])
        }        
    }
    
    const checkIsAdded = (id) =>{       //Comprueba si existe un producto para solo agregar la cantidad
        const isAdded = addItem.find(producto => producto.id === id  )
        return isAdded === undefined ?true :false
    }

    const deleteProduct = (id) => {
        const removed = addItem.filter((producto) => producto.id !== id)
        setAddItem(removed)
        setTotal(removed.cant)
        }

    const cantTotal = (/* addItem */) => {
        let cant = addItem ?addItem.length : null
        return cant
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