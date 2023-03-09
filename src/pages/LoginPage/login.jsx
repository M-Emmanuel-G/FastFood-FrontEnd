import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerBanner, ContainerLogin } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = ()=>{
    const [cpf, setCpf] = useState(``)
    const navigate = useNavigate()
    const context = useContext(GlobalStateContext)

    const sendLogin = (ev)=>{
        ev.preventDefault()

        const body = {
            cpf
        }
        
        axios
            .post('http://localhost:3003/fastfood/users/login', body)
            .then((resp)=>{

                    localStorage.setItem('idUser', resp.data.token[0].id)
                    localStorage.setItem('nameUser', resp.data.token[0].name)

                    
                    navigate('/mesas')
                    
                })
                .catch((error)=>{
                    toast.error(error.response.data)
                })
                
                axios
                .get(`http://localhost:3003/fastfood/users/notPayment/${localStorage.getItem('idUser')}`)
                .then((resp)=>{})
                .catch((error)=>{console.log(error);})    
                
    }
    return(
        <ContainerBase>
            <ContainerMobile>
                <ContainerLogin>
                    <section>
                        <img onClick={()=>{navigate('/admin')}} src="https://cdn-icons-png.flaticon.com/512/78/78948.png"/>
                    </section>
                <ContainerBanner>
                    <img src="https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"/>
                </ContainerBanner>
                    <form onSubmit={sendLogin}>
                        <input
                            type='text'
                            maxLength={11}
                            placeholder="Digite seu CPF..."
                            onChange={(ev)=>{setCpf(ev.target.value)}}
                            value={cpf}
                            required
                        />
                        <button disabled={cpf.length < 11}>Logar</button>
                        <button onClick={()=>{navigate('/signup')}}>Registrar</button>
                    </form>
                </ContainerLogin>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
    )
}