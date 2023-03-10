import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { ContainerNavAdmin } from "./style"

export const NavAdmin = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerNavAdmin>
            <img src='https://cdn-icons-png.flaticon.com/512/4718/4718403.png' onClick={()=>{navigate('/adminOrders')}}/>
            <img src="https://cdn-icons-png.flaticon.com/512/3126/3126649.png" onClick={()=>{toast.error('Em desenvolvimento!')}}/>
            <img src="https://cdn-icons-png.flaticon.com/512/3174/3174528.png" onClick={()=>{navigate('/adminMesas')}}/>
            <img src="https://cdn-icons-png.flaticon.com/512/4442/4442531.png" onClick={()=>{navigate('/criarProdutos')}}/>
            <img src='https://cdn-icons-png.flaticon.com/512/126/126467.png'   onClick={()=>{navigate('/login')}}/>
        </ContainerNavAdmin>
    )
}