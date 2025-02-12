import styled from "styled-components";

export const Title = styled.h2`
    font-size: 32px;
    color: ${ props => props.color || '#000' };
    text-align: ${ props => props.align || 'center' };
`