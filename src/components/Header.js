import styled from "styled-components";

const headerContainer = styled.header`
    width: 100%;
    padding: 20px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Header = (props) => {
    return (
        <headerContainer>
            <img src={ props.logoPath } alt={ props.logoSrc } />
            <div>
                <a href={ props.linkLogin }>Entrar</a>
                <a href={ props.linkCadastro }>Cadastre-se</a>
            </div>
        </headerContainer>
    )
}

export default Header;