import styled from "styled-components";
import { Paragraph } from "../Paragraph";
import { Title } from "../Title";

const DepoimentsContainer = styled.section`
    width: 100%;
    padding: 70px 20px;
    background-color: var(--color-black);
    
`

const ListDepoiments = styled.div`
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

const IconMarks = styled.img`
    width: 70px;
    filter: invert(30%) sepia(99%) saturate(7493%) hue-rotate(200deg) brightness(103%) contrast(102%);    
`

const Depoiments = () => {
    return (
        <DepoimentsContainer>
            <Title color="var(--color-white)" spanColor="var(--color-sky-1)">Nossos clientes <span>recomendam</span></Title>
            <ListDepoiments>
                <div>
                    <IconMarks src="/img/icons/marks.svg" />
                    <Paragraph color="var(--color-white)">Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro.</Paragraph>
                    <Paragraph color="var(--color-white)" colorSpan="var(--color-sky-1)"><span>Ana Paula</span> contratou João Pedro</Paragraph>
                </div>
                <div>
                    <IconMarks src="/img/icons/marks.svg" />
                    <Paragraph color="var(--color-white)">Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro.</Paragraph>
                    <Paragraph color="var(--color-white)" colorSpan="var(--color-sky-1)"><span>Ana Paula</span> contratou João Pedro</Paragraph>
                </div>
                <div>
                    <IconMarks src="/img/icons/marks.svg" />
                    <Paragraph color="var(--color-white)">Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro.</Paragraph>
                    <Paragraph color="var(--color-white)" colorSpan="var(--color-sky-1)"><span>Ana Paula</span> contratou João Pedro</Paragraph>
                </div>
            </ListDepoiments>
        </DepoimentsContainer>
    )
}

export default Depoiments;