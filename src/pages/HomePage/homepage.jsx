import { useContext, useState } from "react"
import { CardProduct } from "../../components/cardProduc/cardProduct"
import { Footer } from "../../components/Footer/footer"
import { NavBar } from "../../components/NavBar/navBar"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import useRequestData from "../../hooks/useRequestData"
import { AnimLoading, ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerCategory, ContainerHome } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logo } from "../../components/logo/logo"
import { useNavigate } from "react-router-dom"
import { URL_BASE } from "../../constants/URL"

export const HomePage = ()=>{
const [data, isLoading] = useRequestData(`${URL_BASE}/fastfood/products/show`)
const context = useContext(GlobalStateContext)
const [search, setSearch] = useState('')
const navigate = useNavigate()

const renderProducts = data && data
.filter((order)=>{
    return order.product.includes(search)
}).map((product, key)=>{
    return(
            <CardProduct
                key={key}
                product={product}
            />
    )
})
 return(
    <ContainerBase>
        <ContainerMobile>
            <Logo/>
            <ContainerCategory>
                <div>
                    <input
                        value={search}
                        onChange={(ev)=>{setSearch(ev.target.value)}}
                        placeholder="Pesquisar..."/>
                    <img onClick={()=>{navigate('/cardapio')}} src="https://cdn-icons-png.flaticon.com/512/5303/5303979.png"/>    
                    <img onClick={()=>{navigate('/perfil')}} src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"/>
                </div>
            </ContainerCategory>
            <ContainerHome>
                {isLoading && <AnimLoading/>}
                {!isLoading && renderProducts}
            </ContainerHome>
            <NavBar/>
            <Footer/>
        </ContainerMobile>
        <ToastContainer/>
    </ContainerBase>
 )   
}