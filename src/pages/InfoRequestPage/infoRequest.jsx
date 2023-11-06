import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Footer } from '../../components/Footer/footer'
import { NavBar } from '../../components/NavBar/navBar'
import { AnimLoading, ContainerBase, ContainerMobile} from '../../style/globalStyle'
import {  CardOrder, ContainerInfoRequest, ContainerList, ContainerSendOrder,} from './style'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRequestData from '../../hooks/useRequestData'
import { Logo } from '../../components/logo/logo'
import { GlobalStateContext } from '../../GlobalState/GlobalStateContext'
import { URL_BASE } from '../../constants/URL'

export const InfoRequest = ()=>{
    const [table, setTable] = useState('')
    const context = useContext(GlobalStateContext)

    useEffect(()=>{
        axios.get(`${URL_BASE}/fastfood/users/profile/${localStorage.getItem('idUser')}`)
        .then((resp)=>{
            setTable(resp.data[0].table_name)
        })
    },[])

    const [data, isLoading, error, page, setPage] = useRequestData(`${URL_BASE}/fastfood/order/myorders/${localStorage.getItem('idUser')}`)
    
     const deleteOrder = (id)=>{
        axios
            .delete(`${URL_BASE}/fastfood/order/myorders/delete/${id}`)
                .then((resp)=>{
                    toast.success(`${resp.data}`)
                    setPage(!page)
                })
                .catch((error)=>{
                    console.log(error.response)
                })
     }

    const renderList = data && data.map((order, key)=>{
        localStorage.setItem('idOrder', order.id)
        context.setCart(order)
        return(
            <CardOrder key={key}>
                <span>{order.quantity}x</span>
                <span>{order.product}</span>
                <img src='https://cdn-icons-png.flaticon.com/512/2496/2496229.png' onClick={()=>{deleteOrder(order.id)}}/>
            </CardOrder>
        )
    })
    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerInfoRequest>
                    <header>
                        <p>{table}</p>
                    </header>
                    <ContainerList>
                            {isLoading&& <AnimLoading/>}
                            {!isLoading&&renderList}
                    </ContainerList>
                </ContainerInfoRequest>
                <NavBar/>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
    )
}