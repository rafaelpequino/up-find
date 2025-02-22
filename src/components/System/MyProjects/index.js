import styled from "styled-components";
import { Subtitle } from "../../Global/Subtitle";
import { SectionContainer } from "../SectionContainer";
import { Paragraph } from "../../Global/Paragraph";
import { Button } from "../../Global/Button";

const ProjectsContainer = styled.div`
    width: 100%;
    padding: 20px 0;
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
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    &.finalizados {
        opacity: .5;
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
`

const Project = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: var(--color-white);
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

const MyProjects = () => {
    return (
        <main>
            <SectionContainer>
                <Subtitle
                    $color="var(--color-white)"
                    $align="left"
                    $margin="0"
                    $padding="0"

                >
                    Meus Projetos
                </Subtitle>
                <br />

                <ProjectsContainer>
                    <ProjectsTitle>Abertos</ProjectsTitle>
                    <ProjectsList>
                        <NewProject>
                            <div>+</div>
                            <div>Novo projeto</div>
                        </NewProject>

                        <Project>

                            <ProjectImg>
                                <img src="/img/site.jpg" alt="Imagem capa do serviço" />
                            </ProjectImg>

                            <ProjectType>Websites</ProjectType>

                            <ProjectTitle>Site para loja de roupas femininas</ProjectTitle>
                            
                            <Paragraph
                                $size="12px"
                                $color="var(--color-white)"
                            >
                                Preciso que seja criado do 0 um site criativo, inovador, com a essência da minha empresa...
                            </Paragraph>
                            
                            <Button
                                width="100%"
                                setBackgroundColor="transparent"
                                setBorderColor="var(--color-sky-1)"
                            >
                                Ver projeto
                            </Button>
                        
                        </Project>
                    </ProjectsList>
                </ProjectsContainer>
                
                <ProjectsContainer>
                    <ProjectsTitle>Em Andamento</ProjectsTitle>
                    <ProjectsList>
                        <Project>

                            <ProjectImg>
                                <img src="/img/site.jpg" alt="Imagem capa do serviço" />
                            </ProjectImg>

                            <ProjectType>Websites</ProjectType>

                            <ProjectTitle>Site para loja de roupas femininas</ProjectTitle>
                            
                            <Paragraph
                                $size="12px"
                                $color="var(--color-white)"
                            >
                                Preciso que seja criado do 0 um site criativo, inovador, com a essência da minha empresa...
                            </Paragraph>
                            
                            <Button
                                width="100%"
                                setBackgroundColor="transparent"
                                setBorderColor="var(--color-sky-1)"
                            >
                                Ver projeto
                            </Button>
                        
                        </Project>
                    </ProjectsList>
                </ProjectsContainer>
                
                <ProjectsContainer>
                    <ProjectsTitle>Finalizados</ProjectsTitle>
                    <ProjectsList className="finalizados">
                        <Project>

                            <ProjectImg>
                                <img src="/img/site.jpg" alt="Imagem capa do serviço" />
                            </ProjectImg>

                            <ProjectType>Websites</ProjectType>

                            <ProjectTitle>Site para loja de roupas femininas</ProjectTitle>
                            
                            <Paragraph
                                $size="12px"
                                $color="var(--color-white)"
                            >
                                Preciso que seja criado do 0 um site criativo, inovador, com a essência da minha empresa...
                            </Paragraph>
                            
                            <Button
                                width="100%"
                                setBackgroundColor="transparent"
                                setBorderColor="var(--color-sky-1)"
                            >
                                Ver projeto
                            </Button>
                        
                        </Project>
                    </ProjectsList>
                </ProjectsContainer>
            </SectionContainer>
        </main>
    )
}

export default MyProjects;