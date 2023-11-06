import { useContext, useState } from "react"
import { CardProduct } from "../../components/cardProduc/cardProduct"
import { Footer } from "../../components/Footer/footer"
import { NavBar } from "../../components/NavBar/navBar"
import useRequestData from "../../hooks/useRequestData"
import { AnimLoading, ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerHeader, ContainerHome } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logo } from "../../components/logo/logo"
import { useNavigate } from "react-router-dom"
import { URL_BASE } from "../../constants/URL"
import { ContainerNavBar } from "../../components/NavBar/style"

export const HomePage = ()=>{
const [data, isLoading] = useRequestData(`${URL_BASE}/fastfood/products/show`)
const [search, setSearch] = useState('')
const navigate = useNavigate()

const renderProducts = data && data
.filter((order)=>{
    return order.category.includes(search)
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
            <ContainerHeader>
                <h2>Restaurant</h2>
            </ContainerHeader>
            <ContainerHome>
                 {renderProducts}
            </ContainerHome>
            <NavBar/>
        </ContainerMobile>
        <ToastContainer/>
    </ContainerBase>
 )   
}