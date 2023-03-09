import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer/footer"
import { Header } from "../../components/Header/header"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerBanner, ContainerLocal, ContainerRegister } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL_BASE } from "../../constants/URL"

export const RegisterPage = ()=>{
    const [cpf, setCpf] = useState('')
    const [name, setName] = useState(``)
    const [phone, setPhone] = useState(``)
    const navigate = useNavigate()
    const context = useContext(GlobalStateContext)

    const signup= (ev)=>{
        ev.preventDefault()
        const body = {
            cpf,
            name,
            phone
        }

        axios
            .post(`${URL_BASE}/fastfood/users/signup`, body)
            .then((resp)=>{
                toast.success(`Registro criado com sucesso. Agora ja pode realizar o seu login!`)
                navigate('/login')
            })

            .catch((error)=>{
                toast.error(error.response.data);
            })
    }
    return(
        <ContainerBase>
            <ContainerMobile>
                <ContainerRegister>
                    <ContainerBanner>
                        <img src="https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"/>
                    </ContainerBanner>
                    <form onSubmit={signup}>
                        <h3> Insira seus dados pessoais.</h3>
                        <input
                            type='text'
                            placeholder="Digite seu CPF..."
                            maxLength={11}
                            onChange={(ev)=>{setCpf(ev.target.value)}}
                            value={cpf}
                            required
                        />
                        <input
                            type='text'
                            placeholder={'Seu nome'}
                            value={name}
                            required
                            onChange={(ev)=>{setName(ev.target.value)}}
                        />
                        <input
                            type='text'
                            placeholder={'Telefone'}
                            value={phone}
                            required
                            onChange={(ev)=>{setPhone(ev.target.value)}}
                        />
                        <button disabled={ cpf.length < 11}>Registrar</button>
                        <button type="button"  onClick={()=>{navigate('/login')}}>Voltar</button>
                    </form>
                </ContainerRegister>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
    )
}