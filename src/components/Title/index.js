import styled from "styled-components";

export const Title = styled.h2`
    font-size: ${ props => props.size || '55px' };
    color: ${ props => props.color || 'var(--color-black)' };
    text-align: ${ props => props.align || 'center' };
    margin: 0 auto 30px;
    padding: 0 20px;
    max-width: 850px;
    font-weight: 700;

    & span {
        color: ${ props => props.spanColor || 'var(--color-black)' }
    }

    @media (max-width: 768px) {
        font-size: 45px };
    }
`