import styled from "styled-components";

export const SectionContainer = styled.section`
    width: 100%;
    max-width: 100%;
    height: max-content;
    background-color: var(--color-shadow-soft);
    margin: 20px 0;
    padding: 40px;
    border-radius: 10px;

    @media (max-width: 999px) {
        padding: 20px;
    }
`