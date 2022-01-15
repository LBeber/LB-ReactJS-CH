import React, {useState} from 'react'

const UserContext = React.createContext()

export const UserContextProvider = ({children}) =>{
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [address, setAddress] = useState(null) 
    const [notification, setNotification] = useState('')

    const addName = (name) =>{
        setName(name)
    }

    const addPhone = (phone) =>{
        setPhone(phone)
    }

    const addEmail = (email) =>{
        setEmail(email)
    }

    const addAddress = (address) =>{
        setAddress(address)
    }

    const resetForm = () =>{
        setName(null)
        setPhone(null)
        setEmail(null)
        setAddress(null)
    }

    const changeNotification = (text) =>{
        setNotification(text)        
    }

    const user = {
        name: name,
        phone: phone,
        email: email,
        address: address
    }

    return(
        <UserContext.Provider
            value= {{
                user,
                notification,
                resetForm,
                changeNotification,
                addName,
                addPhone,
                addEmail,
                addAddress
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext