import Nav from "./components/Nav"
import Footer from "./components/Footer"

import {Outlet} from 'react-router-dom'

function App() {


  return (
    <>
    <Nav/>
    {/* testando estilo DO ROUTES (fazer renderizacao depois)*/}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
