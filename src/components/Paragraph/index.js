import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 16px;
    color: ${ props => props.color || '#000' };
    text-align: ${ props => props.align || 'left' };
    font-size: ${ props => props.size || '16px' }; 
    padding: 0 20px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`