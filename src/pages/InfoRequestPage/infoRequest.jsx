import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Footer } from '../../components/Footer/footer'
import { NavBar } from '../../components/NavBar/navBar'
import { AnimLoading, ContainerBase, ContainerMobile} from '../../style/globalStyle'
import {  ContainerInfoRequest, ContainerList, ContainerSendOrder,} from './style'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRequestData from '../../hooks/useRequestData'
import { Logo } from '../../components/logo/logo'
import { GlobalStateContext } from '../../GlobalState/GlobalStateContext'

export const InfoRequest = ()=>{
    const [table, setTable] = useState('')
    const context = useContext(GlobalStateContext)

    useEffect(()=>{
        axios.get(`http://localhost:3003/fastfood/users/profile/${localStorage.getItem('idUser')}`)
        .then((resp)=>{
            setTable(resp.data[0].table_name)
        })
    },[])

    const [data, isLoading, error, page, setPage] = useRequestData(`http://localhost:3003/fastfood/order/myorders/${localStorage.getItem('idUser')}`)
    
     const deleteOrder = (id)=>{
        axios
            .delete(`http://localhost:3003/fastfood/order/myorders/delete/${id}`)
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
            <tr key={key}>
                <td><span>{order.quantity}x</span></td>
                <p>{order.product}</p>
                <td><img src='https://cdn-icons-png.flaticon.com/512/2496/2496229.png' onClick={()=>{deleteOrder(order.id)}}/></td>
            </tr>
        )
    })
    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerInfoRequest>
                    <div>
                        <span>{table}</span>
                    </div>
                    <ContainerList>
                        <table border={1}>
                            <tbody>
                            {isLoading&& <AnimLoading/>}
                            {!isLoading&&renderList}
                            </tbody>
                        </table>
                    </ContainerList>
                </ContainerInfoRequest>
                <NavBar/>
                <Footer/>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
    )
}