import styled from "styled-components";
import { Paragraph } from "../../Global/Paragraph";
import { useNavigate } from "react-router-dom";

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
        border-radius: 50%
    }
`

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const priorityColor = project.priority === "Alta" ? "#CC0909" : project.priority === "Baixa" ? "#138f03" : "#f5e042"

    return (
        <CardContainer onClick={() => {navigate('/UpFinder/system/projeto')}}>

            <InfoSide>
                <PriorityInfo>
                    <div style={{ backgroundColor: priorityColor }}></div>
                    { project.priority } prioridade
                </PriorityInfo>

                <Paragraph
                    $color="var(--color-white)"
                    $margin="20px 0 5px"
                    $size="12px"
                    $opacity=".7"
                >
                    { project.type }
                </Paragraph>

                <Paragraph
                    $color="var(--color-white)"
                    $margin="0 0 15px"
                    $size="20px"
                >
                    { project.title }
                </Paragraph>

                <Paragraph
                    $color="var(--color-white)"
                    $margin="0"
                    $size="14px"
                    $opacity=".7"
                >
                    { project.desc }
                </Paragraph>
            </InfoSide>
        </CardContainer>
    )
}

export default ProjectCard;