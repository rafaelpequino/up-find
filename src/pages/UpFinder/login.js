import styled from "styled-components"
import { Subtitle } from "../../components/Global/Subtitle"
import InputText from "../../components/Global/InputText"
import { Button } from "../../components/Global/Button"
import { Paragraph } from "../../components/Global/Paragraph"

const LoginContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: var(--color-shadow-deep);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const BoxLogin = styled.div`
    width: 100%;
    max-width: 400px;
    border: 2px solid var(--color-sky-1);
    padding: 30px 20px;
    border-radius: 15px;
`

const BoxImgLogo = styled.img`
    display: block;
    width: 100%;
    max-width: 120px;
    margin: 15px auto 30px;
`

const ForgotPswLink = styled.a`
    display: block;
    text-align: center;
    color: var(--color-sky-1);
    text-decoration: none;
    margin-top: 5px;
    opacity: .8;
`

const Login = () => {
    return (
        <LoginContainer>
            <BoxLogin>
                <BoxImgLogo src="/img/iv/first-logo.png" alt="Logo da UpFind" />
                <Subtitle $color="var(--color-white)" $size="20px">Bem-vindo de volta, UpFinder</Subtitle>
                <br />
                <InputText 
                    label="Email"
                    name="email" 
                    type="email"
                />
                <InputText 
                    label="Senha"
                    name="psw" 
                    type="password"
                />
                <ForgotPswLink href="">Esqueceu a senha?</ForgotPswLink>
                <br />
                <Button 
                    width="100%" 
                    setBorderColor="var(--color-sky-1)" 
                    setBackgroundColor="var(--color-sky-1)"
                    $defaultMargin="20px 0 40px"
                >
                    Faça login
                </Button>

                <Paragraph 
                    $align="center" 
                    $color="var(--color-white)" 
                    $opacity=".8"
                    $linkColor="var(--color-sky-1)"
                    $margin="10px 0"
                >
                    Não tem uma conta? <a href="#">Cadastre-se</a>
                </Paragraph>
                <Paragraph 
                    $align="center" 
                    $color="var(--color-white)" 
                    $opacity=".8"
                    $linkColor="var(--color-sky-1)"
                    $margin="10px 0"
                >
                    É desenvolvedor? <a href="#">Entre aqui</a>
                </Paragraph>
            </BoxLogin>
        </LoginContainer>
    )
}

export default Login