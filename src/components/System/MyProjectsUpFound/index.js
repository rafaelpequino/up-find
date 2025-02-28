import { Subtitle } from "../../Global/Subtitle";
import { SectionContainer } from "../SectionContainer";
import ProjectContainer from "../ProjectContainer";
import { useNavigate } from "react-router-dom";

const projectsList = [
    {
        imgName: '/img/node_code.jpg',
        type: 'Website',
        title: 'Site para loja de roupas femininas',
        desc: 'Preciso que seja criado do 0 um site criativo, inovador, com a essência da minha empresa...'
    },
    {
        imgName: '/img/code.jpg',
        type: 'Website',
        title: 'Site para loja de roupas femininas',
        desc: 'Preciso que seja criado do 0 um site criativo, inovador, com a essência da minha empresa...'
    }
]

const MyProjectsUpFound = (props) => {
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

                <ProjectContainer
                    title="Abertos"
                    projectsList={projectsList}
                    defaultColor={props.defaultColor}
                />

                <ProjectContainer
                    title="Em andamento"
                    projectsList={projectsList}
                    defaultColor={props.defaultColor}
                />

                <ProjectContainer
                    title="Finalizados"
                    projectsList={projectsList}
                    defaultColor={props.defaultColor}
                />

            </SectionContainer>
        </main>
    )
}

export default MyProjectsUpFound;