import ProjectCard from "../ProjectCard";
import { Subtitle } from '../../Global/Subtitle'
import { SectionContainer } from '../SectionContainer';

const MyProjects = () => {
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

                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </SectionContainer>

        </main>
    )
}

export default MyProjects;