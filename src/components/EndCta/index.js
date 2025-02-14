import styled from "styled-components"
import { StyledSpan, Title } from "../Title"
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
                $size="45px"
            >
                Vamos buscar o <StyledSpan $color="var(--color-sky-1)">melhor desenvolvedor</StyledSpan> para o <StyledSpan $color="var(--color-sky-1)">seu projeto</StyledSpan>?
            </Title>
            <br/>
            <Button setBorderColor="var(--color-sky-1)" setBackgroundColor="transparent">Criar Projeto</Button>
        </EndCtaContainer>
    )
}

export default EndCta;