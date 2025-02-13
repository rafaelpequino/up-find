import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 16px;
    color: ${ props => props.color || 'var(--color-black)' };
    text-align: ${ props => props.align || 'left' };
    font-size: ${ props => props.size || '16px' }; 
    padding: 0 20px;

    & span {
        color: var(--color-sky-1);
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`