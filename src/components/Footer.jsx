import { FooterStyle } from '../css/FooterStyle'
import footer_apple from '../assets/footer_apple.png' 
import footer_google from '../assets/footer_google.png' 

const Footer=()=>{
    return(
        <>
        <FooterStyle>
            <footer className='footer'>
                <h5>@2024 - Todos os direitos reservados</h5>
                <img src={footer_apple} className='apple' alt='Baixe na APPLE STORE'></img>
                <img src={footer_google} className='google' alt='Baixe na Google Play'></img>

            </footer>
        </FooterStyle>
        
        </>
    )
}

export default Footer