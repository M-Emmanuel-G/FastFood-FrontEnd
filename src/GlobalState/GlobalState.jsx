import { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

export const GlobalState = (props)=>{

    const [ order, setOrder ] = useState([])
    const [ newOrders, setNewOrders ] = useState([])
    const [ profile, setProfile ] = useState([])
    const [ myOrders, setMyOrders ] = useState([])
    const [cart, setCart] = useState(false)
    

    const data = {
        profile,
        setProfile,
        order,
        setOrder,
        myOrders,
        setMyOrders,
        newOrders, 
        setNewOrders,
        cart,
        setCart
    }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}