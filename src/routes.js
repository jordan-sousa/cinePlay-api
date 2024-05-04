import Favoritos from "pages/Favoritos"
import Home from "pages/Inicio"
import NaoEncontrada from "pages/NaoEncontrada"
import PaginaBase from "pages/PaginaBase"
import Player from "pages/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}> 
                    <Route index element={<Home />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes