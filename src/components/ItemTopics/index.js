import styled from "styled-components";
import { Paragraph } from "../Paragraph";

const Icon = styled.img`
    display: block;
    width: 50px;
    filter: ${ props => props.$filter || 'invert(1)'};
    text-align: center;
    margin: auto;
`

const ItemTopics = (props) => {
    return (
        <div>
            <Icon src={'/img/icons/' + props.icon + '.svg'} alt="Ícone" $filter={props.$filter}/>
            <Paragraph
                $align="center"
                $color="var(--color-white)"
            >
                {props.text}
            </Paragraph>
        </div>
    )
}

export default ItemTopics;