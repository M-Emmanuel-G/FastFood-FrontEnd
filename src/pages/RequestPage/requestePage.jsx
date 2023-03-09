import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer/footer"
import { Header } from "../../components/Header/header"
import { NavBar } from "../../components/NavBar/navBar"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import { GenerateId } from "../../Services/GenerateId"
import { ContainerBase, ContainerMobile } from "../../style/globalStyle"
import { ContainerRequestPage } from "./style"


export const RequestPage = ()=>{
    const context = useContext(GlobalStateContext)
    const navigate = useNavigate()

    const [snack, setSnack] = useState('')
    const [drink, setDrink] = useState('')
    const [sideDish, setSideDish] = useState('')
    const [qtd, setQtd] = useState(0)


    const nextPage = (ev)=>{
        ev.preventDefault()

        if(!snack || !drink || !sideDish) {
            alert('Escolha o seu combo.')
        }else if(qtd === 0){ 
            alert('Escolha a quantidade...')
        }
        else{
            const request = {
                id: GenerateId(),
                snack:snack,
                drinks:drink,
                sideDish:sideDish,
                quantity:qtd
            }
            context.setRequests([...context.requests, request])
            alert('Seu pedido foi feito com sucesso..')
            navigate('/meuspedidos')
        }
        
    }

   return(
    <ContainerBase>
       <ContainerMobile>
       <Header/>
        <ContainerRequestPage>
            <form onSubmit={nextPage}>
                <div>
                    <h3>Escolha seu lanche:</h3>
                    <select
                        value={snack}
                        onChange={(ev)=>{setSnack(ev.target.value)}}
                    >
                        <option>Selecione...</option>
                        {context.snack.map((snack, key)=>{
                            return(
                                    <option key={key}>{snack.snack}</option>
                            )
                        })}
                    </select>    
                    <h3>Escolha sua bebida:</h3>
                    <select
                        value={drink}
                        onChange={(ev)=>{setDrink(ev.target.value)}}
                    >
                        <option>Selecione...</option>
                        {context.drinks.map((drink, key)=>{
                            return(
                                    <option key={key}>{drink.drink}</option>
                            )
                        })}
                    </select>    
                    <h3>Acompanhamento:</h3>
                    <select
                        value={sideDish}
                        onChange={(ev)=>{setSideDish(ev.target.value)}}
                    >
                        <option>Selecione...</option>
                        {context.sideDish.map((dish, key)=>{
                            return(
                                    <option key={key}>{dish.sideDish}</option>
                            )
                        })}
                    </select> 
                    <h3>Quantidade:</h3>
                    <select
                        value={qtd}
                        onChange={(ev)=>{setQtd(ev.target.value)}}
                    >
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>   
                    <button>Concluir pedido</button>
                </div>
            </form>
        </ContainerRequestPage>
        <NavBar/>
        <Footer/>
       </ContainerMobile>
    </ContainerBase>
   ) 
}