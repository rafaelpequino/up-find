import styled from "styled-components";
import { Paragraph } from "../../Global/Paragraph";

const ItemPlansContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
`

const ImgIcon = styled.img`
    width: 30px;
`

const ItemPlans = (props) => {
    const colorText = props.icon === "x" ? 'var(--color-black)' : 'var(--color-white)'
    const filterIcon = props.icon === "x" ? 0 : 1;

    return (
        <ItemPlansContainer>
            <ImgIcon style={{ filter: `invert(${filterIcon})` }} src={`/img/icons/${props.icon}.svg`} alt="Ícone" />
            <Paragraph
                $color={colorText}
            >
                {props.text}
            </Paragraph>
        </ItemPlansContainer>
    )
}

export default ItemPlans;