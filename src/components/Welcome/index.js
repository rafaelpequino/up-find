import styled from "styled-components";
import { Paragraph } from "../Paragraph";
import { Title } from "../Title";

const WelcomeContainer = styled.section`
    max-width: 100%;
    padding: 50px 20px;
    height: max-content;
    min-height: 500px;
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

const MainTitle = styled.h1`
    font-size: 32px;
    color: #ffffff;

    & span {
        color: #007BFF;
    }
`;

const Welcome = () => {
    return (
        <WelcomeContainer>
            <Title size="50px" color="#fff" spanColor="#007BFF">Os melhores <span>desenvolvedores</span> reunidos em um só lugar</Title>
            <Paragraph align="center" size="20px" color="#fff">Encontre o melhor profissional para o seu projeto</Paragraph>
        </WelcomeContainer>
    );
};

export default Welcome;
