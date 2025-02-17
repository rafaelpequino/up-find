import styled from 'styled-components';
import { Paragraph } from '../Paragraph';
import { useState } from 'react';

const ItemQuestionContainer = styled.div`
    width: 100%;
    padding: 0 20px;
    border-radius: 15px;
    border-width: 1px;
    border-style: solid;
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
        transition: .2s
    }
`

const ItemQuestion = ({ question, children, color }) => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <ItemQuestionContainer style={{ borderColor: color }}>
            <DivQuestion onClick={() => setIsOpened(!isOpened)}>
                <Paragraph 
                    style={{transition: '.2s'}}
                    $color={isOpened ? color : 'var(--color-white)'}
                >
                    <strong>{question}</strong>
                </Paragraph>
                <img src="/img/icons/bottom-arrow.svg" alt="Ícone de seta para baixo" style={{ transform: isOpened ? 'rotate(180deg)' : 'rotate(0deg)' }}  />
            </DivQuestion>
            {isOpened && children}
        </ItemQuestionContainer>
    )
}

export default ItemQuestion;