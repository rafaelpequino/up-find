import styled from "styled-components";
import { Paragraph } from "../Paragraph";
import { Title } from "../Title";
import { Button } from "../Button";

const WelcomeContainer = styled.section`
    max-width: 100%;
    padding: 150px 20px 80px;
    height: 100%;
    min-height: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/img/team.jpg');
        background-size: cover;
        background-position: center;
        background-color: rgba(0, 0, 0, 0.8);
        background-blend-mode: darken;
        background-attachment: fixed;
        transition: transform 0.3s ease-in-out;
        z-index: -1;
    }
`

const DivButtons = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 20px;
`;

const Welcome = () => {
    return (
        <WelcomeContainer>
            <Title color="var(--color-white)" spanColor="var(--color-sky-1)">Os melhores <span>desenvolvedores</span> reunidos em um só lugar</Title>
            <Paragraph align="center" color="var(--color-white)">Encontre o melhor profissional para o seu projeto</Paragraph>
            <DivButtons>
                <Button setBorderColor="var(--color-white)" setBackgroundColor="transparent">Como Funciona</Button>
                <Button setBorderColor="var(--color-sky-1)" setBackgroundColor="var(--color-sky-1)">Criar Projeto</Button>
            </DivButtons>
        </WelcomeContainer>
    );
};

export default Welcome;
