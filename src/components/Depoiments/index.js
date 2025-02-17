import styled from "styled-components";
import { StyledSpan, Title } from "../Title";
import ItemDepoiment from "../ItemDepoiment";
import { Paragraph } from "../Paragraph";

const DepoimentsContainer = styled.section`
    width: 100%;
    padding: 70px 20px;
    background-color: var(--color-black);
`

const InsideDepoiments = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
`

const ListDepoiments = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px 32px;
    padding: 32px 0;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`


const Depoiments = (props) => {
    return (
        <DepoimentsContainer>
            <InsideDepoiments>
                <Title 
                    $color="var(--color-white)" 
                >
                    Nossos clientes <StyledSpan $color={props.defaultColor}>recomendam</StyledSpan>
                </Title>
                <ListDepoiments>
                    {props.depoimentsList.map(depoiment => (
                        <ItemDepoiment 
                            key={depoiment.name}
                            $filter={props.defaultFilter}
                        >
                            <Paragraph 
                                $color="var(--color-white)"
                            >
                                {depoiment.text}
                            </Paragraph>
                            
                            <Paragraph 
                                $color="var(--color-white)"
                            >
                                <StyledSpan $color={props.defaultColor}>{ depoiment.name }</StyledSpan> {depoiment.desc}
                            </Paragraph>
                        </ItemDepoiment>)
                    )}
                </ListDepoiments>
            </InsideDepoiments>
        </DepoimentsContainer>
    )
}

export default Depoiments;