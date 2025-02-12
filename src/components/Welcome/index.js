import styled from "styled-components";
import { Paragraph } from "../Paragraph";
import { Title } from "../Title";
import { Button } from "../Button";

const WelcomeContainer = styled.section`
    max-width: 100%;
    padding: 50px 20px;
    height: max-content;
    min-height: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
            <Title size="50px" color="#fff" spanColor="#007BFF">Os melhores <span>desenvolvedores</span> reunidos em um só lugar</Title>
            <Paragraph align="center" color="#fff">Encontre o melhor profissional para o seu projeto</Paragraph>
            <DivButtons>
                <Button setBorderColor="#fff" setBackgroundColor="transparent">Como Funciona</Button>
                <Button setBorderColor="#007BFF" setBackgroundColor="#007BFF">Criar Projeto</Button>
            </DivButtons>
        </WelcomeContainer>
    );
};

export default Welcome;
