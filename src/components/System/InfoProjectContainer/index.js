import styled from "styled-components"
import { Paragraph } from "../../Global/Paragraph"

const Info = styled.div`
    font-size: 14px;
`

const InfoProjectContainer = (props) => {
    return (
        <Info>
            <Paragraph
                $color="var(--color-white)"
                $size="14px"
                $opacity=".7"
                $margin="30px 0 5px 0"
            >
                { props.title }
            </Paragraph>
            <Paragraph
                $color="var(--color-white)"
                $size="14px"
                $margin="0"
            >
                { props.children }
            </Paragraph>
        </Info>
    )
}

export default InfoProjectContainer;