import styled from "styled-components";

export const Button = styled.button`
    display: block;
    text-align: center;
    font-size: 16px;
    color: var(--color-white);
    width: max-content;
    min-width: 180px;
    border: 2px solid ${ props => props.setBorderColor || 'var(--color-white)' };
    background-color: ${ props => props.setBackgroundColor || 'transparent' };
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 500px;
    }
`