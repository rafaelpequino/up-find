import styled from "styled-components";

export const Subtitle = styled.h2`
    font-size: ${props => props.$size || '24px'};
    color: ${props => props.$color || 'var(--color-black)'};
    text-align: ${props => props.$align || 'center'};
    opacity: ${props => props.$opacity || '1'};
    font-weight: ${props => props.$weight || '700'};
    margin: ${props => props.$margin || '10px auto'};
    padding: ${props => props.$padding || '0 20px'};
    max-width: 800px;

    @media (max-width: 500px) {
        font-size: 24px;
    }
`;
