import styled from "styled-components";

const SubheaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100%;
    height: 120px;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    background-color: green;
    font-size: 14px;

    @media (max-width: 1200px) {
        height: 100px;
        padding: 20px 10px 20px 15px;
    }
`;

const UserInfo = styled.div`
    max-width: max-content;
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 500px) {
        gap: 10px;
    }
`

const DataUser = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & span {
        display: block
    }

    & span:first-child {
        opacity: .7;
        font-size: 12px;
        margin-bottom: 2px;
    }
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

    @media (max-width: 1200px) {
        max-width: 80px;
        height: 80px;
    }
`

const Options = styled.div`
    width: max-content;
    min-width: 25px;
    max-width: max-content;
    display: flex;
    align-items: center;
    gap: 20px;
`

const BtnOpenNav = styled.div`
    width: 20px;
    flex-direction: column;
    gap: 4px;
    display: none;

    & div {
        background-color: var(--color-white);
        width: 100%;
        height: 2.5px;
    }

    @media (max-width: 1200px) {
        display: flex;
    }
`

const Subheader = ({ defaultColor, surname, toggleNav }) => {
    return (
        <SubheaderContainer
            style={{ backgroundColor: defaultColor }}
        >
            <Options>
                <BtnOpenNav onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </BtnOpenNav>
            </Options>
            <UserInfo>
                <DataUser>
                    <span>Olá, {surname}</span>
                    <span>Rafael Pequino</span>
                </DataUser>
                <ImgUser>
                    <img src="/img/user.jpg" alt="Foto do usuário" />
                </ImgUser>
            </UserInfo>
        </SubheaderContainer>
    );
};

export default Subheader;
