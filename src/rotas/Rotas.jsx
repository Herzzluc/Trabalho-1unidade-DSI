import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "../componentes/pages"
import Cadastro from "../componentes/cadastro/Cadastro"

const Rotas = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route element= { <Home /> }  path="/" exact />
           <Route element= { <Cadastro /> }  path="/cadastro" />
        </Routes>
       </BrowserRouter>
   )
}

export default Rotas