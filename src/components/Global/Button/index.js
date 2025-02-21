import styled from "styled-components";

export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => !['setBorderColor', 'setBackgroundColor'].includes(prop)
})`
    display: block;
    text-align: center;
    font-size: 14px;
    color: var(--color-white);
    min-width: 180px;
    width: ${props => props.width || 'max-content'};
    margin: ${props => props.$defaultMargin || '0'};
    border: 2px solid ${props => props.setBorderColor || 'var(--color-white)'};
    background-color: ${props => props.setBackgroundColor || 'transparent'};
    padding: 12px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
