import styled from "styled-components"
import { Paragraph } from "../../Global/Paragraph";
import { Button } from "../../Global/Button";
import { useNavigate } from "react-router-dom";

const ProjectContainerSec = styled.div`
    width: 100%;
    padding: 20px 0;

    @media (max-width: 700px) {
        padding: 20px 0 60px;
    }
`

const ProjectsTitle = styled.div`
    font-size: 14px;
    color: var(--color-white);
    opacity: .7;
    margin-bottom: 20px;
`

const ProjectsList = styled.div`
    width:  100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    &.finalizados {
        opacity: .5;
    }

    @media (max-width: 1700px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const NewProject = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 2px solid var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    text-align: center;
    opacity: .5;
    cursor: pointer;

    & div:first-child {
        font-size: 70px;
    }

    & div:nth-child(2) {
        font-size: 14px;
    }

    @media (max-width: 700px) {
        height: 350px;
    }

    @media (max-width: 500px) {
        height: 300px;
    }
`

const Project = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: var(--color-white);
    cursor: pointer;
    padding: 0;
    border-radius: 10px;
`

const ProjectImg = styled.div`
    width: 100%;
    height: 150px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    @media (max-width: 700px) {
        height: 300px;
    }

    @media (max-width: 700px) {
        height: 200px;
    }
`

const ProjectType = styled.div`
    font-size: 12px;
    opacity: .5;
    margin: 10px 0 5px;
`

const ProjectTitle = styled.div`
    font-size: 14px;
    margin-bottom: -10px;
`

const ProjectContainer = (props) => {
    
    const navigate = useNavigate();
    
    return (
        <ProjectContainerSec>
            <ProjectsTitle>{props.title}</ProjectsTitle>
            <ProjectsList>

                {props.needsNewBtn === 'true' && (
                    <NewProject>
                        <div>+</div>
                        <div>Novo projeto</div>
                    </NewProject>
                )}

                {props.projectsList.map(proj => (
                    <Project onClick={() => navigate('/upfinder/system/projeto')}>
                        <ProjectImg>
                            <img src={proj.imgName} alt="Imagem capa do serviço" />
                        </ProjectImg>

                        <ProjectType>{proj.type}</ProjectType>

                        <ProjectTitle>{proj.title}</ProjectTitle>

                        <Paragraph
                            $size="12px"
                            $color="var(--color-white)"
                        >
                            {proj.desc}
                        </Paragraph>

                        
                        <Button
                            width="100%"
                            setBackgroundColor="transparent"
                            setBorderColor="var(--color-sky-1)"
                        >
                            Ver projeto
                        </Button>
                        
                    </Project>
                ))}
            </ProjectsList>
        </ProjectContainerSec>
    )
}

export default ProjectContainer;