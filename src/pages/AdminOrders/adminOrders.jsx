import axios from "axios"
import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { NavAdmin } from "../../components/NavBarAdmin/navBarAdmin"
import useRequestData from "../../hooks/useRequestData"
import { AnimLoading, ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerAdminOrder } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL_BASE } from "../../constants/URL"

export const AdminOrders = (id)=>{
    const [data,isLoading, error, page, setPage] = useRequestData(`${URL_BASE}/fastfood/order/show`)

    const confirmOrder= (id)=>{

        const body = {
            message:' Obrigado por aguardar.. Em instantes seu pedido chegará em sua mesa...'
        }

        axios   
            .post(`${URL_BASE}/fastfood/messages/sendMessage/${localStorage.getItem('idUser')}`, body)
            .then((resp)=>{console.log(resp.data)})
            .catch((error)=>{console.log(error);})

        axios
            .delete(`${URL_BASE}/fastfood/order/myorders/delete/${id}`)
                .then((resp)=>{
                    setPage(!page)
                    toast.success(`Mensagem foi enviada ao cliente.`)
                })
                .catch((error)=>{
                    console.log(error.response)
                })
    }

    const renderOrders = data && data.map((order, key)=>{
        return(
               <tr key={key}>
                    <td>{order.name}</td>
                    <td>{order.table_name}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>
                        <img onClick={()=>{confirmOrder(order.fk_product)}} src="https://cdn-icons-png.flaticon.com/512/5197/5197544.png"/>
                    </td>
                </tr>
            
        )
    })
    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerAdminOrder>
                    <table border={0}>
                        <tbody>
                            <tr>
                                <th>Cliente</th>
                                <th>Mesa</th>
                                <th>produto</th>
                                <th>Qtd</th>
                                <th>Finalizar</th>
                            </tr>
                            {isLoading && <AnimLoading/>}
                            {!isLoading && renderOrders}
                        </tbody>
                    </table>
                </ContainerAdminOrder>
                <NavAdmin/>
                <Footer/>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
    )
}