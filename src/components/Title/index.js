import styled from "styled-components";

export const Title = styled.h2`
    font-size: ${ props => props.size || '32px' };
    color: ${ props => props.color || 'var(--color-black)' };
    text-align: ${ props => props.align || 'center' };
    margin-bottom: 10px;
    padding: 0 20px;
    max-width: 800px;
    font-weight: 700;

    & span {
        color: ${ props => props.spanColor || 'var(--color-black)' }
    }
`