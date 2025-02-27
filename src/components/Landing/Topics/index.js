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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px 32px;

    @media (max-width: 999px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        justify-content: space-between;
    }
`

const Topics = (props) => {
    return (
        <TopicsContainer>
            <ListTopics>
                {props.list.map(item => (
                    <ItemTopics
                        icon={item.icon}
                        text={item.text}
                        $color={props.defaultColor}
                        $filter={props.defaultFilter}
                    />
                ))}
            </ListTopics>
        </TopicsContainer>
    )
}

export default Topics;