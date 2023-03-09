import axios from "axios"
import { useState } from "react"
import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { NavAdmin } from "../../components/NavBarAdmin/navBarAdmin"
import { URL_BASE } from "../../constants/URL"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerCreateTable, ContainerInfo, ContainerTable } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRequestData from "../../hooks/useRequestData"

export const TablePage = ()=>{

    const [tableName, setTableName] = useState('')

    const createTable = (ev)=>{
        ev.preventDefault()
        const body = {
            tableName: tableName,
        }
        axios
        .post(`${URL_BASE}/fastfood/tables/create`, body)
        .then((resp)=>{
            toast.success(resp.data)
            setTableName('')
        })
        .catch((error)=>{console.log(error.response);})
    }
    const [data] = useRequestData(`${URL_BASE}/fastfood/tables/showTables`)

    const renderTables = data && data.map((table, key)=>{
        console.log(table);
        return(
            <div key={key}>
                <span>{table.table_name}</span>
                <button>X</button>
            </div>
        )
    })

    console.log(data);

    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerTable>
                    <ContainerInfo>
                        {renderTables}
                    </ContainerInfo>
                    <ContainerCreateTable>
                        <form onSubmit={createTable}>
                            <h2>Criar mesa</h2>
                            <input
                                placeholder="Nome da mesa"
                                value={tableName}
                                onChange={(ev)=>{setTableName(ev.target.value)}}
                            />
                            <button disabled = { tableName === ``}>Criar</button>
                        </form>
                    </ContainerCreateTable>
                </ContainerTable>
                <NavAdmin/>
                <Footer/>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
    )
}