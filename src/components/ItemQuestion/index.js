import styled from 'styled-components';
import { Paragraph } from '../Paragraph';
import { useState } from 'react';

const ItemQuestionContainer = styled.div`
    width: 100%;
    padding: 0 20px;
    border-radius: 15px;
    border: 2px solid var(--color-sky-1);
    margin: 20px 0;
`

const DivQuestion = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & img {
        width: 30px;
        filter: invert(1);
    }
`

const ItemQuestion = ({ question, children }) => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <ItemQuestionContainer>
            <DivQuestion onClick={() => setIsOpened(!isOpened)}>
                <Paragraph color="var(--color-white)"><strong>{question}</strong></Paragraph>
                <img src="/img/icons/bottom-arrow.svg" alt="Ícone de seta para baixo" />
            </DivQuestion>
            {isOpened && children}
        </ItemQuestionContainer>
    )
}

export default ItemQuestion;