import {Routes, Route} from 'react-router-dom'
//o Routes, serve para guardar as rotas dentro de um componente, que são acessadas pelo Route.
import { Home } from "../pages/Home"
import { New } from '../pages/CreateMovie'
import { Profile } from '../pages/Profile'
import { MoviesPreview } from '../pages/MoviesPreview'
export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/moviespreview/:id" element={<MoviesPreview/>} />
        </Routes>
    )
}