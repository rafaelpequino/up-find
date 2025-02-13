import styled from "styled-components"
import { Paragraph } from "../Paragraph";

const IconMarks = styled.img`
    width: 70px;
    filter: invert(30%) sepia(99%) saturate(7493%) hue-rotate(200deg) brightness(103%) contrast(102%);    
`

const ItemDepoiment = ({ children }) => {
    return (
        <div>
            <IconMarks src="/img/icons/marks.svg" />
            { children }
        </div>
    )
}

export default ItemDepoiment