
import { NavStyle } from '../css/NavStyle'
import { Link } from 'react-router-dom'

import Logo from "../assets/logo-da-loja.png"
const Nav=()=>{
    return(
        <>
        <NavStyle>
                <section className="header">
                        <img className="Logo" src={Logo} alt='IMAGEM DA LOJA'></img>
                        <nav className='link'>
                            <Link to="/">Home</Link>
                            <Link to="/produtos">Produtos</Link>
                            <Link to="/contatos">Contatos</Link>
                            <Link to="/sobre">Sobre</Link>
                        </nav>
                </section>
        </NavStyle>
        </>
    )
}
export default Nav