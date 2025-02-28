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