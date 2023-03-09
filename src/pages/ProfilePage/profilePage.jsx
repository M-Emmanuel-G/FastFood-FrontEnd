import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { NavBar } from "../../components/NavBar/navBar"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerProfile } from "./style"

export const ProfilePage = ()=>{
    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerProfile></ContainerProfile>
                <NavBar/>
                <Footer/>
            </ContainerMobile>
        </ContainerBase>
    )
}