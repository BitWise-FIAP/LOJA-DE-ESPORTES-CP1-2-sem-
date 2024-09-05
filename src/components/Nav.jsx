
import { NavStyle } from '../css/NavStyle'
import { Link } from 'react-router-dom'

const Nav=()=>{
    return(
        <>
        <NavStyle>
            <div>
                <section className="header">
                        <img src='#' alt='IMAGEM DA LOJA'></img>
                        <nav className='link'>
                            <Link to="/">Home</Link>
                            <Link to="/produtos">Produtos</Link>
                            <Link to="/contatos">Contatos</Link>
                            <Link to="/sobre">Sobre</Link>
                        </nav>
                </section>
            </div>
        </NavStyle>
        </>
    )
}
export default Nav