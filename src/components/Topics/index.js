import styled from "styled-components";
import ItemTopics from "../ItemTopics";


const TopicsContainer = styled.section`
    width: 100%;
    padding: 70px 20px;
    background-color: var(--color-black);
    
`

const ListTopics = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px 32px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Topics = () => {
    return (
        <TopicsContainer>
            <ListTopics>
                <ItemTopics
                    icon="document"
                    text="Recebe até 3 orçamentos de especialistas"
                />
                <ItemTopics
                    icon="web"
                    text="Tudo feito 100% online, sem sair de casa"
                />
                <ItemTopics
                    icon="lock"
                    text="Garanta sua segurança com o modo UpSafety"
                />
            </ListTopics>
        </TopicsContainer>
    )
}

export default Topics;