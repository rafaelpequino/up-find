import styled from "styled-components";
import { StyledSpan, Title } from "../Title";
import StepProcess from "../StepProcess";

const ProcessContainer = styled.section`
    max-width: 100%;
    background-color: var(--color-black);
    margin-top: -41px;
    padding: 70px 20px;
`

const StepByStep = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    position: relative;
`

const CenterLine = styled.div`
    position: absolute;
    top: 90px;
    left: 50%;
    width: 2px;
    height: 75%;
    background-color: var(--color-white);

    @media (max-width: 768px) {
        left: 25px;
    }
`

const Process = (props) => {
    return (
        <ProcessContainer>
            <Title 
                $color="var(--color-white)" 
                $align="center"
            >
                Cada passo do <StyledSpan $color={ props.defaultColor }>processo</StyledSpan> é pensado em você
            </Title>
            <StepByStep>
                { props.steps.map( step => (
                    <StepProcess 
                        key={step.title}
                        titleColor={ props.defaultColor } 
                        circleColor={ props.defaultColor } 
                        align={step.align} 
                        titleText={step.title} 
                        desc={step.desc} /> 
                )) }
                <CenterLine></CenterLine>
            </StepByStep>
        </ProcessContainer>
    )
}

export default Process;