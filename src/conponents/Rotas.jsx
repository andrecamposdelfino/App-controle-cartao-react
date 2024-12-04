
// //  config rotas
import { BrowserRouter, Routes, Route } from "react-router-dom"

// config navbar

import Container from "./Container"

// rotas
import Home from "../pages/home/Home"
import Lancamentos from "../pages/lancamentos/Lancamentos"

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Container />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
