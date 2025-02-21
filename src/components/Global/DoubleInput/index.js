import styled from "styled-components";

export const DoubleInput = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(1, 1fr);
    }
`