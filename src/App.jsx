import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from "./pages/Contato"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App