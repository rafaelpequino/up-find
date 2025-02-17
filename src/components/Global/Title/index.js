import styled from "styled-components";

export const Title = styled.h2`
    font-size: ${props => props.$size || '55px'};
    color: ${props => props.$color || 'var(--color-black)'};
    text-align: ${props => props.$align || 'center'};
    margin: 0 ${props => props.$marginSides || 'auto'} 30px;
    opacity: ${props => props.$opacity || '1'};
    padding: 0;
    max-width: 850px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 45px;
        text-align: left;
    }

    @media (max-width: 500px) {
        font-size: 35px;
        margin: 0 auto 15px;
    }

    @media (max-width: 400px) {
        font-size: 30px;
    }
`;

export const StyledSpan = styled.span`
    color: ${props => props.$color || 'var(--color-black)'};
`;
