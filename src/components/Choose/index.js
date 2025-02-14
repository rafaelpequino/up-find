import styled from "styled-components";
import { Paragraph } from "../Paragraph";
import { StyledSpan, Title } from "../Title";
import { useNavigate } from "react-router-dom";

const ChooseContainer = styled.section`
    width: 100%;
    height: max-content;
    min-height: 100vh;
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
    const navigate = useNavigate();
    return (
        <ChooseContainer>
            <UpFinderContainer onClick={() => navigate('/upfinder')}>
                <Title 
                    $color="var(--color-white)" 
                >
                    Sou <StyledSpan $color="var(--color-sky-1)">UpFinder</StyledSpan>
                </Title>
                <Paragraph 
                    $color="var(--color-white)" 
                    $align="center" 
                    $size="20px"
                >
                    Tenho um projeto e preciso de um desenvolvedor
                </Paragraph>
            </UpFinderContainer>

            <UpFoundContainer onClick={() => navigate('/upfound')}>
                <Title 
                    $color="var(--color-white)" 
                >
                    Sou <StyledSpan $color="var(--color-sky-2)">UpFound</StyledSpan>
                </Title>
                <Paragraph 
                    $color="var(--color-white)" 
                    $align="center" 
                    $size="20px"
                >
                    Sou desenvolvedor e quero fazer parte do time UpFind
                </Paragraph>
            </UpFoundContainer>
        </ChooseContainer>
    );
};

export default Choose;
