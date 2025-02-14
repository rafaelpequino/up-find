import ItemQuestion from '../ItemQuestion';
import { StyledSpan, Title } from '../Title';
import styled from 'styled-components';
import { Paragraph } from '../Paragraph';

const QuestionsContainer = styled.section`
    width: 100%;
    padding: 70px 20px;
    background-color: var(--color-black);
`

const ListQuestions = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: 32px 0;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const questionsList = [
    {
        key: 'question01',
        question: 'Preciso pagar para criar um projeto?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question02',
        question: 'Como os desenvolvedores são escolhidos para o projeto?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question03',
        question: 'Como funciona o pagamento pelo modo UpSafety?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question04',
        question: 'A plataforma oferece garantia caso o serviço não seja entregue?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question05',
        question: 'Posso contratar desenvolvedores para trabalhos contínuos ou recorrentes?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question06',
        question: 'O que faço se tiver um problema com um profissional?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    }
]

const Questions = () => {
    return (
        <QuestionsContainer>
            <Title 
                $color="var(--color-white)" 
            >
                <StyledSpan $color="var(--color-sky-1)">Dúvidas</StyledSpan> Frequentes
            </Title>
            <ListQuestions>
                {questionsList.map(question => (
                    <ItemQuestion question={question.question} key={question.key}>
                        <Paragraph 
                            $color="var(--color-white)" 
                            $margin="0 0 20px" 
                            $opacity=".8"
                        >
                            {question.answer}
                        </Paragraph>
                    </ItemQuestion>
                ))}
            </ListQuestions>
        </QuestionsContainer>
    )
}

export default Questions;