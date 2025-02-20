import styled from 'styled-components';
import { Subtitle } from '../../Global/Subtitle'
import { DoubleInput } from '../../Global/DoubleInput';
import InputText from '../../Global/InputText';

const SectionContainer = styled.section`
    width: 100%;
    height: max-contet;
    background-color: var(--color-shadow-soft);
    margin: 20px 0;
    padding: 20px;
    border-radius: 10px;
`

const Profile = (props) => {
    return (
        <main>
            <SectionContainer>
                <Subtitle
                    $color="var(--color-white)"
                    $align="left"
                    $margin="0"
                    $padding="0"

                >
                    Dados Pessoais
                </Subtitle>
                <br />

                <DoubleInput>
                    <InputText
                        label="Nome completo"
                        name="fullname"
                        type="text"
                        color={props.defaultColor}
                    />
                    <InputText
                        label="Email"
                        name="email"
                        type="email"
                        color={props.defaultColor}
                    />
                </DoubleInput>

                <DoubleInput>
                    <InputText
                        label="Celular"
                        name="cellphone"
                        type="text"
                        color={props.defaultColor}
                    />
                    <InputText
                        label="CPF"
                        name="cpf"
                        type="text"
                        color={props.defaultColor}
                    />
                </DoubleInput>
            </SectionContainer>
        </main>
    )
}

export default Profile;