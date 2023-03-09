import { useContext } from "react"
import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { NavAdmin } from "../../components/NavBarAdmin/navBarAdmin"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerAdmin } from "./style"

export const AdminPage = ()=>{
    const context = useContext(GlobalStateContext)
    
     return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerAdmin>
                   
                </ContainerAdmin>
                <NavAdmin/>
                <Footer/>
            </ContainerMobile>
        </ContainerBase>
    )
}