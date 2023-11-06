import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { URL_BASE } from "../../constants/URL"
import useRequestData from "../../hooks/useRequestData"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { CardTable, ContainerSelectTable } from "./style"

export const SelectTable = ()=>{
    const [data] = useRequestData(`${URL_BASE}/fastfood/tables/all`)
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`${URL_BASE}/fastfood/users/profile/${localStorage.getItem('idUser')}`)
        .then((resp)=>{})
    },[])

    const renderTables = data && data.map((table, key)=>{
        return(
            <CardTable key={key}>
                <span>{table.table_name}</span>
                <button onClick={()=>{selectTable(table.id)}}>Escolher</button>
            </CardTable>
        )
    })
    const selectTable = (idTable)=>{
        localStorage.setItem('idTable', idTable)
        axios.
            get(`${URL_BASE}/fastfood/tables/select/idClient/${localStorage.getItem('idUser')}/idTable/${idTable}`)
            .then((resp)=>{
                navigate('/home')
            })
            .catch((error)=>{
                console.log(error.response)
            })
    }

    const verify = ()=>{
        if(renderTables.length === 0){
            return (
                <span>Nenhuma mesa disponivel.</span>
            ) 
        } else{
            return renderTables
        }
        
    }
    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerSelectTable>
                    <h2> Seja bem vindo:</h2>
                    <span>{localStorage.getItem('nameUser')}, escolha sua mesa:</span>
                    {verify()}
                </ContainerSelectTable>
            </ContainerMobile>
        </ContainerBase>
    )
}