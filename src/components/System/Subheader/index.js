import styled from "styled-components";

const SubheaderContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    min-width: 100%;
    height: 120px;
    background-color: var(--color-sky-1);
    color: #fff;
    padding: 20px;
    border-radius: 10px;
`;

const Subheader = () => {
    return (
        <SubheaderContainer>
            <span>Foto do Usuário</span>
            <span>Sair</span>
        </SubheaderContainer>
    );
};

export default Subheader;
