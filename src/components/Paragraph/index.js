import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 32px;
    color: ${ props => props.color || '#000' };
    text-align: ${ props => props.align || 'center' };
`