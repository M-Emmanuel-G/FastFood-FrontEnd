import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AdminPage } from "../pages/AdminHome/adminPage"
import { AdminOrders } from "../pages/AdminOrders/adminOrders"
import { CreatePage } from "../pages/CreateProduct/createProduct"
import { HomePage } from "../pages/HomePage/homepage"
import { InfoRequest } from "../pages/InfoRequestPage/infoRequest"
import { LoginPage } from "../pages/LoginPage/login"
import { MenuPage } from "../pages/MenuPage/menuPage"
import { PaymentScreen } from "../pages/paymentSuccess/paymentScreen"
import { PaymentPage } from "../pages/PayTheBill/payment"
import { ProfilePage } from "../pages/ProfilePage/profilePage"
import { RegisterPage } from "../pages/RegisterPage/registerPage"
import { SelectTable } from "../pages/SelectTablePage/selectTable"
import { TablePage } from "../pages/TablesPage/tablePage"

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/meuspedidos" element={<InfoRequest/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/pagamento" element={<PaymentPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<RegisterPage/>}/>
                <Route path="/adminOrders" element={<AdminOrders/>}/>
                <Route path="/cardapio" element={<MenuPage/>}/>
                <Route path="/criarProdutos" element={<CreatePage/>}/>
                <Route path="/mesas" element={<SelectTable/>}/>
                <Route path="/pagamentoConcluido" element={<PaymentScreen/>}/>
                <Route path="/perfil" element={<ProfilePage/>}/>
                <Route path="/adminMesas" element={<TablePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}