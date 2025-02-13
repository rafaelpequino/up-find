import styled from "styled-components";
import ItemTopics from "../ItemTopics";

const TopicsContainer = styled.section`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px 32px;
    padding: 40px 20px;
    background-color: #000;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Topics = () => {
    return (
        <TopicsContainer>
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
        </TopicsContainer>
    )
}

export default Topics;