// //  config rotas
import { BrowserRouter, Routes, Route } from "react-router-dom"

// config navbar



// rotas
import Home from "./pages/home/Home"
import Lancamentos from "./pages/lancamentos/Lancamentos"
import Form from "./pages/adiciona/Form"
import Navbar from "./conponents/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
          <Route path="/adiciona" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
