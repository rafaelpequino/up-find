import styled from "styled-components"

const IconMarks = styled.img`
    width: 70px;
`

const ItemDepoiment = ({ children, $filter }) => {
    return (
        <div>
            <IconMarks src="/img/icons/marks.svg" style={{filter: $filter}} />
            { children }
        </div>
    )
}

export default ItemDepoiment