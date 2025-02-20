import styled from 'styled-components';
import { Subtitle } from '../../Global/Subtitle'
import { DoubleInput } from '../../Global/DoubleInput';
import { Button } from '../../Global/Button';
import InputText from '../../Global/InputText';
import InputImg from '../../Global/InputImg';
import { SectionContainer } from '../SectionContainer';

const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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

                <DoubleInput>
                    <InputImg
                        label="Foto de perfil"
                        advice="Tamanho recomendado: 300 x 300"
                        text="Fazer upload da foto"
                        name="perfil"
                        color={props.defaultColor}
                    />

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

            <SectionContainer>
                <Subtitle
                    $color="var(--color-white)"
                    $align="left"
                    $margin="0"
                    $padding="0"

                >
                    Dados de Endereço
                </Subtitle>
                <br />
                
                <DoubleInput>
                    <InputText
                        label="CEP"
                        name="cep"
                        type="text"
                        color={props.defaultColor}
                    />
                    <InputText
                        label="Rua"
                        name="adress"
                        type="text"
                        color={props.defaultColor}
                    />
                </DoubleInput>
                
                <DoubleInput>
                    <InputText
                        label="Número / Complemento"
                        name="number"
                        type="text"
                        color={props.defaultColor}
                    />
                    <InputText
                        label="Bairro"
                        name="neighborhood"
                        type="text"
                        color={props.defaultColor}
                    />
                </DoubleInput>
                
                <DoubleInput>
                    <InputText
                        label="Estado"
                        name="state"
                        type="text"
                        color={props.defaultColor}
                    />
                    <InputText
                        label="Cidade"
                        name="city"
                        type="text"
                        color={props.defaultColor}
                    />
                </DoubleInput>

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

export default Profile;