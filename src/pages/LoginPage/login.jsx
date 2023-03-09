import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimLoading, ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerBanner, ContainerLoading, ContainerLogin } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL_BASE } from "../../constants/URL"

export const LoginPage = ()=>{
    const [cpf, setCpf] = useState(``)
    const navigate = useNavigate()

    const sendLogin = (ev)=>{
        ev.preventDefault()
        document.getElementById('loading').style.opacity = 1
        

        const body = {
            cpf
        }
        
        axios
            .post(`${URL_BASE}/fastfood/users/login`, body)
            .then((resp)=>{

                    localStorage.setItem('idUser', resp.data.token[0].id)
                    localStorage.setItem('nameUser', resp.data.token[0].name)

                    
                    navigate('/mesas')
                    
                })
                .catch((error)=>{
                document.getElementById('loading').style.opacity = 0
                    toast.error(error.response.data)
                })
                
                axios
                .get(`${URL_BASE}/fastfood/users/notPayment/${localStorage.getItem('idUser')}`)
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
                <ContainerLoading id="loading">
                    <AnimLoading/>
                </ContainerLoading>
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