import styled from "styled-components";

export const DoubleInput = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`