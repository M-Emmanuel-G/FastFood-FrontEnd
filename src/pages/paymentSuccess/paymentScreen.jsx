import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { AnimLoading, ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerPaymentScreen } from "./style"

export const PaymentScreen = ()=>{

    const [verify, setVerify] = useState(false)

   
       const verification = ()=>{

        if(verify === false){
            setTimeout(() => {
                setVerify(true)
            }, 3000);
        } else{
            setTimeout(() => {
                navigate('/home')
            }, 5000);

            return(
                <>
                    <h3>Pagamento concluido com sucesso...</h3>
                    <h4> Obrigado.. Volte sempre.</h4>

                    <span> Se optar por continuar em sua mesa, realize o login novamente...</span>
                </>
            )
        }
            return(
                <>
                    <h2>Aguarde...</h2>
                    <AnimLoading/>
                </>
            )
       } 
   
    
    const navigate = useNavigate()
    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerPaymentScreen>
                    {verification()}
                </ContainerPaymentScreen>
                <Footer/>
            </ContainerMobile>
        </ContainerBase>
    )

}