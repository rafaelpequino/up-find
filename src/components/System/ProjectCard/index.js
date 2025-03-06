import styled from "styled-components";
import { Paragraph } from "../../Global/Paragraph";

const CardContainer = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    gap: 30px;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--color-overlay);
    cursor: pointer;
    margin-bottom: 20px;
    padding: 20px;
`

const ImgSide = styled.div`
    width: 50%;
    max-width: 400px;
    height: 100%;
    overflow: hidden;
    display: flex: 
    align-items: center;
    justify-contente: center;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const InfoSide = styled.div`
    width: 100%;
    color: var(--color-white);
    font-size: 14px;
`

const PriorityInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-white);
    font-size: 14px;
    margin: 0 0;

    & div {
        width: 30px;
        height: 30px;
        background-color: #CC0909;
        border-radius: 50%
    }
`

const ProjectCard = () => {
    return (
        <CardContainer>

            <InfoSide>
                <PriorityInfo>
                    <div></div>
                    Alta prioridade
                </PriorityInfo>

                <Paragraph
                    $color="var(--color-white)"
                    $margin="20px 0 5px"
                    $size="12px"
                    $opacity=".7"
                >
                    Website
                </Paragraph>

                <Paragraph
                    $color="var(--color-white)"
                    $margin="0 0 15px"
                    $size="20px"
                >
                    Site para loja de roupas femininas
                </Paragraph>

                <Paragraph
                    $color="var(--color-white)"
                    $margin="0"
                    $size="14px"
                    $opacity=".7"
                >
                    Preciso que seja criado do 0 um site criativo, inovador, com a essência da minha empresa
                </Paragraph>
            </InfoSide>
        </CardContainer>
    )
}

export default ProjectCard;