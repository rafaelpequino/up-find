import styled from "styled-components";
import { Title } from "../Title";

const ProcessContainer = styled.section`
    max-width: 100%;
    background-color: var(--color-black);
    margin-top: -41px;
    padding: 70px 20px;
`

const Process = () => {
    return (
        <ProcessContainer>
            <Title size="50px" color="var(--color-white)" spanColor="var(--color-sky-1)" align="center">Cada passo do <span>processo</span> é pensado em você</Title>
        </ProcessContainer>
    )
}

export default Process;