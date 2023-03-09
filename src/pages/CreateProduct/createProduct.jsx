import axios from "axios"
import { useState } from "react"
import { Footer } from "../../components/Footer/footer"
import { Logo } from "../../components/logo/logo"
import { NavAdmin } from "../../components/NavBarAdmin/navBarAdmin"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerProduct } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL_BASE } from "../../constants/URL"

export const CreatePage = ()=>{

    const [product, setProduct] = useState(``)
    const [price, setPrice] = useState(``)
    const [photo, setPhoto] = useState(``)
    const [category, setCategory] = useState(``)

    const createProduct = (ev)=>{
        ev.preventDefault()
        const body = {
            product,
            price,
            photo,
            category
        }
        axios
            .post(`${URL_BASE}/fastfood/products/create`, body)
            .then((resp)=>{
                toast.success(resp.data.message)
            })
            .catch((error)=>{ toast.error(error.response.data)})
    }

    return(
        <ContainerBase>
            <ContainerMobile>
                <Logo/>
                <ContainerProduct>
                    <form onSubmit={createProduct}>
                        <input
                            placeholder="Nome do produto"
                            value={product}
                            onChange={(ev)=>{setProduct(ev.target.value)}}
                        />
                        <input
                            placeholder="preço"
                            value={price}
                            onChange={(ev)=>{setPrice(ev.target.value)}}
                        />
                        <input
                            placeholder="URL da imagem"
                            value={photo}
                            onChange={(ev)=>{setPhoto(ev.target.value)}}
                        />
                        <select
                            value={category}
                            onChange={(ev)=>{setCategory(ev.target.value)}}
                        >
                            <option>Categoria...</option>
                            <option>drinks</option>
                            <option>appetizer</option>
                            <option>dessert</option>
                        </select>
                        <button>Adicionar</button>
                    </form>
                </ContainerProduct>
                <NavAdmin/>
                <Footer/>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
    )
}