
import { NavStyle } from '../css/NavStyle'
const Nav=()=>{
    return(
        <>
        <NavStyle>
            <div>
                <section className="header">
                        <img src='#' alt='IMAGEM DA LOJA'></img>
                        <nav className='link'>
                            <a>Home</a>
                            <a>Produtos</a>
                            <a>Contatos</a>
                            <a>Sobre</a>
                        </nav>
                </section>
            </div>
        </NavStyle>
        </>
    )
}
export default Nav