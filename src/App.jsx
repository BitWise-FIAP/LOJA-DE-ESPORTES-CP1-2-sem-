import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Sobre from "./routes/Sobre"
import Produtos from "./routes/Produtos"
import Home from "./routes/Home"
function App() {


  return (
    <>
    <Nav/>
    <Home/>
    {/* testando estilo DO ROUTES (fazer renderizacao depois)*/}
    <Produtos/>
    <Sobre/>
    <Footer/>
    </>
  )
}

export default App
