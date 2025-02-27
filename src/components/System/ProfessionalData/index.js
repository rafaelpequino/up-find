import styled from 'styled-components';
import { Subtitle } from '../../Global/Subtitle'
import { DoubleInput } from '../../Global/DoubleInput';
import { Button } from '../../Global/Button';
import InputText from '../../Global/InputText';
import { SectionContainer } from '../SectionContainer';
import Select from '../../Global/Select';
import TextArea from '../../Global/TextArea';

const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const SectionsInput = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: calc(35% - 10px) calc(35% - 10px) calc(15% - 5px) calc(15% - 5px);
    gap: 10px;

`

const BtnNewSecInput = styled.div`
    font-size: 14px;
    color: var(--color-white);
    opacity: .7;
    cursor: pointer;
    margin-bottom: 20px;
`

const specialties = [
    "Web Frontend",
    "Web Backend",
    "Full Stack",
    "Mobile Apps",
    "E-commerce",
    "APIs e Integrações",
    "Landing Pages",
    "WordPress e CMS",
    "UX/UI Design",
    "Automação e Bots",
    "Inteligência Artificial",
    "Machine Learning",
    "Chatbots",
    "SEO e Performance",
    "Segurança Web",
    "Games",
    "Scraping e Coleta de Dados",
    "Cloud e Hospedagem",
    "Banco de Dados",
    "Marketing Digital e Growth"
];


const ProfessionalData = (props) => {
    return (
        <main>
            <SectionContainer>
                <Subtitle
                    $color="var(--color-white)"
                    $align="left"
                    $margin="0"
                    $padding="0"

                >
                    Dados Profissionais
                </Subtitle>
                <br />


                <DoubleInput>
                    <Select
                        label="Especialidade"
                        name="especialidade"
                        required="true"
                        color={props.defaultColor}
                        options={specialties}
                    />
                    <InputText
                        label="Portfólio"
                        name="fullname"
                        type="text"
                        required="false"
                        color={props.defaultColor}
                    />
                </DoubleInput>


                <DoubleInput>
                    <InputText
                        label="LinkedIn"
                        name="linkedin"
                        type="text"
                        required="false"
                        color={props.defaultColor}
                    />
                    <InputText
                        label="GitHub"
                        name="github"
                        type="text"
                        required="false"
                        color={props.defaultColor}
                    />
                </DoubleInput>

                <InputText
                    label="Quais tecnologias você domina?"
                    name="fullname"
                    type="text"
                    color={props.defaultColor}
                    margin="20px 0"
                    placeholder="Ex.: JavaScript, TypeScript, React, Vue, .NET, Ruby, SQL Server, Python..."
                />

                <TextArea
                    label="Biografia"
                    name="fullname"
                    type="text"
                    color={props.defaultColor}
                    margin="20px 0"
                    placeholder="Nos conte mais sobre você, sua carreira, seu projetos..."
                />

                <div>
                    <SectionsInput>
                        <InputText
                            label="Curso"
                            name="curso"
                            type="text"
                            color={props.defaultColor}
                            margin="10px 0"
                            required="false"
                            placeholder="Ex.: Tecnólogo em Análise e Desenvolvimento de Sistemas"
                        />
                        <InputText
                            label="Instituição"
                            name="instituicao"
                            type="text"
                            color={props.defaultColor}
                            margin="10px 0"
                            required="false"
                            placeholder="Ex.: Centro Universitário Senac"
                        />
                        <InputText
                            label="Ano de Início"
                            name="ano-inicio"
                            type="number"
                            color={props.defaultColor}
                            margin="10px 0"
                            required="false"
                            placeholder="Ex.: 2028"
                        />
                        <InputText
                            label="Ano de Formação"
                            name="ano-formacao"
                            type="number"
                            color={props.defaultColor}
                            margin="10px 0"
                            required="false"
                            placeholder="Ex.: 2028"
                        />
                    </SectionsInput>
                    <BtnNewSecInput>+ adicionar formação</BtnNewSecInput>
                </div>

                <div>
                    <SectionsInput>
                        <InputText
                            label="Empresa"
                            name="empresa"
                            type="text"
                            color={props.defaultColor}
                            margin="10px 0"
                            required="false"
                            placeholder="Ex.: Casas Bahia"
                        />
                        <InputText
                            label="Cargo"
                            name="cargo"
                            type="text"
                            color={props.defaultColor}
                            margin="10px 0"
                            required="false"
                            placeholder="Ex.: Desenvolvedor Sênior"
                        />
                        <InputText
                            label="Ano de Início"
                            name="ano-inicio"
                            type="number"
                            color={props.defaultColor}
                            margin="10px 0"
                            required="false"
                            placeholder="Ex.: 2028"
                        />
                        <InputText
                            label="Ano de Saída ⓘ"
                            name="ano-formacao"
                            type="number"
                            color={props.defaultColor}
                            margin="10px 0"
                            required="false"
                            placeholder="Ex.: 2028"
                        />
                    </SectionsInput>
                    <BtnNewSecInput>+ adicionar experiência</BtnNewSecInput>
                </div>

                <DoubleInput>
                    <div></div>
                    <BtnContainer>
                        <Button
                            setBackgroundColor={props.defaultColor}
                            setBorderColor={props.defaultColor}
                        >
                            Salvar alterações
                        </Button>
                    </BtnContainer>

                </DoubleInput>
            </SectionContainer>
        </main>
    )
}

export default ProfessionalData;