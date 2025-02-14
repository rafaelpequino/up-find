import styled from "styled-components"
import { Title } from "../Title"
import { Button } from "../Button"

const EndCtaContainer = styled.section`
    max-width: 100%;
    background-color: var(--color-black);
    margin-top: -40px;
    padding: 70px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const EndCta = () => {
    return (
        <EndCtaContainer>
            <Title 
                $color="var(--color-white)" 
                $spanColor="var(--color-sky-1)" 
                $size="45px"
            >
                Vamos buscar o <span>melhor desenvolvedor</span> para o <span>seu projeto</span>?
            </Title>
            <br/>
            <Button setBorderColor="var(--color-sky-1)" setBackgroundColor="transparent">Criar Projeto</Button>
        </EndCtaContainer>
    )
}

export default EndCta;