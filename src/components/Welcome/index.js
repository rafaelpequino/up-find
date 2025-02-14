import styled from "styled-components";
import { Paragraph } from "../Paragraph";
import { Title } from "../Title";
import { Button } from "../Button";

const WelcomeContainer = styled.section`
    width: 100%;
    padding: 150px 20px 80px;
    height: 75vh;
    min-height: 600px;
    max-height: 800px;
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
        background-image: var(--bkg-url);
        background-size: cover;
        background-position: center;
        background-color: rgba(0, 0, 0, 0.8);
        background-blend-mode: darken;
        background-attachment: fixed;
        transition: transform 0.3s ease-in-out;
        z-index: -1;
    }
`

const InsideWelcome = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

const DivButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px 32px;
    margin-top: 35px;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 500px;
    }
        
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const Welcome = (props) => {
    return (
        <WelcomeContainer style={{ '--bkg-url': `url(${props.bkgUrl || '/img/code.jpg'})` }}>
            <InsideWelcome>
                <Title color="var(--color-white)" spanColor={props.defaultColor} align="left" marginSides="0">
                    {props.children}
                </Title>
                <Paragraph align="left" color="var(--color-white)" size="24px">{props.text}</Paragraph>
                <DivButtons>
                    <Button setBorderColor="var(--color-white)" setBackgroundColor="transparent">Como Funciona</Button>
                    <Button setBorderColor={props.defaultColor} setBackgroundColor={props.defaultColor}>{props.cta} Projeto</Button>
                </DivButtons>
            </InsideWelcome>
        </WelcomeContainer>
    );
};


export default Welcome;
