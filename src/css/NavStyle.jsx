import styled from 'styled-components'

export const NavStyle = styled.section`
.header{
    background-color: #161868; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-size: 20px;
    max-width: 100%;
    margin: 0;

}

.link ul{
    display: flex;
    list-style: none;

}

.link ul li{
    transition: all .2s ease-in-out;
}

.link ul li:hover{
    
    transition: .2s all ease-in-out;
    transform: translateY(-4px);
}

.link ul li a:hover{
    color: white;
}

.link a{
    margin-left: 55px;
    text-decoration: none;
    font-size: 25px;
    color: #9fdbfd;
    transition: .2s all;
}

.Logo{
    height: 5rem;
    width: 5rem
}

`