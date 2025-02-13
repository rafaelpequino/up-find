import styled from "styled-components";
import ItemPlans from "../ItemPlans";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { Button } from "../Button";

const PlansContainer = styled.section`
    max-width: 100%;
    background-color: var(--color-black);
    margin-top: -40px;
    padding: 70px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const PlansComparison = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 50px 0;
`

const Loose = styled.div`
    width: 100%;
    background-color: var(--color-white);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const UpSafety = styled(Loose)`
    background-color: var(--color-sky-1);
    border-radius: 15px;
`

const Plans = () => {
    return (
        <PlansContainer>
            <Title color="var(--color-white)" spanColor="var(--color-sky-1)" align="center">Você decide como o projeto será <span>fechado</span></Title>
            <PlansComparison>
                <Loose>
                    <Subtitle>Avulso</Subtitle>
                    <br />
                    <ItemPlans icon="x" text="Pagamento e contratação são realizados diretamente com o profissional" />
                    <br />
                    <ItemPlans icon="x" text="Não nos responsabilizamos por eventuais problemas com o projeto ou pagamento" />
                </Loose>
                <UpSafety>
                    <Subtitle color="var(--color-white)">UpSafety</Subtitle>
                    <br />
                    <ItemPlans icon="check" text="Pagamento e contratação são realizados diretamente através da plataforma" />
                    <br />
                    <ItemPlans icon="check" text="Qualquer problema será resolvido diretamente pela plataforma" />
                    <br />
                    <ItemPlans icon="check" text="Mais segurança para você, para o profissional e para o projeto" />
                </UpSafety>
            </PlansComparison>
            
            <Button setBorderColor="var(--color-sky-1)" setBackgroundColor="transparent">Criar Projeto</Button>
        </PlansContainer>
    )
}

export default Plans;