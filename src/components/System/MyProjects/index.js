import ProjectCard from "../ProjectCard";
import { Subtitle } from '../../Global/Subtitle'
import { Button } from '../../Global/Button'
import { SectionContainer } from '../SectionContainer';

const MyProjects = ({ projectsList, btnNewProject }) => {
    return (
        <main>
            <SectionContainer>
                <Subtitle
                    $color="var(--color-white)"
                    $align="left"
                    $margin="0 0 30px"
                    $padding="0"

                >
                    Meus projetos
                </Subtitle>

                {btnNewProject && (
                    <Button
                        $defaultMargin = "20px 0"
                        setBorderColor="var(--color-sky-1)"
                        setBackgroundColor="var(--color-sky-1)"
                    >
                        + Novo projeto
                    </Button>
                )}

                {projectsList.map(project => (
                    <ProjectCard 
                        project={project}
                    />

                ))}
            </SectionContainer>

        </main>
    )
}

export default MyProjects;