import axios from "axios"
import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { NavAdmin } from "../../components/NavBarAdmin/navBarAdmin"
import useRequestData from "../../hooks/useRequestData"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerAdminOrder } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL_BASE } from "../../constants/URL"

export const AdminOrders = (id)=>{
    const [data,isLoading, error, page, setPage] = useRequestData(`${URL_BASE}/fastfood/order/show`)

    const confirmOrder= (id)=>{
        axios
            .delete(`${URL_BASE}/fastfood/order/myorders/delete/${id}`)
                .then((resp)=>{
                    setPage(!page)
                    toast.success(`Seu pedido será excluido em alguns instantes.`)
                })
                .catch((error)=>{
                    console.log(error.response)
                })
    }

    const problemOrder= (id)=>{
        // axios
        //     .delete(`http://localhost:3003/fastfood/order/myorders/remove/${id}`)
        //         .then((resp)=>{
        //             toast.success(`${resp.data}.. Seu pedido será excluido em alguns instantes.`)
        //         })
        //         .catch((error)=>{
        //             console.log(error.response)
        //         })
    }

    const renderOrders = data && data.map((order, key)=>{
        return(
               <tr key={key}>
                    <td>{order.name}</td>
                    <td>{order.table_name}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>
                        <div>
                            <img onClick={()=>{confirmOrder(order.fk_product)}} src="https://cdn-icons-png.flaticon.com/512/5197/5197544.png"/>
                            <img onClick={()=>{problemOrder(order.fk_product)}} src="https://cdn-icons-png.flaticon.com/512/6784/6784643.png"/>
                        </div>
                    </td>
                </tr>
            
        )
    })
    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerAdminOrder>
                    <table border={1}>
                        <tbody>
                            <tr>
                                <th>Cliente</th>
                                <th>Mesa</th>
                                <th>produto</th>
                                <th>Qtd</th>
                                <th>status</th>
                            </tr>
                            {renderOrders}
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