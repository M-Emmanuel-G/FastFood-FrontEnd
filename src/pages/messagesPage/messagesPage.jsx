import axios from "axios"
import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { NavBar } from "../../components/NavBar/navBar"
import { URL_BASE } from "../../constants/URL"
import useRequestData from "../../hooks/useRequestData"
import { AnimLoading, ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { CardMessage, ContainerListMessage, ContainerMessages, ContainerSendMessage } from "./styled"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MessagePage = ()=>{
    const [data, isLoading, error, page, setPage] = useRequestData(`${URL_BASE}/fastfood/messages/showMessages/${localStorage.getItem('idUser')}`)
    const renderMessages = data.result && data.result.map((message, key)=>{
        return(
            <div key={key}>
                <span>{message.message}</span>
                <button onClick={()=>{deleteMessage(message.idMessage)}}>X</button>
            </div>
        )
    })

    const deleteMessage =(id)=>{
        setPage(!page)
        axios
            .delete(`${URL_BASE}/fastfood/messages/delete/${id}`)
            .then((resp)=>{
               toast.success(resp.data.message)
            })
            .catch((error)=>{console.log(error);})
    }

    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerMessages>
                    <ContainerListMessage>
                        {renderMessages}
                    </ContainerListMessage>
                </ContainerMessages>
                <NavBar/>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
    )
}