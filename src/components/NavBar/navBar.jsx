import { useNavigate } from "react-router-dom"
import { ContainerNavBar } from "./style"
import axios from 'axios';
import useRequestData from '../../hooks/useRequestData';
import { toast } from 'react-toastify';


export const NavBar = ()=>{
    const navigate = useNavigate()

    const [data] = useRequestData(`http://localhost:3003/fastfood/users/profile/${localStorage.getItem('idUser')}`)
    const logout = ()=>{

        console.log(data);
        if(data[0].payment === 0){
            toast.error('Conta ainda está em aberto!')
        } else {
            axios
                .get(`http://localhost:3003/fastfood/tables/vacateTable/${localStorage.getItem('idTable')}`)
                .then((resp)=>{navigate('/login')})
                .catch((error)=>{console.log(error.response.message)})
    
            axios
                .delete(`http://localhost:3003/fastfood/order/remove/${localStorage.getItem('idUser')}`)
                .then((resp)=>{})
                .catch((error)=>{console.log(error.data)})

            axios
                .get(`http://localhost:3003/fastfood/users/notIsLogged/${localStorage.getItem('idUser')}`)   
                .then((resp)=>{})
                .catch((error)=>{console.log(error.data);}) 
        }

       
    }

    return(
        <ContainerNavBar>
            <img onClick={()=>{navigate('/home')}} src='https://cdn-icons-png.flaticon.com/512/6490/6490332.png'/>
            <img onClick={()=>{navigate('/meuspedidos')}} src='https://cdn-icons-png.flaticon.com/512/6384/6384773.png'/>
            <img onClick={()=>{navigate('/pagamento')}} src='https://cdn-icons-png.flaticon.com/512/71/71227.png' />
            <img onClick={logout} src='https://cdn-icons-png.flaticon.com/512/126/126467.png' />
        </ContainerNavBar>
    )
}