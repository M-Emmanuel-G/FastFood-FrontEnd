import axios from "axios"
import { useContext, useState } from "react"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import { ContainerCard } from "./style"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CardProduct = (props)=>{
    const context = useContext(GlobalStateContext)
    const [qtd, setQtd] = useState(1)

    const addCart = (product)=>{
     axios
            .get(`http://localhost:3003/fastfood/order/neworder/idClient/${localStorage.getItem('idUser')}/idProduct/${product.id}/quantity/${qtd}/idTable/${localStorage.getItem('idTable')}`)  
            .then((resp)=>{
                toast.success(resp.data.message)
            })
            .catch((error)=>{console.log(error);})
    }

    return(
        <ContainerCard>
            <img src={props.product.photo}/>
            <div>
                <span>{props.product.product}</span>
                <p>R$ {props.product.price.toFixed(2)}</p>
                <section>
                    <select
                        value={qtd}
                        onChange={(ev)=>{setQtd(ev.target.value)}}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <img  onClick={()=>{addCart(props.product)}} src="https://cdn-icons-png.flaticon.com/512/148/148764.png"/>
                </section>
            </div>
        </ContainerCard>
    )
}