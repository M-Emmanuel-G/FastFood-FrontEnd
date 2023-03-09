import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { NavBar } from "../../components/NavBar/navBar"
import useRequestData from "../../hooks/useRequestData"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerMenu } from "./style"

export const MenuPage = ()=>{
    const [data] = useRequestData(`http://localhost:3003/fastfood/products/show`)

    const renderList = data && data.map((order)=>{
        return(
            <div>
                <span>{order.product}</span>
                <span>R$ {order.price.toFixed(2)}</span>
            </div>
        )
    })
    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerMenu>
                    {renderList}
                </ContainerMenu>
                <NavBar/>
                <Footer/>
            </ContainerMobile>
        </ContainerBase>
    )
}