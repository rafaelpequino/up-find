import styled from "styled-components";
import { Paragraph } from "../../Global/Paragraph";
import { SectionContainer } from "../SectionContainer";
import InfoProjectContainer from "../InfoProjectContainer";
import { useNavigate } from "react-router-dom";

const BtnBack = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--color-white);
    font-size: 12px;
    font-weight: 200;
    opacity: .7;
    margin-bottom: 20px;
    cursor: pointer;

    & img {
        filter: invert(1);
        width: 15px;
    }
`

const PriorityInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-white);
    font-size: 14px;
    margin: 30px 0;

    & div {
        width: 30px;
        height: 30px;
        background-color: #CC0909;
        border-radius: 50%
    }
`

const ProfessionalInfo = styled.div`

`

const Professional = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    color: var(--color-white);
    font-size: 14px;
    margin: 10px 0;
    max-width: max-content;
    padding-right: 15px;
    border-radius: 10px;

    & div {
        display: flex;
        align-items: center;
        max-width: max-content;
    }
`

const ProfessionalImg = styled.div`
    gap: 10px;
    text-decoration: underline;
    cursor: pointer;
    opacity: .7;

    & div {
        max-width: 40px;
        min-width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & div img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ProposalOptions = styled.div`
    gap: 5px;

    & div {
        color: var(--color-sky-1);
        text-align: center;
        text-decoration: underline;
        cursor: pointer;
    }
`
const projectData = [
    {
        title: 'Tipo do projeto',
        text: 'Website'
    },
    {
        title: 'Título',
        text: 'Site para loja de roupas femininas'
    },
    {
        title: 'Descrição',
        text: 'Preciso que seja criado do 0 um site criativo, inovador, com a essência da minha empresa um espaço digital que represente nossa identidade, conectando desenvolvedores e clientes de forma intuitiva, moderna e eficiente. O site deve refletir os valores da FindCoders, transmitindo confiança, dinamismo e tecnologia de ponta. Cada detalhe da interface será pensado para proporcionar uma experiência fluida e envolvente, combinando um design atraente com funcionalidades que realmente fazem a diferença.'
    },
    {
        title: 'Objetivo',
        text: 'O objetivo é atrair mais clientes para a loja física, e aumentar o número de vendas online.'
    },
    {
        title: 'Público-alvo',
        text: 'Mulheres'
    },
    {
        title: 'Principais funcionalidades',
        text: 'Não definido'
    },
    {
        title: 'Preferência por tecnologias',
        text: 'Não'
    },
    {
        title: 'Possui algo desenvolvido?',
        text: 'Não'
    },
    {
        title: 'Referências',
        text: 'https://www.oneup.com.br/?gad_source=1&gclid=CjwKCAiA2y8bBhBoEiwAbM904KTF8NVzpifZSFNORSRlA9HNuzwrYSOgm4uUJIJ4xE0Jw_cw6dh0cJTUQAvD_BwE'
    },
    {
        title: 'Orçamento',
        text: 'Não definido'
    },
    {
        title: 'Informações adicionais',
        text: 'Não definido'
    }
];


const Project = () => {
    const navigate = useNavigate();

    return (
        <main>
            <SectionContainer>
                <BtnBack onClick={() => navigate('/UpFinder/system/meusprojetos')}>
                    <img src="/img/icons/back.svg" alt="Ícone de voltar" />
                    Voltar
                </BtnBack>

                <PriorityInfo>
                    <div></div>
                    Alta prioridade
                </PriorityInfo>

                <ProfessionalInfo>
                    <Paragraph
                        $color="var(--color-white)"
                        $opacity=".5"
                        $size="14px"
                    >
                        Profissionais interessados
                    </Paragraph>

                    <Professional style={{ border: '2px solid var(--color-sky-1)' }}>
                        <ProfessionalImg>
                            <div>
                                <img src="/img/user.jpg" alt="Foto do profissional" />
                            </div>
                            Rafael Pequino
                        </ProfessionalImg>
                        <div>
                            fez uma proposta: R$2000
                        </div>
                        <ProposalOptions>
                            <div>Aceitar</div>
                            |
                            <div>Negociar</div>
                        </ProposalOptions>
                    </Professional>

                    <Professional style={{ border: '2px solid var(--color-sky-1)' }}>
                        <ProfessionalImg>
                            <div>
                                <img src="/img/user.jpg" alt="Foto do profissional" />
                            </div>
                            Rafael Pequino
                        </ProfessionalImg>
                        <div>
                            fez uma proposta: R$1800
                        </div>
                        <ProposalOptions>
                            <div>Aceitar</div>
                            |
                            <div>Negociar</div>
                        </ProposalOptions>
                    </Professional>

                    <Professional>
                        <ProfessionalImg>
                            <div>
                                <img src="/img/user.jpg" alt="Foto do profissional" />
                            </div>
                            Rafael Pequino
                        </ProfessionalImg>
                    </Professional>
                </ProfessionalInfo>

                {projectData.map(project => (
                    <InfoProjectContainer
                        title={project.title}
                    >
                        {project.text}
                    </InfoProjectContainer>
                ))}

            </SectionContainer>
        </main>
    )
}

export default Project;