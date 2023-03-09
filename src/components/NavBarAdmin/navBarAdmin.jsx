import { useNavigate } from "react-router-dom"
import { ContainerNavAdmin } from "./style"

export const NavAdmin = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerNavAdmin>
            <img src='https://cdn-icons-png.flaticon.com/512/6490/6490332.png' onClick={()=>{navigate('/admin')}}/>
            <img src='https://cdn-icons-png.flaticon.com/512/4718/4718403.png' onClick={()=>{navigate('/adminOrders')}}/>
            <img src="https://cdn-icons-png.flaticon.com/512/3126/3126649.png" onClick={()=>{}}/>
            <img src="https://cdn-icons-png.flaticon.com/512/4442/4442531.png" onClick={()=>{navigate('/criarProdutos')}}/>
            <img onClick={()=>{navigate('/login')}} src='https://cdn-icons-png.flaticon.com/512/126/126467.png' />
        </ContainerNavAdmin>
    )
}