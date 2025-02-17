import styled from "styled-components";
import { Paragraph } from "../../Global/Paragraph";
import { useState, useEffect } from "react";

const StepProcessContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: calc(50% - 45px) 50px calc(50% - 45px);
    align-items: center;
    gap: 20px;
    padding: 32px 0;
    margin: auto;

    @media (max-width: 768px) {
        grid-template-columns: 50px auto;
    }
`;

const AssistantDiv = styled.div`
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`;

const CircleStep = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    background-color: var(--color-black);
    z-index: 10;

    @media (max-width: 768px) {
        display: block;
    }
`;

const StepProcess = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isRightAligned = !isMobile && props.align === 'right';
    const paragraphAlign = isMobile ? 'left' : props.align;

    return (
        <StepProcessContainer>
            {!isRightAligned && <AssistantDiv />}
            {!isRightAligned && <CircleStep style={{borderColor: props.circleColor}} />}

            <div>
                <Paragraph
                    $color={props.titleColor}
                    $align={paragraphAlign}
                >
                    <strong>{props.titleText}</strong>
                </Paragraph>
                <Paragraph
                    $color="var(--color-white)"
                    $align={paragraphAlign}
                >
                    {props.desc}
                </Paragraph>
            </div>

            {isRightAligned && <CircleStep style={{borderColor: props.circleColor}} />}
            {isRightAligned && <AssistantDiv />}
        </StepProcessContainer>
    );
};

export default StepProcess;
