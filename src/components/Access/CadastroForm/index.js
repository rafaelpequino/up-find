import styled from "styled-components"
import { Subtitle } from "../../Global/Subtitle"
import InputText from "../../Global/InputText"
import { Button } from "../../Global/Button"
import { Paragraph } from "../../Global/Paragraph"

const CadastroContainer = styled.section`
    width: 100%;
    height: 100vh;
    min-height: max-content;
    background-color: var(--color-shadow-deep);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
`

const BoxCadastro = styled.div`
    width: 100%;
    max-width: 1200px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 40px 60px;
    border-radius: 25px;
    background-color: var(--color-shadow-soft);

    @media (max-width: 768px) {
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

const DoubleInput = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const CadastroForm = (props) => {
    return (
        <CadastroContainer>
            <BoxImgLogo src={'/img/iv/' + props.logo + '.png'} alt="Logo da UpFind" />
            <BoxCadastro style={{ boxShadow: `0 0 60px ${props.shadowColor}` }}>
                <Subtitle
                    $color="var(--color-white)"
                    $opacity=".2"
                    $size="40px"
                    $weight="400"
                    $margin="0 auto 30px"
                >
                    Seja bem-vindo!
                </Subtitle>

                <DoubleInput>
                    <InputText
                        label="Nome completo"
                        name="fullname"
                        type="text"
                        color={props.defaultColor}
                    />
                    <InputText
                        label="Email"
                        name="email"
                        type="email"
                        color={props.defaultColor}
                    />
                </DoubleInput>

                <DoubleInput>
                    <InputText
                        label="Celular"
                        name="cellphone"
                        type="text"
                        color={props.defaultColor}
                    />
                    <InputText
                        label="CPF"
                        name="cpf"
                        type="text"
                        color={props.defaultColor}
                    />
                </DoubleInput>

                <DoubleInput>
                    <InputText
                        label="Senha"
                        name="psw"
                        type="password"
                        color={props.defaultColor}
                    />
                    <InputText
                        label="Repita a Senha"
                        name="psw-confirm"
                        type="password"
                        color={props.defaultColor}
                    />
                </DoubleInput>
                <br />
                <Button
                    width="100%"
                    setBorderColor={props.defaultColor}
                    setBackgroundColor={props.defaultColor}
                    $defaultMargin="20px 0 40px"
                >
                    Criar Cadastro
                </Button>

                <Paragraph
                    $align="center"
                    $color="var(--color-white)"
                    $opacity=".8"
                    $linkColor={props.defaultColor}
                    $margin="10px auto"
                >
                    Já possui uma conta? <a href="#">Entre</a>
                </Paragraph>
            </BoxCadastro>
        </CadastroContainer>
    )
}

export default CadastroForm