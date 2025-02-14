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

const depoimentsList = [
    {
        text: 'Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro.',
        name: 'Ana Paula',
        desc: 'contratou João Pedro'
    },
    {
        text: 'Os profissionais são pessoas dedicadas com seus serviços. Tudo o que é pedido é feito da maneira como foi pedido. Aprovado!',
        name: 'Jorge',
        desc: 'contratou Alícia'
    },
    {
        text: 'Um excelente profissional, pontual e acima de tudo confiável. Foi bastante educado e atencioso com o trabalho, recomendo.',
        name: 'Osvaldo',
        desc: 'contratou Rafael'
    }
];


const Depoiments = () => {
    return (
        <DepoimentsContainer>
            <InsideDepoiments>
                <Title 
                    $color="var(--color-white)" 
                >
                    Nossos clientes <StyledSpan $color="var(--color-sky-1)">recomendam</StyledSpan>
                </Title>
                <ListDepoiments>
                    {depoimentsList.map(depoiment => (
                        <ItemDepoiment key={depoiment.name}>
                            <Paragraph 
                                $color="var(--color-white)"
                            >
                                {depoiment.text}
                            </Paragraph>
                            
                            <Paragraph 
                                $color="var(--color-white)"
                            >
                                <StyledSpan $color="var(--color-sky-1)">{ depoiment.name }</StyledSpan> {depoiment.desc}
                            </Paragraph>
                        </ItemDepoiment>)
                    )}
                </ListDepoiments>
            </InsideDepoiments>
        </DepoimentsContainer>
    )
}

export default Depoiments;