import styled from "styled-components"
import { Subtitle } from "../../Global/Subtitle"
import InputText from "../../Global/InputText"
import { Button } from "../../Global/Button"
import { Paragraph } from "../../Global/Paragraph"

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
    border-width: 2px;
    border-style: solid;
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
    text-decoration: none;
    margin-top: 5px;
    opacity: .8;
`

const LoginForm = (props) => {
    return (
        <LoginContainer>
            <BoxLogin style={{borderColor: props.defaultColor}}>
                <BoxImgLogo src={'/img/iv/' + props.logo + '.png'} alt="Logo da UpFind" />
                <Subtitle $color="var(--color-white)" $size="20px">Bem-vindo de volta, { props.username }</Subtitle>
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
                <ForgotPswLink href="#" style={{color: props.defaultColor}}>Esqueceu a senha?</ForgotPswLink>
                <br />
                <Button
                    width="100%"
                    setBorderColor={props.defaultColor}
                    setBackgroundColor={props.defaultColor}
                    $defaultMargin="20px 0 40px"
                >
                    Faça login
                </Button>

                <Paragraph
                    $align="center"
                    $color="var(--color-white)"
                    $opacity=".8"
                    $linkColor={props.defaultColor}
                    $margin="10px 0"
                >
                    Não tem uma conta? <a href="#">Cadastre-se</a>
                </Paragraph>
                <Paragraph
                    $align="center"
                    $color="var(--color-white)"
                    $opacity=".8"
                    $linkColor={props.defaultColor}
                    $margin="10px 0"
                >
                    É desenvolvedor? <a href="#">Entre aqui</a>
                </Paragraph>
            </BoxLogin>
        </LoginContainer>
    )
}

export default LoginForm