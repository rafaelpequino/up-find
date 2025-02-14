import styled from "styled-components";

export const Paragraph = styled.p`
    width: 100%;
    font-size: 16px;
    color: ${ props => props.color || 'var(--color-black)' };
    text-align: ${ props => props.align || 'left' };
    font-size: ${ props => props.size || '16px' }; 
    padding: 0;
    max-width: 850px;
    margin: ${ props => props.margin || '20px 0' };
    opacity: ${ props => props.opacity || '1' };

    & span {
        color: var(--color-sky-1);
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`