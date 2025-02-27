import styled from 'styled-components';
import { Subtitle } from '../../Global/Subtitle'
import { DoubleInput } from '../../Global/DoubleInput';
import { Button } from '../../Global/Button';
import InputText from '../../Global/InputText';
import InputImg from '../../Global/InputImg';
import { SectionContainer } from '../SectionContainer';
import Select from '../../Global/Select';

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


                <Select 
                    label="Especialidade"
                    name="especialidade"
                    required="true"
                    color={props.defaultColor}
                    margin="0 0 30px"
                    options={specialties}
                />

                <InputText
                    label="Nome completo"
                    name="fullname"
                    type="text"
                    color={props.defaultColor}
                    margin="0 0 20px"
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