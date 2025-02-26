import styled from "styled-components";
import { Paragraph } from "../../Global/Paragraph";
import { SectionContainer } from "../SectionContainer";

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

const Info = styled.div`
    font-size: 14px;
`

const Project = () => {
    return (
        <main>
            <SectionContainer>
                <BtnBack>
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

                    <Professional style={{border: '2px solid var(--color-sky-1)'}}>
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

                    <Professional style={{border: '2px solid var(--color-sky-1)'}}>
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

                <Info>
                    <Paragraph
                        $color="var(--color-white)"
                        $size="14px"
                        $opacity=".7"
                        $margin="30px 0 5px 0"
                    >
                        Tipo do projeto
                    </Paragraph>
                    <Paragraph
                        $color="var(--color-white)"
                        $size="14px"
                        $margin="0"
                    >
                        Website
                    </Paragraph>
                </Info>
            </SectionContainer>
        </main>
    )
}

export default Project;