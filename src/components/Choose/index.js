import styled from "styled-components";
import { Paragraph } from "../Paragraph";
import { Title } from "../Title";

const ChooseContainer = styled.section`
    width: 100%;
    height: max-content;
    min-height: calc(100vh - 80px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const UpFinderContainer = styled.div`
    width: 100%;
    height: 100%;
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
        background-image: url('/img/project.jpg');
        background-size: cover;
        background-position: center;
        background-color: rgba(0, 0, 0, 0.8);
        background-blend-mode: darken;
        transition: transform 0.3s ease-in-out;
        z-index: -1;
    }

    &:hover::before {
        transform: scale(1.05); /* Aumenta a imagem sem afetar o grid */
    }
`;

const UpFoundContainer = styled(UpFinderContainer)`
    &::before {
        background-image: url('/img/node_code.jpg');
    }
`;

const Choose = () => {
    return (
        <ChooseContainer>
            <UpFinderContainer>
                <Title color="#fff">Sou UpFinder</Title>
                <Paragraph color="#fff" align="center" size="20px">
                    Tenho um projeto e preciso de um desenvolvedor
                </Paragraph>
            </UpFinderContainer>

            <UpFoundContainer>
                <Title color="#fff">Sou UpFound</Title>
                <Paragraph color="#fff" align="center" size="20px">
                    Sou desenvolvedor e quero fazer parte do time UpFind
                </Paragraph>
            </UpFoundContainer>
        </ChooseContainer>
    );
};

export default Choose;
