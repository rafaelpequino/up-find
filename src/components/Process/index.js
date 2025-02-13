import styled from "styled-components";
import { Title } from "../Title";
import StepProcess from "../StepProcess";

const steps = [
    {
        title: '1 - Criação do projeto',
        desc: 'Você irá preencher um formulário fornecendo todas as informações necessárias sobre o projeto',
        align: 'right'
    },
    {
        title: '2 - Direcionamento',
        desc: 'Nosso algoritmo irá selecionar os desenvolvedores que mais se enquadram em suas necessidades',
        align: 'left'
    },
    {
        title: '3 - Contato e Orçamento',
        desc: 'Até 3 profissionais entrarão em contato para fornecer informações e orçamentos',
        align: 'right'
    },
    {
        title: '4 - Fechamento',
        desc: 'Após decidir qual o profissional que irá realizar o serviço, você poderá escolher uma das formas abaixo para finalizar a contratação',
        align: 'left'
    }
    
]

const ProcessContainer = styled.section`
    max-width: 100%;
    background-color: var(--color-black);
    margin-top: -41px;
    padding: 70px 20px;
`

const StepByStep = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    position: relative;
`

const CenterLine = styled.div`
    position: absolute;
    top: 75px;
    left: 50%;
    width: 2px;
    height: 78%;
    background-color: var(--color-white);

    @media (max-width: 768px) {
        left: 27px;
    }
`

const Process = () => {
    return (
        <ProcessContainer>
            <Title color="var(--color-white)" spanColor="var(--color-sky-1)" align="center">Cada passo do <span>processo</span> é pensado em você</Title>
            <StepByStep>
                { steps.map( step => (
                    <StepProcess 
                        titleColor="var(--color-sky-1)" 
                        align={step.align} 
                        titleText={step.title} 
                        desc={step.desc} /> 
                )) }
                <CenterLine></CenterLine>
            </StepByStep>
        </ProcessContainer>
    )
}

export default Process;