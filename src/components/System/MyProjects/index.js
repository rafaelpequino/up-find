import { Subtitle } from "../../Global/Subtitle";
import { SectionContainer } from "../SectionContainer";
import ProjectsContainer from "../ProjectsContainer";

const projectsList = [
    {
        type: 'Website',
        title: 'Site para loja de roupas femininas',
        desc: 'Preciso que seja criado do 0 um site criativo, inovador, com a essência da minha empresa...'
    },
    {
        type: 'Website',
        title: 'Site para loja de roupas femininas',
        desc: 'Preciso que seja criado do 0 um site criativo, inovador, com a essência da minha empresa...'
    }
]

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

                <ProjectsContainer
                    needsNewBtn="true"
                    title="Abertos"
                    projectsList={projectsList}
                />

                <ProjectsContainer
                    title="Em andamento"
                    projectsList={projectsList}
                />

                <ProjectsContainer
                    title="Fianlizados"
                    projectsList={projectsList}
                />

            </SectionContainer>
        </main>
    )
}

export default MyProjects;