import styled from "styled-components"
import { Subtitle } from "../../Global/Subtitle"
import InputText from "../../Global/InputText"
import { Button } from "../../Global/Button"
import { Paragraph } from "../../Global/Paragraph"
import { useNavigate } from "react-router-dom"

const LoginContainer = styled.section`
    width: 100%;
    height: 100vh;
    min-height: max-content;
    background-color: var(--color-shadow-deep);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const BoxLogin = styled.div`
    width: 100%;
    max-width: 500px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 40px 60px;
    border-radius: 25px;
    background-color: var(--color-shadow-soft);

    @media (max-width: 999px) {
        padding: 40px 20px;
        border-radius: 15px;
    }
`

const BoxImgLogo = styled.img`
    display: block;
    width: 100%;
    max-width: 150px;
    margin: 0 auto 30px;
`

const ForgotPswLink = styled.a`
    display: block;
    text-align: center;
    text-decoration: none;
    margin-top: 5px;
    opacity: .8;
`

const LoginForm = (props) => {
    const navigate = useNavigate();

    return (
        <LoginContainer>
            <BoxImgLogo src={'/img/iv/' + props.logo + '.png'} alt="Logo da UpFind" />
            <BoxLogin>
                <Subtitle 
                    $color="var(--color-white)" 
                    $opacity=".2" 
                    $size="40px"
                    $weight="400"
                    $margin="0 auto 30px"
                >
                    Acesse sua conta
                </Subtitle>
                <InputText
                    label="Email"
                    name="email"
                    type="email"
                    color={props.defaultColor}
                />
                <br/>
                <InputText
                    label="Senha"
                    name="psw"
                    type="password"
                    color={props.defaultColor}
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
                    Não possui uma conta? <button onClick={() => navigate(props.navigate + 'cadastro')} style={{cursor: 'pointer'}}>Cadastre-se</button>
                </Paragraph>
            </BoxLogin>
        </LoginContainer>
    )
}

export default LoginForm