import styled from "styled-components";
import Navbar from "../../../components/System/Navbar";

const SystemContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-shadow-deep);
`

const System = () => {
    return (
        <SystemContainer>
            <Navbar />
        </SystemContainer>
    )
}

export default System;