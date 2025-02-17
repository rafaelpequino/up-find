import ItemQuestion from '../ItemQuestion';
import { StyledSpan, Title } from '../../Global/Title';
import styled from 'styled-components';
import { Paragraph } from '../../Global/Paragraph';

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

const Questions = (props) => {
    return (
        <QuestionsContainer>
            <Title 
                $color="var(--color-white)" 
            >
                <StyledSpan $color={props.defaultColor}>Dúvidas</StyledSpan> Frequentes
            </Title>
            <ListQuestions>
                {props.questionsList.map(question => (
                    <ItemQuestion 
                        question={question.question} 
                        key={question.key} 
                        color={props.defaultColor}
                    >
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