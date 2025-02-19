import styled from "styled-components";
import Navbar from "../../../components/System/Navbar";
import Subheader from "../../../components/System/Subheader";

const SystemContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-shadow-deep);
    display: flex;
    gap: 20px;
    padding: 20px;

    & div {
        width: 100%;
    }
`

const System = () => {
    return (
        <SystemContainer>
            <Navbar />
            <div>
                <Subheader />
            </div>
        </SystemContainer>
    )
}

export default System;