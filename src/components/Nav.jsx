
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
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/produtos">Produtos</Link></li>
                                <li><Link to="/contatos">Contatos</Link></li>
                                <li><Link to="/sobre">Sobre</Link></li>
                            </ul> 
                        </nav>
                </section>
        </NavStyle>
        </>
    )
}
export default Nav