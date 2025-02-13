import styled from "styled-components";
import { Paragraph } from "../Paragraph";

const Icon = styled.img`
    width: 50px;
    filter: invert(1);

    & span {
        color: #007BFF;
    }
`

const ItemTopics = (props) => {
    return (
        <div>
            <Icon src={'/img/icons/' + props.icon + '.svg'} alt="Ícone de um documento" />
            <Paragraph align="center" color="#fff">{ props.text }</Paragraph>
        </div>
    )
}

export default ItemTopics;