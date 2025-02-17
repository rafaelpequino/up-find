import styled from "styled-components";

export const Subtitle = styled.h2`
    font-size: ${props => props.$size || '24px'};
    color: ${props => props.$color || 'var(--color-black)'};
    text-align: ${props => props.$align || 'center'};
    margin: 10px auto;
    padding: 0 20px;
    max-width: 800px;
    font-weight: 700;
`;
