import styled from "styled-components";

const SubheaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100%;
    height: 120px;
    background-color: var(--color-sky-1);
    color: #fff;
    padding: 20px;
    border-radius: 10px;
`;

const UserInfo = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 20px;
`

const ImgUser = styled.div`
    max-width: 80px;
    height: 80px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-contet: center;
    border-radius: 10px;

    & img {
        width: 100%;
    }
`

const BtnLeave = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;
    width: max-content;
    color: var(--color-white);
    font-weight: 300;
    cursor: pointer;

    & img {
        display: block;
        width: 20px;
        filter: invert(1);
    }
`

const Subheader = () => {
    return (
        <SubheaderContainer>
            <UserInfo>
                <ImgUser>
                    <img src="/img/user.jpg" alt="Foto do usuário" />
                </ImgUser>
                <span>Rafael Pequino</span>
            </UserInfo>
            <BtnLeave>
                <img src="/img/icons/nav-system/off.svg" />
                <span>Sair</span>
            </BtnLeave>
        </SubheaderContainer>
    );
};

export default Subheader;
