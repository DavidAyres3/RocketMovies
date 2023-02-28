import {Routes, Route} from 'react-router-dom'
//o Routes, serve para guardar as rotas dentro de um componente, que são acessadas pelo Route.
import { SignIn } from "../pages/SignIn"
import { SignUp } from '../pages/SignUp'
export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/register" element={<SignUp/>} />
        </Routes>
    )
}