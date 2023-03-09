import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Footer } from "../../components/Footer/footer"
import { NavBar } from "../../components/NavBar/navBar"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { Card, CardInfo, ContainerHistoric, ContainerInfo, ContainerPayment } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logo } from "../../components/logo/logo"
import useRequestData from "../../hooks/useRequestData"
import { useNavigate } from "react-router-dom"
import { URL_BASE } from "../../constants/URL"

export const PaymentPage = ()=>{
    const [data] = useRequestData(`${URL_BASE}/fastfood/order/myorders/${localStorage.getItem('idUser')}`)
    
    const context = useContext(GlobalStateContext)
    const sumPay = context.myOrders.map((order)=> order.quantity * order.price).reduce((a,b)=> a + b ,0)
    const [iSub, setSub] = useState(0)
    const [value, setValue] = useState(sumPay)
    const navigate = useNavigate()
    const sub = ()=>{
        setValue(sumPay / iSub) 
    }
    context.setMyOrders(data)
    
    
    useEffect(()=>{
        setValue(sumPay)
     },[])

     const renderList = data && data.map((order, key)=>{
        return(
            <Card key={key}>
                <span>{order.quantity}x</span>
                <span>{order.product}</span>
                <span>R$ {order.price}</span>
            </Card>
        )
     })

     const sendPayment = ()=>{
        axios
            .get(`${URL_BASE}/fastfood/users/payment/${localStorage.getItem('idUser')}`)
            .then((resp)=>{navigate('/pagamentoConcluido')})
            .catch((error)=>{console.log(error.response)})

        axios
            .get(`${URL_BASE}/fastfood/users/finalizeBill/${localStorage.getItem('idUser')}`)
            .then((resp)=>{})
            .catch((error)=>{console.log(error.response.data);})
     }

    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerPayment>
                    <ContainerHistoric>
                    <h4>Consumação:</h4>
                      {renderList}
                    </ContainerHistoric>
                    <CardInfo>
                        <ContainerInfo>
                            <div>
                                <span>Total da conta:</span>
                                <p>R${sumPay}</p>
                                <span>Total para cada:</span>
                                <p>R$ {value}</p>
                            </div>
                        </ContainerInfo>
                        <ContainerInfo>
                            <section>
                                <span>Dividir para:</span>
                            <select
                                    value={iSub}
                                    onChange={(ev)=>{setSub(ev.target.value)}}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <button onClick={sub}>Calcular</button>
                                <button onClick={sendPayment}>Pedir Conta</button> 
                            </section>
                        </ContainerInfo>
                    </CardInfo>
                </ContainerPayment>
                <NavBar/>
                <Footer/>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
    )
}