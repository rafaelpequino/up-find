import styled from "styled-components";

export const SystemContainer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin: auto;
    min-height: 100vh;
    background-color: var(--color-shadow-deep);
`

export const InsideSystemContainer = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: auto;
    display: flex;
    gap: 40px;
    padding: 20px;

    & div {
        width: 100%;
    }
`